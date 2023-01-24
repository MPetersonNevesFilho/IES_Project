import React from "react";
import './Contacts.css';
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';




export default function Card(param) {
    const contact = param.contact;
    console.log(contact)
    var name = contact.name;
    var email = contact.email;


    function apagar()  {
        toast.dismiss();
        toast.success("Contato excluído com sucesso!");
    }

    return (<><div>
            <div><Toaster toastOptions={{success: {style: {background: '#01696E',color: '#fff',},},error: {style: {background: '#85100C',color: '#fff',},},}}/></div>
            <div className="tudoCard">
                <div className="card">
                    <p><b>Nome:</b> {name}</p>
                    <p><b>E-mail:</b> {email}</p>
                </div>
                <div className="cardButton">
                    <Button className="btn-primary">Editar</Button>
                    <Button className="btn-danger" onClick={() => {apagar()}}>Apagar</Button>
                </div>
            </div>
    </div></>)

}