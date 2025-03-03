import React, { useEffect } from 'react'
import { Nav, Tab, Row, Col, Card, Table, Form, Button, Dropdown, Badge, Container, Accordion } from 'react-bootstrap';
import CardComponent from './card';
import { Link} from 'react-router-dom';
function Home(prop) {
    useEffect(()=>{
        prop.setIsHome(true);
    },[])

    

  return (
    <section className='home' id='home'>
        <div className='landing'>
            <div className='landing-main'>
                <h1>Smart Agritech Solution for Rural Empowerment</h1>
                <div className='landing-buttons'>
                    <Link to="/"><CardComponent/></Link>
                    <Link to="/">
                        <Card className="shadow h-100" style={{ borderColor: '#8bc34a' }}>
                            <Card.Header className="text-center" style={{ backgroundColor: '#8bc34a', color: '#000' }}>
                                <h3>Join as a Buyer</h3>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column">
                                <Card.Text>
                                    Connect directly with farmers to purchase fresh, high-quality produce. 
                                    Support local agriculture and get farm-to-table products at fair prices.
                                </Card.Text>
                                <div className="mt-auto text-center">
                                    <Link style={{backgroundColor:'red', color:'white', padding:"10px 5px", borderRadius:'5px'}} to='/buyersignup'
                                        size="lg" 
                                        className="px-4"
                                    >
                                        Register as Buyer
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Home
