import React from "react";

import DateRow from './DateRow.js';

export default class RowMeetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meetings: props.meetings,
            dateMeetings: [],
        }
    }


    componentDidMount() {
        this.organizeMeetings();
    }

    organizeMeetings = () => {
        var meetings = this.state.meetings;
        var dateMeetings = [];
        meetings.forEach((meeting) => {
            if(!dateMeetings.includes(meeting.dia)) {
                dateMeetings.push(meeting.dia);
            }
        })
        console.log(dateMeetings)
        // sort dates growing
        dateMeetings.sort((a, b) => {
            var A = a.split("/");
            A = new Date(+A[2], A[1] - 1, +A[0])
            var B = b.split("/");
            B = new Date(+B[2], B[1] - 1, +B[0])
            console.log(A - B)
            return A - B;
        });

        console.log(dateMeetings)
        this.setState({meetings: dateMeetings});
    }

    render() {
        return(<>
            <div>
            {
                this.state.dateMeetings.map((date) => {
                    return (<>
                        <DateRow info={date}/>
                    </>)
                })
            }
            </div>
        </>)
    }

}
