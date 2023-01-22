import React from 'react';
import NavbarMeetings from './NavbarMeetings';
import RowMeetings from './RowMeetings.js';
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

    function reunioesAntigas() {
        console.log("reunioesAntigas")
    }

    function reunioesFuturas() {
        console.log("reunioesFuturas")
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