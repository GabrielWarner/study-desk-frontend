import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import DatePicker from "react-datepicker";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Modal from 'react-modal';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./index.css";

const devLink = "https://dh-focus-backend.herokuapp.com";

const testLink ="http://localhost:3001";

// import { flexbox } from "@chakra-ui/react";

//   Modal.setAppElement('main');

// const DnDCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        margin: '50px',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#3174ad',
        borderRadius: '50px'
    },
};


export default function CalendarPage(setCurrentPage) {
    
    // Modal
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#fdfdfe';
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    // Calendar 
    const [newEvent, setNewEvent] = useState({ userId: "", title: "", start: "", end: "" , _id:""});
    const [allEvents, setAllEvents] = useState([]);
    // const [test, setTest] =useState({key1: "", key2: ""})
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    // const formatted = moment(time).toDate();


    // Fetch DB and Render to page
    // onMount - before
    // useEffect - callback
    useEffect(() => {
        // on page load
        // fetch the backend
        const storedToken = localStorage.getItem("token");
        const userId = localStorage.getItem('userid')
        fetch(`${devLink}/api/events/${userId}`, {
            // method:"GET", default get route unleast specify
            headers: {
                Authorization: `Bearer ${storedToken}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) {
                    console.log("invalid token");
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setAllEvents(data);
            })
    }, [])
    
    // Add Calendar Event to DB
    function handleAddEvent() {
        const storedToken = localStorage.getItem("token");
        const userId = localStorage.getItem('userid')
        console.log(newEvent)
        
        fetch(`${devLink}/api/events/${userId}`, {
            method: "POST",
            body: JSON.stringify({
                ...newEvent
            }),
            headers: {
                Authorization: `Bearer ${storedToken}`,
                "Content-Type": "application/json"
            }
        }).then(res => {
            // setNewEvent({ ...newEvent, })
            return res.json()
        }).then(eventData => {
            // console.log()
            // setNewEvent({
            //     userId: localStorage.getItem('userid'),
            //     title: newEvent.title,
            //     start: newEvent.start,
            //     end: newEvent.end,
            //     _id: eventData._id
            // })
            // // console.log(eventData)
            // // console.log(allEvents)
            // console.log(eventData);
            // // setAllEvents(eventData);
            console.log(eventData)
            setAllEvents([...allEvents, eventData]);
            console.log(allEvents)
            forceUpdate()
            setCurrentPage("Dashboard")
            
        })
    }
  return (
    <div className="App">

    <h2 className="cTitle">Calendar</h2>


    <div className="ccc">
        <button className="cButton" onClick={openModal}>Add Event</button>

        <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Calendar Modal"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add New Event</h2>



            <div>
                <input type="text" className="cInput" placeholder="Add Title" value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" className="cInput" selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" className="cInput" selected={newEvent.end}
                    onChange={(end) => setNewEvent({ ...newEvent, end, userId: localStorage.getItem('userid')  })} />
                <button className="cButton" onClick={handleAddEvent}>
                    Add Event
                </button>
                <button className="cButton" onClick={(closeModal)}>
                    Close
                </button>
            </div>


        </Modal>
    </div>

    <div className="cDiv">
        <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            selectable={true}
            // defaultDate={new Date()}
            // view='month' 
            onSelectEvent={function removeEvent(event) {
                const storedToken = localStorage.getItem("token")
                const userId = localStorage.getItem('userid')
                const eventId = event._id
                console.log(event)
                fetch(`${devLink}/api/events/${userId}/${eventId}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                        "Content-Type": "application/json"
                    }
                }).then(res => {
                    return res.json()
                }).then(eventData => {
                    setAllEvents(eventData)
                    console.log(eventData)
                })
            }}
            views={['month']}
            style={{ height: "75vh", margin: "10px", backgroundColor: "#ddbdd5", fontFamily: "Roboto" }}
        />
    </div>


</div>
  )
}