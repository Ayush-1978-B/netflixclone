import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { FaSearch, FaBell, FaUser, FaBars } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${props => props.$scrolled ? '#000' : 'transparent'};
  padding: 1rem 4%;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled(Link)`
  color: #e50914;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #b3b3b3;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  width: ${props => props.$isOpen ? '200px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #b3b3b3;
  }
`;

const SearchButton = styled.button`
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 0.5rem;
`;

const UserMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: #e50914;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid #333;
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 150px;
  display: ${props => props.$isOpen ? 'block' : 'none'};
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    background-color: #333;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  color: #fff;
  background: none;
  border: none;
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const AuthButton = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  
  &.signin {
    color: #fff;
  }
  
  &.signup {
    background-color: #e50914;
    color: #fff;
    
    &:hover {
      background-color: #f40612;
    }
  }
`;

const LoginIconButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #222;
  color: #fff;
  font-size: 1.3rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  margin-left: 0.5rem;
  text-decoration: none;
  &:hover, &:focus {
    background: #e50914;
    color: #fff;
  }
`;

function Navbar() {
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setDropdownOpen(false);
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <Nav $scrolled={scrolled || !isHomePage}>
      <NavContainer>
        <NavLeft>
          <Logo to="/">NETFLIX</Logo>
          {currentUser && (
            <NavLinks>
              <NavLink to="/browse">Home</NavLink>
              <NavLink to="/browse">TV Shows</NavLink>
              <NavLink to="/browse">Movies</NavLink>
              <NavLink to="/browse">New & Popular</NavLink>
              <NavLink to="/browse">My List</NavLink>
            </NavLinks>
          )}
        </NavLeft>

        <NavRight>
          {currentUser ? (
            <>
              <SearchContainer>
                <SearchInput
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  $isOpen={searchOpen}
                />
                <SearchButton onClick={() => setSearchOpen(!searchOpen)}>
                  <FaSearch />
                </SearchButton>
              </SearchContainer>

              <UserMenu onClick={() => setDropdownOpen(!dropdownOpen)}>
                <FaUser />
                <UserAvatar>
                  {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : 'U'}
                </UserAvatar>
                <DropdownMenu $isOpen={dropdownOpen}>
                  <DropdownItem to="/profile">Profile</DropdownItem>
                  <DropdownItem to="/browse">Account</DropdownItem>
                  <DropdownItem to="/browse">Help Center</DropdownItem>
                  <DropdownItem as="button" onClick={handleLogout}>
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </UserMenu>
            </>
          ) : (
            <>
              {/* Hide text buttons, show only icon for login */}
              <LoginIconButton to="/login" title="Sign In">
                <FaUser />
              </LoginIconButton>
            </>
          )}

          <MobileMenuButton>
            <FaBars />
          </MobileMenuButton>
        </NavRight>
      </NavContainer>
    </Nav>
  );
}

export default Navbar; 