import React from 'react';
import './Meetings.css';


function Meetings() {
  return (
    <>
        <div>
            <div className="titleMeetings">
                <h1>Meetings</h1>
            </div>
            <div className="navbarMeetings">
                <p>Navbar dos meetings</p>
            </div>
            <div className="contentMeetings">
                <div className="rowMeetings">
                    <div>
                        <p>13:00 - 14:00</p>
                    </div>
                    <div>
                        <p>Título da Reunião</p>
                    </div>
                    <div>
                        <button>Butão1</button>
                        <button>Butão2</button>
                        <button>Butão3</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Meetings;