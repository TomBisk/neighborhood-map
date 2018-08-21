import React, {Component} from 'react';
import './Search.css'


const Search = (props) => (
	<div className="search-input-wrapper">
						<input 
							className="search-input"
							type="text" 
							placeholder="Search by..."
							onChange={(event) => props.updateQuery(event.target.value)}
						/>
					</div>
)

export default Search;