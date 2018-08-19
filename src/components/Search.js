import React, {Component} from 'react';
import './Search.css'


const Search = () => (
	<div className="search-books-input-wrapper">
						<input 
							className="search-input"
							type="text" 
							placeholder="Search by..."
						/>
					</div>
)

export default Search;