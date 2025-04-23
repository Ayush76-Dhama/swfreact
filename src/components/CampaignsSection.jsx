import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Carousel } from "react-bootstrap";




const Section = styled.section`
  padding: 6rem 0;njbccfx
  background: #F8F9FA;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2D3436;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #FF4B6E;
    margin: 1rem auto 0;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const CardTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2D3436;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: #FF4B6E;
  }
`;

const CardDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #636E72;
  margin: 0;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const CampaignsSection = () => (
  <Section id="campaigns">
    <Container>
      <Title>Our Campaigns</Title>
      <Row className="g-4">
        <Col lg={4} md={6}>
          <Card>
            <ImageWrapper>
              <Carousel interval={3000} fade>
                <Carousel.Item>
                  <img src="/images/img/campaign/IMG_4748.JPG" className="d-block w-100" alt="#YesIBleed Slide 1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/images/img/campaign/IMG_4749.JPG" className="d-block w-100" alt="#YesIBleed Slide 2" />
                </Carousel.Item>
              </Carousel>
            </ImageWrapper>
            <CardContent>
              <CardTitle>#YesIBleed</CardTitle>
              <CardDescription>
                Ending the stigma around menstruation through education and awareness.
                Join us in breaking taboos and promoting menstrual health education.
              </CardDescription>
            </CardContent>
          </Card>
        </Col>

        <Col lg={4} md={6}>
          <Card>
            <ImageWrapper>
              <Carousel interval={3000} fade>
                <Carousel.Item>
                  <img src="/images/img/campaign/IMG_4762.JPG" className="d-block w-100" alt="#RedDotCampaign Slide 1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/images/img/campaign/IMG_4763.JPG" className="d-block w-100" alt="#RedDotCampaign Slide 2" />
                </Carousel.Item>
              </Carousel>
            </ImageWrapper>
            <CardContent>
              <CardTitle>#RedDotCampaign</CardTitle>
              <CardDescription>
                Promoting sustainable menstrual hygiene practices with eco-friendly solutions.
                Creating a better future through responsible choices.
              </CardDescription>
            </CardContent>
          </Card>
        </Col>

        <Col lg={4} md={6}>
          <Card>
            <ImageWrapper>
              <Carousel interval={3000} fade>
                <Carousel.Item>
                  <img src="/images/img/campaign/IMG_4757.JPG" className="d-block w-100" alt="#FeedTheFuture Slide 1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/images/img/campaign/IMG_4758.JPG" className="d-block w-100" alt="#FeedTheFuture Slide 2" />
                </Carousel.Item>
              </Carousel>
            </ImageWrapper>
            <CardContent>
              <CardTitle>#FeedTheFuture</CardTitle>
              <CardDescription>
                Supporting child nutrition and health through education and food support.
                Building stronger communities one meal at a time.
              </CardDescription>
            </CardContent>
          </Card>
        </Col>

        <Col lg={4} md={6}>
          <Card>
            <ImageWrapper>
              <Carousel interval={3000} fade>
                <Carousel.Item>
                  <img src="/images/img/campaign/IMG_4785.JPG" className="d-block w-100" alt="#DonateOldBraPanty Slide 1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/images/img/campaign/IMG_4783.JPG" className="d-block w-100" alt="#DonateOldBraPanty Slide 2" />
                </Carousel.Item>
              </Carousel>
            </ImageWrapper>
            <CardContent>
              <CardTitle>#DonateOldBraPanty</CardTitle>
              <CardDescription>
                Promoting sustainable menstrual hygiene practices with eco-friendly solutions.
                Creating a better future through responsible choices.
              </CardDescription>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Container>

  </Section>
);

export default CampaignsSection;

