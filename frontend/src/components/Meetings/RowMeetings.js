import axios from "axios";
import React from "react";

import Row from './Row.js';

export default class RowMeetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meetings: props.meetings,
            rowTeste: {
                id: 1,
                date: "23/01/2023",
                title: "Reunião de Planejamento",
                time: "10:00",
                durationHours: "1",
                durationMinutes: "30",
            }
        }
    }


    getMeetings = async () => {
        try {
            const response = await axios.get("http://localhost:8080/meetings",{
                withCredentials: true
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.organizeMeetings();
        this.getMeetings();
    }

    organizeMeetings = () => {
        var meetings = this.state.meetings;
        var dateMeetings = [];
        meetings.forEach((meeting) => {
            if(!dateMeetings.includes(meeting.date)) {
                dateMeetings.push(meeting.date);
            }
        })
        // sort dates
        dateMeetings.forEach((date) => {
            var meetingsDate = [];
            meetings.forEach((meeting) => {
                if(meeting.date === date) {
                    meetingsDate.push(meeting);
                }
            })
            dateMeetings[date] = meetingsDate;
        })

        this.setState({meetings: dateMeetings});
    }

    render() {
        return(<>
            <div>
                <div className="dateMeetings">
                    <p>22/01/2023</p>
                </div>
                <Row row={this.state.rowTeste}/>
            </div>
        </>)
    }

}
