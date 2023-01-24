import React from "react";
import './Contacts.css';
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';

import { addContact } from './Contacts';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Card(param){
    const nome = param.contact.name;
    const email = param.contact.email;


    const [openDialog, setOpenDialog] = React.useState(false);
    const [openForm, setOpenForm] = React.useState(false);


    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };
    const handleClickOpenForm = () => {
        setOpenForm(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
        setOpenForm(false);
    };


    function editar(){
        addContact();
        setOpenForm(false);
        toast.dismiss();
        toast.success("Contato editado com sucesso!");
    }

    function apagar() {
        setOpenDialog(false);
        toast.dismiss();
        toast.success("Contato excluído com sucesso!");
    }

    return (<><div>
                <div><Toaster toastOptions={{success: {style: {background: '#01696E',color: '#fff',},},error: {style: {background: '#85100C',color: '#fff',},},}}/></div>
                <div className="tudoCard">
                    <div className="card">
                        <p><b>Nome:</b> {nome}</p>
                        <p><b>E-mail:</b> {email}</p>
                    </div>
                    <div className="cardButton">
                        <Button className="btn-primary" onClick={() => {handleClickOpenForm()}}>Editar</Button>
                        <Button className="btn-danger" onClick={() => {handleClickOpenDialog()}}>Apagar</Button>
                    </div>
                </div>


                <div>
                    <Dialog
                        open={openDialog}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Deseja mesmo excluir o contato?"}</DialogTitle>
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
                            id="nameForm"
                            label="Nome"
                            value={nome}
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="emailForm"
                            value={email}
                            label="E-mail"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button onClick={editar}>Editar</Button>
                        </DialogActions>
                    </Dialog>
                </div>

        </div></>)
    }

