import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Contacts.css';
import NavbarContacts from './NavbarContacts';
import CardContacts from './CardContacts';


function Contacts() {
    const [key, setKey] = React.useState(true);

    var rowInfo = [

            {
                id: uuidv4().substring(24, 36),
                title: "Reunião de Teste",
                dia: "28/01/2023",
                horaInicial: "10:00",
                horaFinal: "11:30",
                senha: uuidv4().substring(30, 36),
            },

            {
                id: uuidv4().substring(24, 36),
                title: "Planejamento",
                dia: "28/01/2023",
                horaInicial: "08:00",
                horaFinal: "10:00",
                senha: uuidv4().substring(30, 36),
            },

            {
                id: uuidv4().substring(24, 36),
                title: "Revisão do Projeto",
                dia: "22/01/2023",
                horaInicial: "14:00",
                horaFinal: "14:30",
                senha: uuidv4().substring(30, 36),
            },

            {
                id: uuidv4().substring(24, 36),
                title: "Redes",
                dia: "27/01/2023",
                horaInicial: "17:00",
                horaFinal: "16:30",
                senha: uuidv4().substring(30, 36),
            },

            {
                id: uuidv4().substring(24, 36),
                title: "Projeto IES",
                dia: "12/01/2023",
                horaInicial: "10:00",
                horaFinal: "11:30",
                senha: uuidv4().substring(30, 36),
            },


            {
                id: uuidv4().substring(24, 36),
                title: "Reunião de Testagem",
                dia: "02/01/2023",
                horaInicial: "16:30",
                horaFinal: "18:30",
                senha: uuidv4().substring(30, 36),
            }

    ]



  return (
    <>
        <div className='tudoMeetings'>
            <div className="titleMeetings">
                <h1>Contatos</h1>
            </div>
            <div className="navbarMeetings">
                <NavbarContacts/>
            </div>
            <div className="contentMeetings">
                <CardContacts meetings={rowInfo} turnKey={key}/>
            </div>
        </div>
    </>
  );
}

export default Contacts;