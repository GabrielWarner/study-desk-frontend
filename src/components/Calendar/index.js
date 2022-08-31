import React, { useState } from "react";
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


const events = [
    // {
    //     title: "Project",
    //     start: new Date(),
    //     end: new Date("2022, 9, 5"),
    // },
    // {
    //     title: "Metting",
    //     start: new Date(),
    //     end: new Date(),
    // },
    // {
    //     title: "Class",
    //     start: new Date("2022, 8, 28"),
    //     end: new Date("2022, 8, 31"),
    // },
];

function App() {
    
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

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }


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
                localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: "80vh", margin: "20px"}} 
            />
        

        </div>
    );
}


export default App;