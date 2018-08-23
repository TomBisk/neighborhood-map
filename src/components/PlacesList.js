import React from 'react';
import './PlacesList.css';


const PlacesList = (props) => (
	<ul className="sidebar-list">
		{props.filteredData.map(item => (
			<li 
				key={item.venue.id}
				className={(props.activeMarker && item.venue.id === props.activeMarker.id) ? "list-item list-item-active" : "list-item"}
				onClick={() => {props.onListClicked(item)}}
			>
				{item.venue.name}
			</li>
		))}
	</ul>
);

export default PlacesList;