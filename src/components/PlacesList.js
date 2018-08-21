import React from 'react';
import './PlacesListItem.css';
import PlacesItem from './PlacesItem'


const PlacesList = (props) => (
	<ul className="sidebar-list">
		{props.filteredData.map(item => (
			<PlacesItem
				key={item.venue.id}
				placeName={item.venue.name}
			/>
		))}
	</ul>
);

export default PlacesList;