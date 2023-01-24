import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Contacts.css';
import NavbarContacts from './NavbarContacts';
import CardContacts from './CardContacts';



const addContact = () => {
    var name = document.getElementById("nameFormNav").value;
    var email = document.getElementById("emailFormNav").value;
    var id = uuidv4().substring(24, 36);
    var newContact = {id, name, email};
    rowInfo.push(newContact);
    console.log(rowInfo);
    return true;
}
const deleteContact = (id) => {
    var index = rowInfo.findIndex((contact) => contact.id === id);
    rowInfo.splice(index, 1);
    console.log(rowInfo);
    return true;
}
const editContact = (id) => {
    var index = rowInfo.findIndex((contact) => contact.id === id);
    var name = document.getElementById("nameFormCard").value;
    var email = document.getElementById("emailFormCard").value;
    rowInfo[index].name = name;
    rowInfo[index].email = email;
    console.log(rowInfo);
    return true;
}


export { addContact, deleteContact, editContact };

var rowInfo = [
    {
        id: uuidv4().substring(24, 36),
        name: "João da Silva",
        email: "jsilva@proton.me",
    },
    {
        id: uuidv4().substring(24, 36),
        name: "Maria da Silva",
        email: "msilva@gmail.com",
    },
    {
        id: uuidv4().substring(24, 36),
        name: "Pedro da Silva",
        email: "psilva@gmail.com",
    },
    {
        id: uuidv4().substring(24, 36),
        name: "Ana da Silva",
        email: "asilva@proton.me",
    },
    {
        id: uuidv4().substring(24, 36),
        name: "Rui da Silva",
        email: "rsilva@gmail.com",
    },
    {
        id: uuidv4().substring(24, 36),
        name: "André da Silva",
        email: "asilva@gmail.com",
    },
    {
        id: uuidv4().substring(24, 36),
        name: "Victor da Silva",
        email: "vsilva@yahoo.com.pt",
    },
    {
        id: uuidv4().substring(24, 36),
        name: "Saulo da Silva",
        email: "ssilva@gmail.com",
    },
]

function Contacts() {



  return (
    <>
        <div className='tudoContacts'>
            <div className="titleContacts">
                <h1>Contatos</h1>
            </div>
            <div className="navbarContacts">
                <NavbarContacts/>
            </div>
            <div className="contentContacts">
                <CardContacts contact={rowInfo} key={rowInfo}/>
            </div>
        </div>
    </>
  );
}

export default Contacts;