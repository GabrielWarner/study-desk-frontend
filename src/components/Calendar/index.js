import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import DatePicker from "react-datepicker";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./index.css";

const DnDCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);


const events = [
    {
        title: "Project",
        start: new Date(),
        end: new Date("2022, 9, 8"),
    },
    {
        title: "Metting",
        start: new Date(),
        end: new Date(),
    },
    {
        title: "Class",
        start: new Date(),
        end: new Date(),
    },
];

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    

    
    return (
        <div className="App">

            <h1>Calendar</h1>
            <DnDCalendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: "80vh", margin: "20px"}} />

            <h2>Add New Event</h2>
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
        
        </div>
    );
}

export default App;