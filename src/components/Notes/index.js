import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './notes-components/NotesList';
import Search from './notes-components/Search';
import Header from './notes-components/Header';
import "./index.css";

const Notes = () => {

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
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
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
