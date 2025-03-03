import React, { useState, useEffect } from 'react';
import { Nav, Tab, Row, Col, Card, Table, Form, Button, Dropdown, Badge, Container, Accordion } from 'react-bootstrap';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Kissan Signup Component
function KissanSignup(prop) {
    useEffect(()=>{
        prop.setIsHome(false)
    },[])
    return (
      <Container className="py-5">
        <h1 className="display-4 text-center mb-5" style={{ color: '#2e7d32' }}>Register as a Kissan</h1>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow">
              <Card.Header style={{ backgroundColor: '#fdd835' }}>
                <h3 className="text-center mb-0">Kissan Registration Form</h3>
              </Card.Header>
              <Card.Body>
                <Form>
                  <h4 className="mb-3" style={{ color: '#2e7d32' }}>Personal Information</h4>
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
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address (if available)</Form.Label>
                        <Form.Control type="email" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Aadhaar Number</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <h4 className="mt-4 mb-3" style={{ color: '#2e7d32' }}>Farm Details</h4>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Total Land Area (in Acres)</Form.Label>
                        <Form.Control type="number" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Primary Crop</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Farm Address</Form.Label>
                    <Form.Control as="textarea" rows={2} required />
                  </Form.Group>
                  
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Village/Town</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <h4 className="mt-4 mb-3" style={{ color: '#2e7d32' }}>Service Selection</h4>
                  <Form.Group className="mb-3">
                    <Form.Label>Select IoT Package</Form.Label>
                    <Form.Select>
                      <option>Basic Package (Soil Moisture & Temperature)</option>
                      <option>Standard Package (Basic + Weather Station)</option>
                      <option>Premium Package (Standard + Crop Health Monitoring)</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Check 
                      type="checkbox" 
                      label="I would like to receive training on using the app and devices" 
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Check 
                      type="checkbox" 
                      label="I agree to the terms and conditions" 
                      required
                    />
                  </Form.Group>
                  
                  <div className="text-center mt-4">
                    <Button type="submit" variant="success" size="lg">
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
  export default KissanSignup
