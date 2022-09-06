import AddNote from './AddNote';

import { MdDeleteForever } from 'react-icons/md';

import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Draggable>
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
			</Draggable>

			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;