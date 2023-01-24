import React from "react";
import './Contacts.css';

import Card from './Card';

export default class CardContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: props.contact,
        };
    }

    componentDidMount() {
        this.ordemAlfabetica();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.contact !== this.props.contact) {
        this.ordemAlfabetica();
        }

    }

    ordemAlfabetica = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            })
        })
    }

    render() {
        return (<><div>
                <div className="cardContacts">
                {

                    this.state.contacts.map((contact) => {
                        return <Card contact={contact} teste={this.teste}/>
                    })

                }
                </div>
        </div></>)
    }

}