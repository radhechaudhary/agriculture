import React, { useState, useEffect } from 'react';

import { Nav, Tab, Row, Col, Card, Table, Form, Button, Dropdown, Badge, Container, Accordion } from 'react-bootstrap';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const KissanDashboard = () => {
    
  // State variables
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [selectedAIService, setSelectedAIService] = useState(null);
  const [dataTimeRange, setDataTimeRange] = useState(30);

  // Sample data - in production this would come from your API
  const farmerProfile = {
    name: "Raj Kumar",
    location: "Punjab, India",
    contactNumber: "+91 9876543210",
    email: "raj.kumar@gmail.com",
    totalFarms: 4,
    totalArea: "25 acres",
    joinedDate: "15 June 2022"
  };

  const farms = [
    { id: 1, name: "North Wheat Farm", area: "10 acres", crop: "Wheat", location: "Amritsar" },
    { id: 2, name: "Rice Paddy East", area: "8 acres", crop: "Rice", location: "Ludhiana" },
    { id: 3, name: "Vegetable Garden", area: "3 acres", crop: "Mixed Vegetables", location: "Jalandhar" },
    { id: 4, name: "South Orchard", area: "4 acres", crop: "Mango, Guava", location: "Pathankot" }
  ];

  const iotDevices = [
    { id: 1, farmId: 1, name: "Soil Moisture Sensor 1", type: "moisture", status: "active" },
    { id: 2, farmId: 1, name: "Temperature Sensor 1", type: "temperature", status: "active" },
    { id: 3, farmId: 1, name: "Irrigation Controller 1", type: "irrigation", status: "inactive" },
    { id: 4, farmId: 2, name: "Water Level Sensor 1", type: "water", status: "active" },
    { id: 5, farmId: 2, name: "pH Sensor 1", type: "ph", status: "active" },
    { id: 6, farmId: 3, name: "Humidity Sensor 1", type: "humidity", status: "active" },
    { id: 7, farmId: 4, name: "Soil Nutrient Sensor 1", type: "nutrient", status: "active" },
  ];

  const aiServices = [
    { id: 1, farmId: 1, name: "Crop Disease Detection", type: "image-analysis" },
    { id: 2, farmId: 1, name: "Yield Prediction", type: "ml-prediction" },
    { id: 3, farmId: 2, name: "Pest Identification", type: "image-analysis" },
    { id: 4, farmId: 3, name: "Optimal Harvesting Time", type: "ml-prediction" },
    { id: 5, farmId: 4, name: "Growth Stage Analysis", type: "image-analysis" },
  ];

  // Sample weather data
  const weatherForecast = [
    { day: "Monday", date: "Mar 3", temp: 28, humidity: 65, rain: 10, icon: "☀" },
    { day: "Tuesday", date: "Mar 4", temp: 30, humidity: 60, rain: 5, icon: "☀" },
    { day: "Wednesday", date: "Mar 5", temp: 27, humidity: 75, rain: 40, icon: "🌧" },
    { day: "Thursday", date: "Mar 6", temp: 25, humidity: 80, rain: 70, icon: "🌧" },
    { day: "Friday", date: "Mar 7", temp: 26, humidity: 75, rain: 50, icon: "🌦" },
    { day: "Saturday", date: "Mar 8", temp: 27, humidity: 65, rain: 20, icon: "⛅" },
    { day: "Sunday", date: "Mar 9", temp: 29, humidity: 60, rain: 5, icon: "☀" },
  ];

  const weatherHistory = [
    { day: "Monday", date: "Feb 24", temp: 26, humidity: 70, rain: 30, icon: "⛅" },
    { day: "Tuesday", date: "Feb 25", temp: 25, humidity: 75, rain: 60, icon: "🌧" },
    { day: "Wednesday", date: "Feb 26", temp: 24, humidity: 80, rain: 80, icon: "🌧" },
    { day: "Thursday", date: "Feb 27", temp: 25, humidity: 75, rain: 50, icon: "🌦" },
    { day: "Friday", date: "Feb 28", temp: 27, humidity: 65, rain: 10, icon: "⛅" },
    { day: "Saturday", date: "Mar 1", temp: 28, humidity: 60, rain: 5, icon: "☀" },
    { day: "Sunday", date: "Mar 2", temp: 29, humidity: 65, rain: 10, icon: "☀" },
  ];

  // Sample sensor readings data for charts
  const generateSensorData = (days) => {
    const data = [];
    const now = new Date();
    for (let i = 0; i < days; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      data.unshift({
        date: date.toLocaleDateString('en-GB'),
        soilMoisture: 35 + Math.random() * 20,
        temperature: 22 + Math.random() * 10,
        humidity: 55 + Math.random() * 25,
        rainfall: Math.random() < 0.3 ? Math.random() * 25 : 0,
      });
    }
    return data;
  };

  const sensorData = generateSensorData(dataTimeRange);

  // Handle farm selection
  const handleFarmSelect = (farmId) => {
    setSelectedFarm(farms.find(farm => farm.id === farmId));
    setSelectedDevice(null);
    setSelectedAIService(null);
  };

  // Handle device selection
  const handleDeviceSelect = (deviceId) => {
    setSelectedDevice(iotDevices.find(device => device.id === deviceId));
    setSelectedAIService(null);
  };

  // Handle AI service selection
  const handleAIServiceSelect = (serviceId) => {
    setSelectedAIService(aiServices.find(service => service.id === serviceId));
    setSelectedDevice(null);
  };

  return (
    <Container fluid className="p-3">
      <h1 className="text-center mb-4">Kissan Dashboard</h1>

      <Tab.Container id="dashboard-tabs" defaultActiveKey="profile">
        <Row>
          <Col sm={12}>
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="profile">Kissan Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="suggestions">Farm Suggestions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="analysis">Farm Analysis</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="weather">Weather Forecast</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Tab.Content>
          {/* Profile Tab */}
          <Tab.Pane eventKey="profile">
            <Row>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Farmer Details</Card.Title>
                    <Table striped bordered hover className="mt-3">
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>{farmerProfile.name}</td>
                        </tr>
                        <tr>
                          <td>Location</td>
                          <td>{farmerProfile.location}</td>
                        </tr>
                        <tr>
                          <td>Contact</td>
                          <td>{farmerProfile.contactNumber}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{farmerProfile.email}</td>
                        </tr>
                        <tr>
                          <td>Total Farms</td>
                          <td>{farmerProfile.totalFarms}</td>
                        </tr>
                        <tr>
                          <td>Total Area</td>
                          <td>{farmerProfile.totalArea}</td>
                        </tr>
                        <tr>
                          <td>Joined Date</td>
                          <td>{farmerProfile.joinedDate}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={8}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Farms Overview</Card.Title>
                    <Table striped bordered hover responsive className="mt-3">
                      <thead>
                        <tr>
                          <th>Farm Name</th>
                          <th>Location</th>
                          <th>Area</th>
                          <th>Crop</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {farms.map(farm => (
                          <tr key={farm.id}>
                            <td>{farm.name}</td>
                            <td>{farm.location}</td>
                            <td>{farm.area}</td>
                            <td>{farm.crop}</td>
                            <td>
                              <Button size="sm" variant="primary">View Details</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>IoT Devices Status</Card.Title>
                    <Table striped bordered hover responsive className="mt-3">
                      <thead>
                        <tr>
                          <th>Device Name</th>
                          <th>Farm</th>
                          <th>Type</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {iotDevices.map(device => (
                          <tr key={device.id}>
                            <td>{device.name}</td>
                            <td>{farms.find(farm => farm.id === device.farmId)?.name}</td>
                            <td>{device.type}</td>
                            <td>
                              <Badge bg={device.status === 'active' ? 'success' : 'danger'}>
                                {device.status === 'active' ? 'Active' : 'Inactive'}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab.Pane>

          {/* Suggestions Tab */}
          <Tab.Pane eventKey="suggestions">
            <Row>
              {farms.map(farm => (
                <Col md={6} key={farm.id} className="mb-4">
                  <Card>
                    <Card.Header>
                      <h5>{farm.name} - AI Powered Suggestions</h5>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title className="h6">Current Status</Card.Title>
                      <Table striped bordered hover size="sm">
                        <tbody>
                          <tr>
                            <td>Soil Moisture</td>
                            <td>
                              <span className="text-warning">45%</span> <small>(Below optimal)</small>
                            </td>
                          </tr>
                          <tr>
                            <td>Temperature</td>
                            <td>
                              <span className="text-success">28°C</span> <small>(Optimal)</small>
                            </td>
                          </tr>
                          <tr>
                            <td>Humidity</td>
                            <td>
                              <span className="text-success">65%</span> <small>(Optimal)</small>
                            </td>
                          </tr>
                          <tr>
                            <td>pH Level</td>
                            <td>
                              <span className="text-danger">5.2</span> <small>(Too acidic)</small>
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      <div className="alert alert-info mt-3">
                        <strong>Irrigation Suggestion:</strong> Increase watering by 20% for the next 3 days to achieve optimal soil moisture levels.
                      </div>

                      <div className="alert alert-warning mt-3">
                        <strong>Soil Treatment Needed:</strong> Apply lime at 50kg/acre to increase soil pH to optimal range (6.0-6.5) for {farm.crop}.
                      </div>

                      <div className="alert alert-success mt-3">
                        <strong>Growth Progress:</strong> Crop is developing well with 85% health score. Expected yield increase of 12% compared to last season.
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab.Pane>

          {/* Analysis Tab */}
          <Tab.Pane eventKey="analysis">
            <Row>
              <Col md={3}>
                <Card className="mb-4">
                  <Card.Header>Farms</Card.Header>
                  <Card.Body className="p-0">
                    <ListGroup variant="flush">
                      {farms.map(farm => (
                        <ListGroup.Item 
                          key={farm.id} 
                          action 
                          active={selectedFarm && selectedFarm.id === farm.id}
                          onClick={() => handleFarmSelect(farm.id)}
                        >
                          {farm.name} <small>({farm.crop})</small>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={9}>
                {selectedFarm ? (
                  <>
                    <Card className="mb-4">
                      <Card.Header>
                        <h5>{selectedFarm.name} - Analysis Dashboard</h5>
                      </Card.Header>
                      <Card.Body>
                        <Row>
                          <Col md={6}>
                            <h6>Farm Details</h6>
                            <Table striped bordered hover size="sm">
                              <tbody>
                                <tr>
                                  <td>Location</td>
                                  <td>{selectedFarm.location}</td>
                                </tr>
                                <tr>
                                  <td>Area</td>
                                  <td>{selectedFarm.area}</td>
                                </tr>
                                <tr>
                                  <td>Crop Type</td>
                                  <td>{selectedFarm.crop}</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Col>
                          <Col md={6}>
                            <h6>Farm Health Score</h6>
                            <div className="text-center">
                              <div className="display-4 text-success">85%</div>
                              <div className="mt-2">Overall health status: <Badge bg="success">Good</Badge></div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>

                    <Row>
                      <Col md={6}>
                        <Card className="mb-4">
                          <Card.Header>IoT Devices</Card.Header>
                          <Card.Body className="p-0">
                            <ListGroup variant="flush">
                              {iotDevices
                                .filter(device => device.farmId === selectedFarm.id)
                                .map(device => (
                                  <ListGroup.Item 
                                    key={device.id} 
                                    action 
                                    active={selectedDevice && selectedDevice.id === device.id}
                                    onClick={() => handleDeviceSelect(device.id)}
                                  >
                                    {device.name} 
                                    <Badge 
                                      className="ms-2" 
                                      bg={device.status === 'active' ? 'success' : 'danger'}
                                    >
                                      {device.status}
                                    </Badge>
                                  </ListGroup.Item>
                                ))}
                            </ListGroup>
                          </Card.Body>
                        </Card>
                      </Col>
                      
                      <Col md={6}>
                        <Card className="mb-4">
                          <Card.Header>AI Services</Card.Header>
                          <Card.Body className="p-0">
                            <ListGroup variant="flush">
                              {aiServices
                                .filter(service => service.farmId === selectedFarm.id)
                                .map(service => (
                                  <ListGroup.Item 
                                    key={service.id} 
                                    action 
                                    active={selectedAIService && selectedAIService.id === service.id}
                                    onClick={() => handleAIServiceSelect(service.id)}
                                  >
                                    {service.name} <small>({service.type})</small>
                                  </ListGroup.Item>
                                ))}
                            </ListGroup>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Card className="mb-4">
                      <Card.Header className="d-flex justify-content-between align-items-center">
                        <h5>Data Analysis</h5>
                        <Form.Group>
                          <Form.Select 
                            value={dataTimeRange} 
                            onChange={(e) => setDataTimeRange(parseInt(e.target.value))}
                          >
                            <option value={30}>Last 30 Days</option>
                            <option value={60}>Last 60 Days</option>
                            <option value={90}>Last 90 Days</option>
                            <option value={180}>Last 180 Days</option>
                          </Form.Select>
                        </Form.Group>
                      </Card.Header>
                      <Card.Body>
                        {selectedDevice ? (
                          <>
                            <h6>Data from {selectedDevice.name}</h6>
                            <div className="mb-4" style={{ height: '300px' }}>
                              <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={sensorData}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="date" />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <Line type="monotone" dataKey="soilMoisture" stroke="#8884d8" name="Soil Moisture %" />
                                  <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temperature °C" />
                                  <Line type="monotone" dataKey="humidity" stroke="#28a745" name="Humidity %" />
                                </LineChart>
                              </ResponsiveContainer>
                            </div>
                            <div className="alert alert-info">
                              <h6>Insights for {selectedDevice.name}</h6>
                              <ul>
                                <li>Average soil moisture: 42.5% (3.2% below recommended)</li>
                                <li>Temperature range: 22.1°C - 32.8°C (within optimal range)</li>
                                <li>Humidity fluctuations indicate 3 significant rainfall events</li>
                              </ul>
                            </div>
                          </>
                        ) : selectedAIService ? (
                          <>
                            <h6>Analysis from {selectedAIService.name}</h6>
                            {selectedAIService.type === 'image-analysis' ? (
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="border p-2 mb-3">
                                    <img src="/api/placeholder/400/300" className="img-fluid" alt="Crop Analysis" />
                                    <div className="text-center mt-2">Latest crop scan (3 days ago)</div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <Card>
                                    <Card.Body>
                                      <h6>AI Detection Results</h6>
                                      <Table striped bordered hover size="sm">
                                        <tbody>
                                          <tr>
                                            <td>Disease Risk</td>
                                            <td><Badge bg="success">Low (12%)</Badge></td>
                                          </tr>
                                          <tr>
                                            <td>Growth Stage</td>
                                            <td>Mature (85%)</td>
                                          </tr>
                                          <tr>
                                            <td>Pest Detection</td>
                                            <td><Badge bg="warning">Medium (Aphids)</Badge></td>
                                          </tr>
                                          <tr>
                                            <td>Nutrient Deficiency</td>
                                            <td><Badge bg="danger">Potassium</Badge></td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </Card.Body>
                                  </Card>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div style={{ height: '300px' }}>
                                  <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={[
                                      { month: 'Mar', predicted: 85, lastYear: 72 },
                                      { month: 'Apr', predicted: 92, lastYear: 85 },
                                      { month: 'May', predicted: 98, lastYear: 90 },
                                      { month: 'Jun', predicted: 85, lastYear: 78 },
                                    ]}>
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="month" />
                                      <YAxis />
                                      <Tooltip />
                                      <Legend />
                                      <Bar dataKey="predicted" name="Predicted Yield %" fill="#8884d8" />
                                      <Bar dataKey="lastYear" name="Last Year Yield %" fill="#82ca9d" />
                                    </BarChart>
                                  </ResponsiveContainer>
                                </div>
                                <div className="alert alert-success mt-3">
                                  <h6>Yield Prediction Analysis</h6>
                                  <p>Based on current conditions and historical data, we predict a 12% increase in yield compared to last year. The optimal harvesting time is estimated to be between May 15-25.</p>
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="alert alert-secondary">
                            Select an IoT device or AI service to view detailed analysis.
                          </div>
                        )}

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                          <Button variant="primary">
                            Download Comprehensive Report
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </>
                ) : (
                  <Card className="text-center p-5">
                    <Card.Body>
                      <h5>Select a farm to view analysis</h5>
                      <p className="text-muted">Click on any farm from the list to view detailed analysis, IoT devices, and AI services.</p>
                    </Card.Body>
                  </Card>
                )}
              </Col>
            </Row>
          </Tab.Pane>

          {/* Weather Tab */}
          <Tab.Pane eventKey="weather">
            <Row>
              <Col md={6}>
                <Card className="mb-4">
                  <Card.Header>
                    <h5>7-Day Weather Forecast</h5>
                  </Card.Header>
                  <Card.Body>
                    <Table responsive striped hover>
                      <thead>
                        <tr>
                          <th>Day</th>
                          <th>Date</th>
                          <th>Weather</th>
                          <th>Temp (°C)</th>
                          <th>Humidity (%)</th>
                          <th>Rain Chance (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {weatherForecast.map((day, index) => (
                          <tr key={index}>
                            <td>{day.day}</td>
                            <td>{day.date}</td>
                            <td>{day.icon}</td>
                            <td>{day.temp}</td>
                            <td>{day.humidity}</td>
                            <td>{day.rain}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className="alert alert-info mt-3">
                      <strong>Weather Advisory:</strong> Prepare for moderate rainfall on Wednesday and Thursday. Consider delaying any planned spraying activities until Friday.
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6}>
                <Card className="mb-4">
                  <Card.Header>
                    <h5>Last 7 Days Weather</h5>
                  </Card.Header>
                  <Card.Body>
                    <Table responsive striped hover>
                      <thead>
                        <tr>
                          <th>Day</th>
                          <th>Date</th>
                          <th>Weather</th>
                          <th>Temp (°C)</th>
                          <th>Humidity (%)</th>
                          <th>Rainfall (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {weatherHistory.map((day, index) => (
                          <tr key={index}>
                            <td>{day.day}</td>
                            <td>{day.date}</td>
                            <td>{day.icon}</td>
                            <td>{day.temp}</td>
                            <td>{day.humidity}</td>
                            <td>{day.rain}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className="alert alert-secondary mt-3">
                      <strong>Weather Summary:</strong> The past week saw moderate rainfall early in the week followed by warm, dry conditions. Total precipitation was 24.5mm, which is 15% above the seasonal average.
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <h5>Weather Impact on Farms</h5>
                  </Card.Header>
                  <Card.Body>
                    <Accordion defaultActiveKey="0">
                      {farms.map((farm, index) => (
                        <Accordion.Item eventKey={index.toString()} key={farm.id}>
                          <Accordion.Header>{farm.name} - Weather Impact Analysis</Accordion.Header>
                          <Accordion.Body>
                            <Row>
                              <Col md={8}>
                                <div className="mb-3">
                                  <h6>Current Conditions Impact</h6>
                                  <ul>
                                    <li>Soil moisture levels adequate for current growth stage</li>
                                    <li>Temperature conditions favorable for {farm.crop} development</li>
                                    <li>Recent humidity levels have increased risk of fungal diseases by 15%</li>
                                  </ul>
                                </div>
                                
                                <div>
                                  <h6>Forecast Impact</h6>
                                  <ul>
                                    <li>Upcoming rainfall (Wed-Thu) will provide sufficient moisture for 8-10 days</li>
                                    <li>No frost risk in the forecast period</li>
                                    <li>Warm temperatures expected to accelerate growth by 10-15%</li>
                                  </ul>
                                </div>
                              </Col>
                              <Col md={4}>
                                <Card bg="light">
                                  <Card.Body>
                                    <Card.Title>Recommendations</Card.Title>
                                    <ol>
                                      <li>Apply fungicide treatment before Wednesday rainfall</li>
                                      <li>Delay fertilizer application until after Thursday</li>
                                      <li>Monitor for pest increases as temperatures rise</li>
                                    </ol>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

// For React Router integration
import ListGroup from 'react-bootstrap/ListGroup';

const KissanApp = (prop) => {
    useEffect(()=>{
        prop.setIsHome(false);
    },[])
  return (
    <div className="app">
      <KissanDashboard />
    </div>
  );
};

export default KissanApp;