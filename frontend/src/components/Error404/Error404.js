import React from "react";

import Button from 'react-bootstrap/Button';
import { ReactComponent as Icon } from "../img/undraw_donut_love_kau1.svg";
import "./Error404.css";

function Error404() {
    return (
        <div className="tudoError404">

            <div className="imgeError404">
                <Icon style={{maxWidth:"30em", marginBottom:"-7em", marginTop:"-2em"}}/>
            </div>

            <div className="divError404">
                <h1>Erro 404</h1>
                <h2>Página não encontrada</h2>
                <Button variant="outline-secondary" href="/">Voltar para a página inicial</Button>
            </div>
        </div>
    )
}
export default Error404;