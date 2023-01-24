import React from 'react';
import NavbarMeetings from './NavbarMeetings';
import RowMeetings from './RowMeetings.js';
import { v4 as uuidv4 } from 'uuid';
import './Meetings.css';


const addMeeting = () => {
    var title = document.getElementById("titleFormNav").value;
    var dia = document.getElementById("diaFormNav").value;
    var horaInicial = document.getElementById("horaInicialFormNav").value;
    var horaFinal = document.getElementById("horaFinalFormNav").value;
    var senha = document.getElementById("senhaFormNav").value;
    var id = uuidv4().substring(24, 36);
    var newMeeting = {id, title, dia, horaInicial, horaFinal, senha};
    rowInfo.push(newMeeting);
    console.log(rowInfo);
    return true;
}
const deleteMeeting = (id) => {
    var index = rowInfo.findIndex((meeting) => meeting.id === id);
    rowInfo.splice(index, 1);
    console.log(rowInfo);
    return true;
}
const editMeeting = (id) => {
    var index = rowInfo.findIndex((meeting) => meeting.id === id);
    var title = document.getElementById("titleFormNav").value;
    var dia = document.getElementById("diaFormNav").value;
    var horaInicial = document.getElementById("horaInicialFormNav").value;
    var horaFinal = document.getElementById("horaFinalFormNav").value;
    var senha = document.getElementById("senhaFormNav").value;
    rowInfo[index].title = title;
    rowInfo[index].dia = dia;
    rowInfo[index].horaInicial = horaInicial;
    rowInfo[index].horaFinal = horaFinal;
    rowInfo[index].senha = senha;
    console.log(rowInfo);
    return true;
}

export { addMeeting, deleteMeeting, editMeeting };

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

function Meetings() {
    const [key, setKey] = React.useState(true);


    const reunioesAntigas = async ()  => {
        console.log("getMeetings");
        setKey(false);


        /*

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

        */

    }

    const reunioesFuturas = async () => {
        console.log("reunioesFuturas")
        setKey(true);
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
                <RowMeetings meetings={rowInfo} turnKey={key}/>
            </div>
        </div>
    </>
  );
}

export default Meetings;