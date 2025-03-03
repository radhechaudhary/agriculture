import React, { useEffect } from 'react'
import { Nav, Tab, Row, Col, Card, Table, Form, Button, Dropdown, Badge, Container, Accordion } from 'react-bootstrap';

function AboutPage(prop) {
    useEffect(()=>{prop.setIsHome(false)},[])
  return (
    <div className='about'>
    <Container  className="py-5">
      <h1 className="display-4 text-center mb-5" style={{ color: '#2e7d32' }}>About KrishiTech</h1>
      
      <Row className="mb-5">
        <Col md={6}>
          <img src="https://elearning.fao.org/pluginfile.php/3/theme_mtfaoadvanced/custom_course439/1676995263/custom_course_439id0.jpg" alt="Farmers using technology" className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h2 style={{ color: '#2e7d32' }}>Our Vision</h2>
          <p className="lead">
            Transforming rural agricultural areas across India through accessible technology and data-driven farming.
          </p>
          <p>
            KrishiTech aims to bridge the technological gap in Indian agriculture by bringing cutting-edge AI and IoT 
            solutions directly to farmers. We believe that technology should work for everyone, especially those who 
            feed our nation.
          </p>
        </Col>
      </Row>
      
      <div className="bg-light p-4 rounded my-5">
        <h2 className="text-center mb-4" style={{ color: '#2e7d32' }}>Our Mission</h2>
        <p className="lead text-center">
          "This project aims to provide a visionary effect in Indian rural agricultural areas with the use of AI and IoT devices. 
          We are using our model to ease the lives of kissans, where with our devices and integrated tracking and analysis 
          mechanisms, farmers can track their farm's health and conditions. We have used multiple IoT devices and AI techniques 
          to make this possible."
        </p>
      </div>
      
      <h2 className="text-center my-5" style={{ color: '#2e7d32' }}>How It Works</h2>
      
      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header style={{ backgroundColor: '#fdd835' }}>
              <h4 className="text-center">Data Collection</h4>
            </Card.Header>
            <Card.Body>
              <p>
                Our IoT devices are placed strategically around your farm to collect real-time data on soil conditions, 
                weather patterns, crop health, and more. These devices are designed to be durable, weather-resistant, 
                and operate on low power.
              </p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header style={{ backgroundColor: '#8bc34a' }}>
              <h4 className="text-center">AI Analysis</h4>
            </Card.Header>
            <Card.Body>
              <p>
                The collected data is processed through our advanced AI algorithms, which analyze patterns, predict potential 
                issues, and generate personalized recommendations. Our AI learns from historical data to continuously improve 
                its predictions and advice.
              </p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header style={{ backgroundColor: '#fdd835' }}>
              <h4 className="text-center">Actionable Insights</h4>
            </Card.Header>
            <Card.Body>
              <p>
                Farmers receive easy-to-understand insights and recommendations through our mobile app or SMS. These insights 
                help in making informed decisions about irrigation, fertilization, pest control, harvesting time, and more, 
                leading to higher yields and better resource management.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <h2 className="text-center my-5" style={{ color: '#2e7d32' }}>Benefits for Farmers</h2>
      
      <Row className="mb-5">
        <Col md={6}>
          <ul className="list-group">
            <li className="list-group-item d-flex">
              <span className="me-3" style={{ color: '#2e7d32' }}>✓</span>
              <span>Increased crop yield through optimized farming practices</span>
            </li>
            <li className="list-group-item d-flex">
              <span className="me-3" style={{ color: '#2e7d32' }}>✓</span>
              <span>Reduced water and fertilizer usage, lowering input costs</span>
            </li>
            <li className="list-group-item d-flex">
              <span className="me-3" style={{ color: '#2e7d32' }}>✓</span>
              <span>Early detection of crop diseases and pest infestations</span>
            </li>
            <li className="list-group-item d-flex">
              <span className="me-3" style={{ color: '#2e7d32' }}>✓</span>
              <span>Access to weather forecasts and climate pattern analysis</span>
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <ul className="list-group">
            <li className="list-group-item d-flex">
              <span className="me-3" style={{ color: '#2e7d32' }}>✓</span>
              <span>Direct connection to buyers for better prices</span>
            </li>
            <li className="list-group-item d-flex">
              <span className="me-3" style={{ color: '#2e7d32' }}>✓</span>
              <span>Data-driven decision making for better farm management</span>
            </li>
            <li className="list-group-item d-flex">
              <span className="me-3" style={{ color: '#2e7d32' }}>✓</span>
              <span>Technical support and training on modern farming techniques</span>
            </li>
            <li className="list-group-item d-flex">
              <span className="me-3" style={{ color: '#2e7d32' }}>✓</span>
              <span>Community of like-minded progressive farmers</span>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
export default AboutPage;