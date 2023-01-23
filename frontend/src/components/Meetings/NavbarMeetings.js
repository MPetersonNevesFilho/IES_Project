import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

import './Meetings.css';


import { ReactComponent as Icon } from "../img/icons8-pesquisar.svg"

function NavbarMeetings(params) {
    const reunioesAntigas = params.ra;
    const reunioesFuturas = params.rf;


    return (<>
        <div className="NavbarMeetings">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Button variant="outline-secondary" className="me-2" onClick={() => reunioesAntigas()}>Reuniões passadas</Button>
                    <Button variant="outline-primary" className="me-2" onClick={() => reunioesFuturas()}>Futuras Reuniões</Button>
                    <Button variant="outline-success" className="me-2">Agendar uma Reunião</Button>

                    <Form className="d-flex">
                        <Form.Control
                        type="date"
                        placeholder="Data Inicial"
                        className="me-2"
                        style={{width: '9em'}}
                        />
                        <p style={{paddingTop:'1em', marginRight:"0.45em"}}>até</p>
                        <Form.Control
                        type="date"
                        placeholder="Data Final"
                        style={{width: '9em'}}
                        className="me-2"
                        />
                        <Button variant="outline-info"><Icon style={{maxWidth:'2em', maxHeight:'2em'}}/></Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    </>)
}
export default NavbarMeetings;