import React from "react";

import DateRow from './DateRow.js';

export default class RowMeetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meetings: props.meetings,
            dateMeetings: [],
            turnKey: props.turnKey,
        }
    }

    componentDidMount() {
        this.organizeMeetings();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.turnKey !== this.props.turnKey) {
            this.organizeMeetings();
        }

    }

    dateCompare = (dateA, dateB) => {
        var A = dateA.split("/");
        A = new Date(+A[2], A[1] - 1, +A[0])
        var B = dateB.split("/");
        B = new Date(+B[2], B[1] - 1, +B[0])
        return A - B;
    }

    dateCompareForced = (dateA, dateB) => {
        var A = dateA.split("/");
        var B = dateB.split("/");
        if (A[2] < B[2]) {
            return -1;
        } else if (A[2] > B[2]) {
            return 1;
        } else {
            if (A[1] < B[1]) {
                return -1;
            } else if (A[1] > B[1]) {
                return 1;
            } else {
                if (A[0] < B[0]) {
                    return -1;
                } else if (A[0] > B[0]) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    }



    organizeMeetings = () => {
        var meetings = this.state.meetings;
        var dateMeetings = [];
        meetings.forEach((meeting) => {
            if(!dateMeetings.includes(meeting.dia)) {
                dateMeetings.push(meeting.dia);
            }
        })
        // Only show dates equal or greater than today
        var today = new Date().toLocaleDateString();
        dateMeetings.forEach((date, index) => {
            var dateSplit = date.split("/");
            var dateCompare = new Date(+dateSplit[2], dateSplit[1] - 1, +dateSplit[0]).toLocaleDateString();
            if (this.state.turnKey){
                if (this.dateCompareForced(dateCompare, today) < 0) {
                    dateMeetings.splice(index, 1);
                }
            } else {
                if (this.dateCompareForced(dateCompare, today) > 0) {
                    dateMeetings.splice(index, 1);
                }
            }
        })


        // sort dates growing
        dateMeetings.sort((a, b) => {
            return this.dateCompare(a, b);
        });


        // organize meetings by date
        dateMeetings.forEach((date) => {
            var meetingsByDate = [];
            meetings.forEach((meeting) => {
                if(meeting.dia === date) {
                    // Order by hour of meeting
                    meetingsByDate.push(meeting);
                }
            })
            meetingsByDate.sort((a, b) => {
                var A = a.horaInicial.split(":");
                A = new Date(0, 0, 0, +A[0], +A[1])
                var B = b.horaInicial.split(":");
                B = new Date(0, 0, 0, +B[0], +B[1])
                return A - B;
            });
            dateMeetings[date] = meetingsByDate;
        })


        this.setState({dateMeetings: dateMeetings});
    }

    render() {
        return(<>
            <div>
            {
                this.state.dateMeetings.map((date, index) => {
                    return (<>
                        <DateRow key={index}>{this.state.dateMeetings[date]}</DateRow>
                    </>)
                })
            }
            </div>
        </>)
    }

}
