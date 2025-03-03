import React, { useState, useEffect } from 'react';
import { Nav, Tab, Row, Col, Card, Table, Form, Button, Dropdown, Badge, Container, Accordion } from 'react-bootstrap';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CardComponent(prop) {
    const navigate=useNavigate();
    
  return (
          <Card className="shadow h-100" style={{ borderColor: '#fdd835' }}>
            <Card.Header className="text-center" style={{ backgroundColor: '#fdd835', color: '#000' }}>
              <h3>Join as a Kissan</h3>
            </Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Text>
                Access cutting-edge technology to monitor your farm's health, receive personalized recommendations, 
                and increase your yield with our AI-powered solutions.
              </Card.Text>
              <div className="mt-auto text-center">
               <Link style={{backgroundColor:'green', color:'white', padding:"10px 5px", borderRadius:'5px'}} to='/kissansignup'
                                                       size="lg" 
                                                       className="px-4"
                                                   >
                                                       Register as Kissan
                                                   </Link>
              </div>
            </Card.Body>
          </Card>
  )
}

export default CardComponent
