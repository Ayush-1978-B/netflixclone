import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const SignupContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 100%
  ),
  url('https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const SignupCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  display: block;
  color: #e50914;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  text-decoration: none;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background-color: #333;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  box-sizing: border-box;
  
  &::placeholder {
    color: #8c8c8c;
  }
  
  &:focus {
    outline: none;
    background-color: #454545;
  }
  
  &.error {
    border-bottom: 2px solid #e87c03;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #8c8c8c;
  z-index: 1;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #8c8c8c;
  cursor: pointer;
  z-index: 1;
  
  &:hover {
    color: #fff;
  }
`;

const ErrorMessage = styled.div`
  color: #e87c03;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.div`
  color: #46d369;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SignupButton = styled.button`
  background-color: #e50914;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f40612;
  }
  
  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #8c8c8c;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #333;
  }
  
  span {
    padding: 0 1rem;
    font-size: 0.9rem;
  }
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: #8c8c8c;
  
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const PasswordStrength = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;

const StrengthBar = styled.div`
  height: 4px;
  background-color: #333;
  border-radius: 2px;
  margin-top: 0.25rem;
  overflow: hidden;
`;

const StrengthFill = styled.div`
  height: 100%;
  background-color: ${props => {
    if (props.strength === 'weak') return '#e50914';
    if (props.strength === 'medium') return '#f5c518';
    if (props.strength === 'strong') return '#46d369';
    return '#333';
  }};
  width: ${props => {
    if (props.strength === 'weak') return '33%';
    if (props.strength === 'medium') return '66%';
    if (props.strength === 'strong') return '100%';
    return '0%';
  }};
  transition: all 0.3s ease;
`;

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const getPasswordStrength = (password) => {
    if (!password) return 'none';
    if (password.length < 6) return 'weak';
    if (password.length < 10) return 'medium';
    return 'strong';
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      setError('');
      setSuccess('');
      setLoading(true);
      
      await signup(formData.email, formData.password);
      await updateUserProfile(formData.name);
      
      setSuccess('Account created successfully! Redirecting...');
      setTimeout(() => {
        navigate('/browse');
      }, 2000);
    } catch (error) {
      console.error('Signup error:', error);
      if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists');
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <SignupContainer>
      <SignupCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo to="/">NETFLIX</Logo>
        <Title>Sign Up</Title>
        
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <Input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleInputChange}
              className={error && !formData.name ? 'error' : ''}
              required
            />
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <FaEnvelope />
            </InputIcon>
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              className={error && !formData.email ? 'error' : ''}
              required
            />
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className={error && !formData.password ? 'error' : ''}
              required
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </PasswordToggle>
          </InputGroup>

          {formData.password && (
            <PasswordStrength>
              <div style={{ color: '#8c8c8c' }}>
                Password strength: {passwordStrength}
              </div>
              <StrengthBar>
                <StrengthFill strength={passwordStrength} />
              </StrengthBar>
            </PasswordStrength>
          )}

          <InputGroup>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={error && !formData.confirmPassword ? 'error' : ''}
              required
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </PasswordToggle>
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <SignupButton type="submit" disabled={loading}>
            {loading ? (
              <>
                <LoadingSpinner /> Creating Account...
              </>
            ) : (
              'Sign Up'
            )}
          </SignupButton>
        </Form>

        <Divider>
          <span>Already have an account?</span>
        </Divider>

        <LoginLink>
          <Link to="/login">Sign in now</Link>
        </LoginLink>

        <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#8c8c8c' }}>
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </div>
      </SignupCard>
    </SignupContainer>
  );
}

export default Signup; 