import React, { useState, useEffect } from 'react';
import { Nav, Tab, Row, Col, Card, Table, Form, Button, Dropdown, Badge, Container, Accordion } from 'react-bootstrap';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BuyerSignup(prop) {
    useEffect(()=>{
        prop.setIsHome(false)
    },[])
    return (
      <Container className="py-5">
        <h1 className="display-4 text-center mb-5" style={{ color: '#2e7d32' }}>Register as a Buyer</h1>
        
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow">
              <Card.Header style={{ backgroundColor: '#8bc34a' }}>
                <h3 className="text-center mb-0">Buyer Registration Form</h3>
              </Card.Header>
              <Card.Body>
                <Form>
                  <h4 className="mb-3" style={{ color: '#2e7d32' }}>Personal/Business Information</h4>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name/Business Name</Form.Label>
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
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Buyer Type</Form.Label>
                        <Form.Select required>
                          <option>Individual Consumer</option>
                          <option>Restaurant/Hotel</option>
                          <option>Retailer</option>
                          <option>Wholesaler</option>
                          <option>Food Processing Unit</option>
                          <option>Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <h4 className="mt-4 mb-3" style={{ color: '#2e7d32' }}>Address Information</h4>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={2} required />
                  </Form.Group>
                  
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <h4 className="mt-4 mb-3" style={{ color: '#2e7d32' }}>Purchasing Preferences</h4>
                  <Form.Group className="mb-3">
                    <Form.Label>Products Interested In (Select Multiple)</Form.Label>
                    <div>
                      <Form.Check inline label="Vegetables" name="productType" type="checkbox" />
                      <Form.Check inline label="Fruits" name="productType" type="checkbox" />
                      <Form.Check inline label="Grains" name="productType" type="checkbox" />
                      <Form.Check inline label="Pulses" name="productType" type="checkbox" />
                      <Form.Check inline label="Dairy" name="productType" type="checkbox" />
                      <Form.Check inline label="Other" name="productType" type="checkbox" />
                    </div>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Purchase Frequency</Form.Label>
                    <Form.Select>
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Bi-weekly</option>
                      <option>Monthly</option>
                      <option>Seasonal</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Purchase Volume (approximate)</Form.Label>
                    <Form.Select>
                      <option>Small (Less than 100 kg)</option>
                      <option>Medium (100 kg - 500 kg)</option>
                      <option>Large (500 kg - 1 ton)</option>
                      <option>Very Large (More than 1 ton)</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Check 
                      type="checkbox" 
                      label="I agree to the terms and conditions" 
                      required
                    />
                  </Form.Group>
                  
                  <div className="text-center mt-4">
                    <Button type="submit" variant="warning" size="lg">
                      Register
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  export default BuyerSignup;
  