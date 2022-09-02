import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './notes-components/NotesList';
import Search from './notes-components/Search';
import Header from './notes-components/Header';
import "./index.css";


const Notes = () => {

  const storedToken = localStorage.getItem("token");	

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: '12/12/2021',
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: '12/12/2021',
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: '12/12/2021',
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: '12/12/2021',
    },

  ])
  const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
		getNote();
	}, []);

	const getNote = () => {
		fetch("http://localhost:3001/api/notes", {
			headers: {
				Authorization: `Bearer ${storedToken}`,
			},
			
		}).then((res)=>{
			if (!res.ok){
				console.log("invalid token");
			} else {
				res.json().then((data) => {
					console.log(data)
					setNotes(data)
				})
			}
		})
	}

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),		
		};
		fetch("http://localhost:3001/api/notes", {
			headers: {
				Authorization: `Bearer ${storedToken}`,
				'Content-Type': 'application/json'
				
			},
			method: "POST",
			body: JSON.stringify(newNote),
		}).then((res)=>{
			if (!res.ok){
				console.log("invalid token");
			} 
			// else {
			// 	res.json().then((data) => {
			// 		setNotes(
			// 			[{
			// 			id:data.id,
			// 			text:data.text,
			// 			data:data.date
			// 	}]
			// 	)
			// 	})
			// }
		})
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		console.log(id)
		const newNotes = notes.filter((note) => note._id !== id);
		setNotes(newNotes);
		fetch(`http://localhost:3001/api/notes/${id}`, {
			headers: {
				Authorization: `Bearer ${storedToken}`,
				
			},
			method: "DELETE",
		}).then((res)=>{
			if (!res.ok){
				console.log("invalid token");
			}
		})
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='notes-container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default Notes;
