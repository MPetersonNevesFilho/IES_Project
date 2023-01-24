import React from "react";
import './Contacts.css';
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';

import { editContact, deleteContact } from './Contacts';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Card(param){
    const [contact, setContact] = React.useState(param.contact);

    const [openDialog, setOpenDialog] = React.useState(false);
    const [openForm, setOpenForm] = React.useState(false);
    const [nome, setNome] = React.useState(param.contact.name);
    const [email, setEmail] = React.useState(param.contact.email);
    console.log(param.contact)
    var nomeVar = param.contact.name;
    var emailVar = param.contact.email;


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


    function handleChange(event) {
        console.log(event.target)
        if (event.target.id === "nameFormCard"){
            nomeVar = event.target.value;
            setNome(event.target.value);
        } else if (event.target.id === "emailFormCard"){
            emailVar = event.target.value;
            setEmail(event.target.value);
        }
    }


    function editar(){
        editContact(param.contact.id);
        setOpenForm(false);
        toast.dismiss();
        toast.success("Contato editado com sucesso!");
    }

    function apagar() {
        var name = document.getElementById("nameFormCard").value;
        var email = document.getElementById("emailFormCard").value;

        if (name === "" || email === ""){
            toast.dismiss();
            toast.error("Preencha todos os campos!");
            return;
        }
        deleteContact(param.contact.id);
        setOpenDialog(false);
        toast.dismiss();
        toast.success("Contato excluído com sucesso!");
    }

    return (<><div>
                <div><Toaster toastOptions={{success: {style: {background: '#01696E',color: '#fff',},},error: {style: {background: '#85100C',color: '#fff',},},}}/></div>
                <div className="tudoCard">
                    <div className="card">
                        <p><b>Nome:</b> {param.contact.name}</p>
                        <p><b>E-mail:</b> {param.contact.email}</p>
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
                            id="nameFormCard"
                            label="Nome"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={e => setNome(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="emailFormCard"
                            label="E-mail"
                            type="email"
                            fullWidth
                            variant="standard"
                            onChange={e => setEmail(e.target.value)}
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

