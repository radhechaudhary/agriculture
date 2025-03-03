import React, { useState, useEffect } from 'react';
import { Nav, Tab, Row, Col, Card, Table, Form, Button, Dropdown, Badge, Container, Accordion } from 'react-bootstrap';

function ContactPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormSubmitted(true);
    };
    
    return (
      <Container className="py-5">
        <h1 className="display-4 text-center mb-5" style={{ color: '#2e7d32' }}>Contact Us</h1>
        
        <Row className="mb-5">
          <Col md={5}>
            <div className="mb-4">
              <h3 style={{ color: '#2e7d32' }}>Get in Touch</h3>
              <p>
                Have questions about our services or facing any issues with our devices? 
                Our team is here to help you. Fill out the form, and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="mb-4">
              <h4 style={{ color: '#2e7d32' }}>Office Location</h4>
              <p>
                KrishiTech Headquarters<br />
                123 AgriTech Park, Sector 5<br />
                Gurugram, Haryana - 122001<br />
                India
              </p>
            </div>
            
            <div className="mb-4">
              <h4 style={{ color: '#2e7d32' }}>Contact Information</h4>
              <p>
                <strong>Email:</strong> support@krishitech.com<br />
                <strong>Phone:</strong> +91-1800-123-4567<br />
                <strong>Helpline:</strong> +91-1800-789-0123 (Toll-Free)
              </p>
            </div>
            
            <div className="mb-4">
              <h4 style={{ color: '#2e7d32' }}>Working Hours</h4>
              <p>
                Monday to Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </Col>
          
          <Col md={7}>
            {formSubmitted ? (
              <div className="bg-success p-5 text-white rounded text-center">
                <h3>Thank You!</h3>
                <p className="mb-0">Your message has been received. We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <Card className="shadow">
                <Card.Header style={{ backgroundColor: '#8bc34a' }}>
                  <h3 className="text-center mb-0">Send Us a Message</h3>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="tel" required />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" required />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>I am a</Form.Label>
                      <Form.Select>
                        <option>Farmer/Kissan</option>
                        <option>Buyer</option>
                        <option>Distributor</option>
                        <option>Other</option>
                      </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>Type of Query</Form.Label>
                      <Form.Select>
                        <option>Device Maintenance</option>
                        <option>Training Request</option>
                        <option>Technical Support</option>
                        <option>Subscription Inquiry</option>
                        <option>Device Installation</option>
                        <option>Data Analysis Help</option>
                        <option>General Information</option>
                        <option>Other</option>
                      </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control as="textarea" rows={4} required />
                    </Form.Group>
                    
                    <div className="text-center">
                      <Button type="submit" variant="success" size="lg">
                        Submit Message
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
  export default ContactPage;
