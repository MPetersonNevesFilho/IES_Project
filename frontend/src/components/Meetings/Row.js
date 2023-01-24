import React from "react";
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';

import { editMeeting, deleteMeeting } from './Meetings';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



function Row(params) {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openInfo, setOpenInfo] = React.useState(false);
    const [openForm, setOpenForm] = React.useState(false);

    const [title, setTitle] = React.useState(params.row.title);
    const [dia, setData] = React.useState(params.row.dia);
    const [horaInicial, setHoraInicial] = React.useState(params.row.horaInicial);
    const [horaFinal, setHoraFinal] = React.useState(params.row.horaFinal);
    const [id, setId] = React.useState(params.row.id);
    const [senha, setSenha] = React.useState(params.row.senha);



    // Sum time and duration
    /*
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
    }*/

    const handleClickOpenInfo = () => {
        setOpenInfo(true);
    };
    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };
    const handleClickOpenForm = () => {
        setOpenForm(true);
    };
    const handleClose = () => {
        setOpenDialog(false);
        setOpenForm(false);
        setOpenInfo(false);
    };


    function editar(){
        editMeeting(id);
        setOpenForm(false);
        toast.dismiss();
        toast.success("Contato editado com sucesso!");
    }

    function apagar() {
        deleteMeeting(id);
        setOpenDialog(false);
        toast.dismiss();
        toast.success("Contato excluído com sucesso!");
    }




    return (<>
                <div><Toaster toastOptions={{success: {style: {background: '#01696E',color: '#fff',},},error: {style: {background: '#85100C',color: '#fff',},},}}/></div>
        <div>
            <div className="rowMeetings" onClick={()=>handleClickOpenInfo()}>

                    <div className='rowMeetingsTime'>
                        <h5>{params.row.horaInicial} - {params.row.horaFinal}</h5>
                    </div>
                    <div className='rowMeetingsTitle'>
                        <h4>{params.row.title}</h4>
                        <p>id: {params.row.id}</p>
                    </div>
                    <div className='rowMeetingsButtons'>
                        <Button variant="success">Iniciar</Button>
                        <Button variant="outline-primary" onClick={()=>handleClickOpenForm()}>Editar</Button>
                        <Button variant="outline-danger" onClick={()=>handleClickOpenDialog()}>Excluir</Button>
                    </div>

            </div>

                <div>
                    <Dialog
                        open={openInfo}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Detalhes da sua reunião."}</DialogTitle>
                        <DialogContent>
                            <p><b>id:</b> {params.row.id}</p>
                            <p><b>title:</b> {params.row.title}</p>
                            <p><b>dia:</b> {params.row.dia}</p>
                            <p><b>horaInicial:</b> {params.row.horaInicial}</p>
                            <p><b>horaFinal:</b> {params.row.horaFinal}</p>
                            <p><b>senha:</b> {params.row.senha}</p>
                        </DialogContent>
                    </Dialog>
                </div>

                <div>
                    <Dialog
                        open={openDialog}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Deseja mesmo excluir a reunião?"}</DialogTitle>
                        <DialogActions>
                        <Button onClick={handleClose}>Não</Button>
                        <Button onClick={apagar}>Sim</Button>
                        </DialogActions>
                    </Dialog>
                </div>


                <div>
                    <Dialog open={openForm} onClose={handleClose}>
                        <DialogTitle>Editar contato</DialogTitle>
                        <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="titleFormNav"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                                                <TextField
                            autoFocus
                            margin="dense"
                            id="diaFormNav"
                            label="Data"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={dia}
                            onChange={e => setData(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="horaInicialFormNav"
                            label="Hora Inicial"
                            type="email"
                            fullWidth
                            variant="standard"
                            defaultValue={horaInicial}
                            onChange={e => setHoraInicial(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="horaFinalFormNav"
                            label="Hora Final"
                            type="email"
                            fullWidth
                            variant="standard"
                            defaultValue={horaFinal}
                            onChange={e => setHoraFinal(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="senhaFormNav"
                            label="Senha"
                            type="email"
                            fullWidth
                            variant="standard"
                            defaultValue={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button onClick={editar}>Editar</Button>
                        </DialogActions>
                    </Dialog>
                </div>



        </div>
    </>)
}

export default Row;