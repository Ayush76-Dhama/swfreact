import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

const GalleryTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const GalleryCard = styled(Card)`
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  img {
    height: 250px;
    object-fit: cover;
  }
`;

function Gallery() {
  // Sample gallery data - replace with your actual images
  const galleryItems = [
    { id: 1, image: '/images/gallery1.jpg', title: 'Women Empowerment' },
    { id: 2, image: '/images/gallery2.jpg', title: 'Education Initiative' },
    { id: 3, image: '/images/gallery3.jpg', title: 'Community Outreach' },
    { id: 4, image: '/images/gallery4.jpg', title: 'Skill Development' },
    { id: 5, image: '/images/gallery5.jpg', title: 'Health Awareness' },
    { id: 6, image: '/images/gallery6.jpg', title: 'Environmental Project' },
  ];

  return (
    <Container className="py-5">
      <GalleryTitle>Our Gallery</GalleryTitle>
      <Row>
        {galleryItems.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4}>
            <GalleryCard>
              <Card.Img variant="top" src={item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </GalleryCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
