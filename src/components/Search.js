import React from 'react';
import './Search.css'


// Input field to search, it send query to the App
const Search = (props) => (
	<div className="search-input-wrapper">
		<input 
			className="search-input"
			type="text" 
			placeholder="Search by name or category..."
			onChange={(event) => props.updateQuery(event.target.value)}
		/>
	</div>
)

export default Search;