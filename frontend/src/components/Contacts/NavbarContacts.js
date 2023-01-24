import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './Contacts.css';




import toast, { Toaster } from 'react-hot-toast';

import { addContact } from './Contacts';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';








function NavbarContacts(params) {

    const [openForm, setOpenForm] = React.useState(false);
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");

    function nameChange(event) {
        setNome(event.target.value);
    }
    function emailChange(event) {
        setEmail(event.target.value);
    }

    function criarContato(){
        addContact();
        setOpenForm(false);
        toast.dismiss();
        toast.success("Contato criado com sucesso!");
    }

    const handleClickOpenForm = () => {
        setOpenForm(true);
    };

    const handleClose = () => {
        setOpenForm(false);
    };


    return (<>
        <div>
        <div><Toaster toastOptions={{success: {style: {background: '#01696E',color: '#fff',},},error: {style: {background: '#85100C',color: '#fff',},},}}/></div>
            <div className="NavbarContacts">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Button variant="success" className="me-2" onClick={() => {handleClickOpenForm()}}>Criar contato</Button>
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
                            name="name"
                            id="nameFormNav"
                            label="Nome"
                            value={nome}
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={nameChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="email"
                            id="emailFormNav"
                            value={email}
                            label="E-mail"
                            type="email"
                            fullWidth
                            variant="standard"
                            onChange={emailChange}
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button onClick={criarContato}>Editar</Button>
                        </DialogActions>
                    </Dialog>
                </div>













        </div>
    </>)
}
export default NavbarContacts;