import React, {Component} from 'react';
import './PlacesListItem.css';


const PlacesItem = (props) => (
	<li 
		key={props.placeId}
		className="list-item"
	>{props.placeName}
	</li>
);

export default PlacesItem;