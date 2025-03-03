import React, { useState, useEffect } from 'react';
import { Nav, Tab, Row, Col, Card, Table, Form, Button, Dropdown, Badge, Container, Accordion } from 'react-bootstrap';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Footer() {
    return (
      <footer className="bg-success text-white py-4 mt">
        <Container>
          <Row>
            <Col md={4}>
              <h5>KrishiTech</h5>
              <p>Revolutionizing agriculture through technology</p>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
                <li><a href="#" className="text-white">Privacy Policy</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Connect With Us</h5>
              <div className="d-flex">
                <a href="#" className="text-white me-3">Facebook</a>
                <a href="#" className="text-white me-3">Twitter</a>
                <a href="#" className="text-white">Instagram</a>
              </div>
            </Col>
          </Row>
          <hr className="my-3" />
          <div className="text-center">
            <p className="mb-0">© 2025 KrishiTech. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    );
  }
  export default Footer
  