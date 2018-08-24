import React from 'react';
import './PlacesList.css';


/** List to present fetched and filtered places. Buttons
 * allow to select related location on the map
 */
const PlacesList = (props) => (
	<ol className="sidebar-list" 
			aria-label="List of museums"
	>
			
		{props.filteredData.map(item => (
			<li 
				key={item.venue.id}
			>
				<button
					aria-label={item.venue.name}
					tabIndex="0"
					className={(props.activeMarker && item.venue.id === props.activeMarker.id) ? "list-item list-item-active" : "list-item"}
					onClick={() => {props.onListClick(item.venue.name)}}
				>
					{item.venue.name}
				</button>
			</li>
		))}
	</ol>
);

export default PlacesList;