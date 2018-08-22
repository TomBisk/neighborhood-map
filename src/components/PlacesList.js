import React from 'react';
import './PlacesList.css';


const PlacesList = (props) => (
	<ul className="sidebar-list">
		{props.filteredData.map(item => (
			<li 
				key={item.venue.id}
				className="list-item"
				onClick={props.onListClicked}
				data-id={item.venue.id}
			>
				{item.venue.name}
			</li>
		))}
	</ul>
);

export default PlacesList;