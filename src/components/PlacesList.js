import React, {Component} from 'react';
import './PlacesListItem.css';
import PlacesItem from './PlacesItem'

const PlacesList = (props) => (
	<ul className="sidebar-list">
		{props.data.map(item => (

		<PlacesItem
			placeId={item.venue.id}
			placeName={item.venue.name}
		/>

))}
	
	
	</ul>
);

export default PlacesList;