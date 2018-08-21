import React from 'react';
import './PlacesListItem.css';


const PlacesItem = (props) => (
	<li 
		className="list-item"
	>
		{props.placeName}
	</li>
);

export default PlacesItem;