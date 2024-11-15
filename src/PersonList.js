
// Name :Om Makwana
// Student Id : 101414422

import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class PersonList extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            const persons = res.data.results;
            this.setState({ persons });
        });
    }

    render() {
        return (
            <Container>
                <h1 className="text-center my-4">User List</h1>
                {this.state.persons.map(person => (
                    <Card key={person.login.uuid} className="mb-3" style={{ backgroundColor: '#00bcd4', color: 'white' }}>
                        <Row className="no-gutters">
                            <Col md={4}>
                                <Card.Img variant="top" src={person.picture.large} className="p-3 rounded-circle" /><br/>
                                <Button variant="primary">Details</Button>
                            </Col>
                            
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>{`${person.name.title} ${person.name.first} ${person.name.last}`}</Card.Title>
                                    <Card.Text>
                                        <strong>User Name:</strong> {person.login.username}<br/>
                                        <strong>Gender:</strong> {person.gender.toUpperCase()}<br/>
                                        <strong>Time Zone Description:</strong> {person.location.timezone.description}<br/>
                                        <strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}<br/>
                                        <strong>Email:</strong> {person.email}<br/>
                                        <strong>Birth Date and Age:</strong> {person.dob.date.substring(0, 10)} ({person.dob.age} years)<br/>
                                        <strong>Register Date:</strong> {person.registered.date.substring(0, 10)}<br/>
                                        <strong>Phone:</strong> {person.phone}<br/>
                                        <strong>Cell:</strong> {person.cell}<br/>
                                    </Card.Text>
                           
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Container>
        );
    }
}

export default PersonList;