import React from "react";

import Row from './Row.js';

export default class DateRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.children[0].dia,
            dataRow: props.children,
        }
    }

    componentDidMount() {
        //console.log(this.state.date);
    }

    render() {
        return(<>
            <div className="dateMeetings">
                <p>{this.state.date}</p>
            </div>
            <div>{
                this.state.dataRow.map((data, index) => {
                    return(<>
                        <Row key={index} row={data}/>
                    </>)
                })
            }
            </div>
        </>)
    }
}