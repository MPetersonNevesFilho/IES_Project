import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';


function Row(params) {
    const row = params.row;
    console.log(row)
    const horaInicial = row.horaInicial;
    const horaFinal = row.horaFinal;
    const title = row.title;
    const id = row.id;

    // Sum time and duration
    function sumTimeAndDuration() {
        var time = row.time.split(":");
        var hours = time[0];
        var minutes = time[1];
        var totalHours = parseInt(hours) + parseInt(row.durationHours);
        var totalMinutes = parseInt(minutes) + parseInt(row.durationMinutes);
        if (totalMinutes >= 60) {
            totalHours = totalHours + 1;
            totalMinutes = totalMinutes - 60;
        }
        var totalHoursAndMinutes = totalHours + ":" + totalMinutes;
        return totalHoursAndMinutes;
    }

    const popover = (
        <Popover id={"popover-positioned-top"}>
          <Popover.Header as="h3">{title}</Popover.Header>
          <Popover.Body>
            <strong>id:</strong> {id} <br/>
            <strong>dia:</strong> {row.dia} <br/>
            <strong>Inicia:</strong> {horaInicial} <br/>
            <strong>Termina</strong>: {horaFinal} <br/>
            <strong>Senha:</strong> {row.senha}
          </Popover.Body>
        </Popover>
      );


    return (<>
        <div>
                <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <div className="rowMeetings">

                    <div className='rowMeetingsTime'>
                        <h5>{horaInicial} - {horaFinal}</h5>
                    </div>
                    <div className='rowMeetingsTitle'>
                        <h4>{title}</h4>
                        <p>id: {id}</p>
                    </div>
                    <div className='rowMeetingsButtons'>
                        <Button variant="success">Iniciar</Button>
                        <Button variant="outline-primary">Editar</Button>
                        <Button variant="outline-danger">Excluir</Button>
                    </div>

            </div>
                </OverlayTrigger>
        </div>
    </>)
}

export default Row;