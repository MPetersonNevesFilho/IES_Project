import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Contacts.css';
import NavbarContacts from './NavbarContacts';
import CardContacts from './CardContacts';


function Contacts() {
    const [key, setKey] = React.useState(true);

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
                <CardContacts contact={rowInfo}/>
            </div>
        </div>
    </>
  );
}

export default Contacts;