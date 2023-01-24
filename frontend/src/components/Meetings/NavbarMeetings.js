import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { ReactComponent as Icon } from "../img/icons8-pesquisar.svg"
import { v4 as uuidv4 } from 'uuid';
import { addMeeting } from './Meetings';



import './Meetings.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });




function NavbarMeetings(params) {
    const [openForm, setOpenForm] = React.useState(false);

    const [title, setTitle] = React.useState("");
    const [dia, setData] = React.useState("");
    const [horaInicial, setHoraInicial] = React.useState("");
    const [horaFinal, setHoraFinal] = React.useState("");
    const [id, setId] = React.useState(uuidv4().substring(30, 36));
    const [senha, setSenha] = React.useState("");





    const reunioesAntigas = params.ra;
    const reunioesFuturas = params.rf;

    const handleClickOpenForm = () => {
        setOpenForm(true);
    };
    const handleClose = () => {
        setOpenForm(false);
    };


    return (<>
        <div>
            <div className="NavbarMeetings">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Button variant="outline-secondary" className="me-2" onClick={() => reunioesAntigas()}>Reuniões passadas</Button>
                        <Button variant="outline-primary" className="me-2" onClick={() => reunioesFuturas()}>Futuras Reuniões</Button>
                        <Button variant="outline-success" className="me-2" onClick={() => handleClickOpenForm()}>Agendar uma Reunião</Button>

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
                            <Button variant="outline-info">
                                <Icon style={{maxWidth:'2em', maxHeight:'2em'}}/>
                            </Button>
                        </Form>
                    </Container>
                </Navbar>
            </div>



            <div>
                    <Dialog open={openForm} onClose={handleClose}>
                        <DialogTitle>Editar contato</DialogTitle>
                        <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="titleFormNavMeet"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={title}
                            defaultValue={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                                                <TextField
                            autoFocus
                            margin="dense"
                            id="diaFormNavMeet"
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
                            id="horaInicialFormMeet"
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
                            id="horaFinalFormMeet"
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
                            id="senhaFormMeet"
                            label="Senha"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={senha}
                            defaultValue={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                                                <TextField
                            autoFocus
                            margin="dense"
                            id="senhaFormNav"
                            label="Id da reunião"
                            type="email"
                            fullWidth
                            variant="standard"
                            defaultValue={id}
                            readOnly
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button onClick={addMeeting}>Editar</Button>
                        </DialogActions>
                    </Dialog>
                </div>













        </div>
    </>)
}
export default NavbarMeetings;