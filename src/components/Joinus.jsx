import './Joinus.css';
// src/components/JoinUsPopup.jsx
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function JoinUsPopup() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Join Us
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Join Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default JoinUsPopup;
