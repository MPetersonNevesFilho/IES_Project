import React from 'react';
import NavbarMeetings from './NavbarMeetings';
import RowMeetings from './RowMeetings.js';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import './Meetings.css';


function Meetings() {

    var rowInfo = [

            {
                id: 1,
                date: "23/01/2023",
                title: "Reunião de Planejamento",
                time: "10:00",
                durationHours: "1",
                durationMinutes: "30",
            },

            {
                id: 2,
                date: "23/01/2023",
                title: "Reunião de Desenvolvimento",
                time: "8:00",
                durationHours: "2",
                durationMinutes: "20",
            },

            {
                id: 3,
                date: "22/01/2023",
                title: "Reunião de Teste",
                time: "16:00",
                durationHours: "0",
                durationMinutes: "30",
            }

    ]

    const reunioesAntigas = async ()  => {

        console.log("getMeetings");
        console.log(uuidv4().substring(24, 36));

        try {
            const response = await axios.post("http://localhost:8080/meetings/create/", {
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
            const response = await axios.get("http://localhost:8080/meetings/delete", "c83f6466c0bb");
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