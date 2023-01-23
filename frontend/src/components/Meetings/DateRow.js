import React from "react";

import Row from './Row.js';

export default class DateRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.info.date,
            dataRow: props.info.data,
        }
    }

    render() {
        return(<>
            <div className="dateMeetings">
                <p>{this.state.date}</p>
            </div>
            <div>{
                this.state.dataRow.map((data) => {
                    return(<>
                        <Row row={data}/>
                    </>)
                })
            }
            </div>
        </>)
    }
}