import React from 'react';
import NavbarMeetings from './NavbarMeetings';
import RowMeetings from './RowMeetings.js';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import './Meetings.css';


function Meetings() {

    var rowInfo = [

            {
                id: uuidv4().substring(24, 36),
                title: "Reunião de Teste",
                dia: "28/01/2023",
                horaInicial: "10:00",
                horaFinal: "11:30",
                senha: "123456",
            },

            {
                id: uuidv4().substring(24, 36),
                title: "Reunião de Planejamento",
                dia: "28/01/2023",
                horaInicial: "08:00",
                horaFinal: "10:00",
                senha: "123456",
            },

            {
                id: uuidv4().substring(24, 36),
                title: "Reunião de Revisão",
                dia: "23/01/2023",
                horaInicial: "14:00",
                horaFinal: "14:30",
                senha: "123456",
            },

            {
                id: uuidv4().substring(24, 36),
                title: "Reunião de Redes",
                dia: "25/01/2023",
                horaInicial: "17:00",
                horaFinal: "16:30",
                senha: "123456",
            },

            {
                id: uuidv4().substring(24, 36),
                title: "Reunião de Ies",
                dia: "12/12/2022",
                horaInicial: "10:00",
                horaFinal: "11:30",
                senha: "123456",
            },


            {
                id: uuidv4().substring(24, 36),
                title: "Reunião de Testagem",
                dia: "21/12/2022",
                horaInicial: "16:30",
                horaFinal: "18:30",
                senha: "123456",
            }

    ]

    const reunioesAntigas = async ()  => {

        console.log("getMeetings");
        console.log(uuidv4().substring(24, 36));

        try {
            const response = await axios.post("http://localhost:8080/meetings", {
                "id": uuidv4().substring(24, 36),
                "title": "Reunião de Teste",
                "dia": "23/01/2023",
                "horaInicial": "10:00",
                "horaFinal": "11:30",
                "senha": "123456",
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }

    const reunioesFuturas = async () => {
        console.log("reunioesFuturas")

        try {
            const response = await axios.post("http://localhost:8080/meetings");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }



  return (
    <>
        <div className='tudoMeetings'>
            <div className="titleMeetings">
                <h1>Reuniões</h1>
            </div>
            <div className="navbarMeetings">
                <NavbarMeetings ra={reunioesAntigas} rf={reunioesFuturas}/>
            </div>
            <div className="contentMeetings">
                <RowMeetings meetings={rowInfo} />
            </div>
        </div>
    </>
  );
}

export default Meetings;