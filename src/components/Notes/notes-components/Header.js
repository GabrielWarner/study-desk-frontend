import "./header.css"
import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h2>Notes</h2>
			<button className="noteBtn"
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				// className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;