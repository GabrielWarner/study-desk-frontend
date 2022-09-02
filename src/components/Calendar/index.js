import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import DatePicker from "react-datepicker";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Modal from 'react-modal';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./index.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
//   Modal.setAppElement('main');

const DnDCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);




function App() {

    // Modal
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#000000';
    }

    function closeModal() {
        setIsOpen(false);
    }

    // Calendar 
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState([]);

    // Add Calendar Event to DB
    function handleAddEvent() {
        fetch("http://localhost:3001/api/events", {
            method: "POST",
            body: JSON.stringify({
                ...newEvent
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            setNewEvent({
                title: newEvent.title,
                start: newEvent.start,
                end: newEvent.end
            })
        })



        setAllEvents([...allEvents, newEvent]);

    }

    // // Fetch DB and Render to page
    // // onMount - before
    // // useEffect - callback
    // useEffect(() => {
    //     // on page load
    //     // fetch the backend
    //     fetch("http://localhost:3001/api/events", {
    //         // method:"GET", default get route unleast specify
    //         headers: {
    //             "Content-Type": "application/json"
    //         }

    //     })
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data)
    //             setAllEvents(data)
    //         })
    // })


    return (
        <div className="App">

            <h1>Calendar</h1>


            <div>
                <button onClick={openModal}>Add Event</button>
                <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Calendar Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add New Event</h2>
                    <button onClick={closeModal}>Close</button>


                    <div>
                        <input type="text" placeholder="Add Title" value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                        <DatePicker placeholderText="Start Date" selected={newEvent.start}
                            onChange={(start) => setNewEvent({ ...newEvent, start })} />
                        <DatePicker placeholderText="End Date" selected={newEvent.end}
                            onChange={(end) => setNewEvent({ ...newEvent, end })} />
                        <button onClick={handleAddEvent}>
                            Add Event
                        </button>
                    </div>


                </Modal>
            </div>


            <DnDCalendar
                localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: "80vh", margin: "20px" }}
            />


        </div>
    );
}


export default App;