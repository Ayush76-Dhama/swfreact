import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';



const StyledNavbar = styled(BootstrapNavbar)`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  
  /* Add padding to account for fixed position */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  
  /* Shrink navbar on scroll */
  &.scrolled {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #333;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: #FF4B6E;
  }
  
  &.active {
    color: #FF4B6E;
    font-weight: 600;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 1rem;
      right: 1rem;
      height: 2px;
      background-color: #FF4B6E;
      border-radius: 2px;
    }
  }
`;

const DonateButton = styled(Button)`
  background-color: #FF4B6E;
  border-color: #FF4B6E;
  color: white;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  margin-left: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e03d5d;
    border-color: #e03d5d;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Logo = styled.img`
  height: 50px;
  transition: all 0.3s ease;
  
  .scrolled & {
    height: 40px;
  }
`;

const NavbarToggle = styled(BootstrapNavbar.Toggle)`
  border: none;
  padding: 0.25rem 0.5rem;
  
  &:focus {
    box-shadow: none;
  }
  
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledNavbar 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      className={scrolled ? 'scrolled' : ''}
    >
      
      <Container>
      
        <BootstrapNavbar.Brand as={NavLink} to="/">
          <Logo 
            src="/images/img/logo/logo2.jpg" 
            alt="SheWings Logo" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150x50?text=SheWings";
            }}
          />
        </BootstrapNavbar.Brand>
        <NavbarToggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <StyledNavLink to="/" end>Home</StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink to="/about">About Us</StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink to="/impact">Impact</StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink to="/vision-mission">Vision & Mission</StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink to="/campaigns">Campaigns</StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink to="/gallery">Gallery</StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink to="/contact">Contact Us</StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <DonateButton as={NavLink} to="/donate">Donate Now</DonateButton>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default Navbar;
