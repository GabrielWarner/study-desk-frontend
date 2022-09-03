<<<<<<< HEAD
=======

>>>>>>> ff0563b8a7d092432e9668957e1ec31085195e3d
import AddNote from './AddNote';

import { MdDeleteForever } from 'react-icons/md';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<div className='note' id={note._id} key={note._id} >
				<span>{note.text}</span>
				<div className='note-footer'>
					<small>{note.date}</small>
					<MdDeleteForever
						onClick={() => handleDeleteNote(note._id)}
						className='delete-icon'
						size='1.3em'
					/>
				</div>
			</div>

			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;