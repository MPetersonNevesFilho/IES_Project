import React from 'react';
import Button from 'react-bootstrap/Button';
import NavbarMeetings from './NavbarMeetings';
import './Meetings.css';


function Meetings() {




  return (
    <>
        <div className='tudoMeetings'>
            <div className="titleMeetings">
                <h1>Reuniões</h1>
            </div>
            <div className="navbarMeetings">
                <NavbarMeetings />
            </div>
            <div className="contentMeetings">
                <div className="rowMeetings">
                    <div className='rowMeetingsTime'>
                        <h5>13:00 - 14:00</h5>
                    </div>
                    <div className='rowMeetingsTitle'>
                        <h4>Título da Reunião</h4>
                        <p>Reunião Id</p>
                    </div>
                    <div className='rowMeetingsButtons'>
                        <Button variant="success">Iniciar</Button>
                        <Button variant="outline-primary">Editar</Button>
                        <Button variant="outline-danger">Excluir</Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Meetings;