import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';


const TopBar = styled.div`
  background: #FF4B6E;
  padding: 8px 0;
  color: white;
`;

const TopBarInfo = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  
  a {
    color: white;
    text-decoration: none;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    transition: all 0.3s ease;
    
    &:hover {
      background: white;
      color: #FF4B6E;
    }
  }
`;

const StyledNavbar = styled(Navbar)`
  background: white;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  
  .navbar-nav .nav-link {
    color: #2D3436;
    font-weight: 500;
    padding: 1rem 1.2rem;
    transition: color 0.3s ease;
    
    &:hover, &.active {
      color: #FF4B6E;
    }
  }
`;

const BrandLogo = styled(Navbar.Brand)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #FF4B6E !important;
  text-decoration: none;
  
  span {
    color: #2D3436;
  }
`;

const DonateButton = styled(Button)`
  background: #FF4B6E;
  border: none;
  padding: 0.8rem 2rem;
  font-weight: 600;
  border-radius: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #FF758C;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 75, 110, 0.2);
  }
  
    .logoshe{
    max-height:60px;
    width:auto;

    
    }
`;

const Navigation = () => {
  return (
    <>
      <TopBar>
        <Container>
          <div className="row align-items-center">
            <div className="col-md-8">
              <TopBarInfo>
                <a href="mailto:info@shewings.com">
                  <i className="fas fa-envelope" />
                  info@shewings.com
                </a>
                <a href="tel:8800633291">
                  <i className="fas fa-phone-alt" />
                  8800633291
                </a>
              </TopBarInfo>
            </div>
            <div className="col-md-4">
              <SocialLinks>
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
              </SocialLinks>
            </div>
          </div>
        </Container>
      </TopBar>
      
      <StyledNavbar expand="lg" sticky="top">
        <Container>
          <BrandLogo href="/">
            <img   className="logoshe"  src="images/img/logo/logo2.jpg" alt="" />
          </BrandLogo>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" active>Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/impact">Impact</Nav.Link>
              <Nav.Link href="/vision-mission">Vision & Mission</Nav.Link>
              <Nav.Link href="/tender">Tenders</Nav.Link>
              <Nav.Link href="/our-supporters">Our Supporters</Nav.Link>
              <Nav.Link href="/our-campaigns">Our Campaigns</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <DonateButton href="/donate">Donate Now</DonateButton>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </>
  );
};

export default Navigation; 