import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { FaUser, FaEnvelope, FaEdit, FaSave, FaTimes, FaSignOutAlt, FaCog } from 'react-icons/fa';

const ProfileContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  padding-top: 70px;
  padding-bottom: 2rem;
`;

const ProfileCard = styled(motion.div)`
  max-width: 800px;
  margin: 2rem auto;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  padding: 3rem;
  
  @media (max-width: 768px) {
    margin: 1rem;
    padding: 2rem;
  }
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ProfileTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProfileSubtitle = styled.p`
  color: #b3b3b3;
  font-size: 1.1rem;
`;

const ProfileAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #e50914;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  margin: 0 auto 2rem;
  border: 4px solid #333;
`;

const ProfileSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #111;
  border-radius: 4px;
  border: 1px solid #333;
`;

const InfoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #b3b3b3;
  font-size: 0.9rem;
  font-weight: 600;
`;

const InfoValue = styled.div`
  color: #fff;
  font-size: 1rem;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: #e50914;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(229, 9, 20, 0.1);
  }
`;

const Input = styled.input`
  background-color: #333;
  border: 1px solid #555;
  border-radius: 4px;
  color: #fff;
  padding: 0.5rem;
  font-size: 1rem;
  width: 200px;
  
  &:focus {
    outline: none;
    border-color: #e50914;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SaveButton = styled.button`
  background-color: #46d369;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3db85a;
  }
`;

const CancelButton = styled.button`
  background-color: #666;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #555;
  }
`;

const ActionSection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  background-color: #111;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: #333;
  }
  
  &.danger {
    color: #e50914;
    border-color: #e50914;
    
    &:hover {
      background-color: rgba(229, 9, 20, 0.1);
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: #111;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #333;
`;

const StatNumber = styled.div`
  color: #e50914;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #b3b3b3;
  font-size: 0.9rem;
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

function Profile() {
  const { currentUser, logout, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState(currentUser?.displayName || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const handleSaveName = async () => {
    if (!newName.trim()) {
      setError('Name cannot be empty');
      return;
    }

    try {
      setLoading(true);
      setError('');
      await updateUserProfile(newName.trim());
      setEditingName(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
      setError('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setNewName(currentUser?.displayName || '');
    setEditingName(false);
    setError('');
  };

  if (!currentUser) {
    return (
      <ProfileContainer>
        <ProfileCard>
          <ProfileHeader>
            <ProfileTitle>Access Denied</ProfileTitle>
            <ProfileSubtitle>Please sign in to view your profile.</ProfileSubtitle>
            <Link to="/login" style={{ color: '#e50914', textDecoration: 'none' }}>
              Sign In
            </Link>
          </ProfileHeader>
        </ProfileCard>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <ProfileCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileHeader>
          <ProfileAvatar>
            {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : 'U'}
          </ProfileAvatar>
          <ProfileTitle>My Profile</ProfileTitle>
          <ProfileSubtitle>Manage your account settings and preferences</ProfileSubtitle>
        </ProfileHeader>

        <ProfileSection>
          <SectionTitle>
            <FaUser /> Account Information
          </SectionTitle>
          <InfoGrid>
            <InfoItem>
              <InfoLabel>
                <FaUser /> Display Name
              </InfoLabel>
              {editingName ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter your name"
                  />
                  <ButtonGroup>
                    <SaveButton onClick={handleSaveName} disabled={loading}>
                      {loading ? <LoadingSpinner /> : <FaSave />}
                    </SaveButton>
                    <CancelButton onClick={handleCancelEdit}>
                      <FaTimes />
                    </CancelButton>
                  </ButtonGroup>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <InfoValue>{currentUser.displayName || 'Not set'}</InfoValue>
                  <EditButton onClick={() => setEditingName(true)}>
                    <FaEdit />
                  </EditButton>
                </div>
              )}
            </InfoItem>

            <InfoItem>
              <InfoLabel>
                <FaEnvelope /> Email Address
              </InfoLabel>
              <InfoValue>{currentUser.email}</InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>
                <FaCog /> Account Created
              </InfoLabel>
              <InfoValue>
                {currentUser.metadata?.creationTime 
                  ? new Date(currentUser.metadata.creationTime).toLocaleDateString()
                  : 'Unknown'
                }
              </InfoValue>
            </InfoItem>
          </InfoGrid>

          {error && (
            <div style={{ color: '#e87c03', marginTop: '1rem', fontSize: '0.9rem' }}>
              {error}
            </div>
          )}
        </ProfileSection>

        <ProfileSection>
          <SectionTitle>
            <FaCog /> Account Statistics
          </SectionTitle>
          <StatsGrid>
            <StatCard>
              <StatNumber>0</StatNumber>
              <StatLabel>Movies in My List</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>0</StatNumber>
              <StatLabel>Watch History</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>0</StatNumber>
              <StatLabel>Favorites</StatLabel>
            </StatCard>
          </StatsGrid>
        </ProfileSection>

        <ActionSection>
          <SectionTitle>
            <FaCog /> Account Actions
          </SectionTitle>
          <ActionButton onClick={() => navigate('/browse')}>
            <FaCog /> Browse Movies
          </ActionButton>
          <ActionButton onClick={() => navigate('/browse')}>
            <FaCog /> Account Settings
          </ActionButton>
          <ActionButton onClick={() => navigate('/browse')}>
            <FaCog /> Help & Support
          </ActionButton>
          <ActionButton className="danger" onClick={handleLogout}>
            <FaSignOutAlt /> Sign Out
          </ActionButton>
        </ActionSection>
      </ProfileCard>
    </ProfileContainer>
  );
}

export default Profile; 