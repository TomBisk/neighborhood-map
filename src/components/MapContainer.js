import React, { Component } from 'react';
// import components
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapContainer.css'

import Pin from '../utils/pin.svg'
import PinActive from '../utils/pin-active.svg'


// To render map, markers and info window and adjust this elements
export class MapContainer extends Component {
	
	render() {
		
		const { activeMarker, filteredData, mapCenter, selectedPlace, showingInfoWindow, zoom } = this.props.state
		const { google, onInfoWindowClose, onMapClick, onMarkerClick,  } = this.props
		
    return (
      <Map 
				google={google}
				initialCenter={{
					lat: 50.297488,
					lng: 18.954573,
				}}
				center={{
					lat: mapCenter.lat,
					lng: mapCenter.lng,
				}}
			
				zoom={zoom}
				onClick={onMapClick}
			>
				{filteredData.map(marker => (
				
        <Marker 
					key={marker.venue.id}
					onClick={onMarkerClick}
					id={marker.venue.id}
					title={marker.venue.name}
					name={marker.venue.name}
					category={marker.venue.categories[0].name}
					address={marker.venue.location.formattedAddress[0]}
					city={marker.venue.location.formattedAddress[1]}
					position={{
						lat: marker.venue.location.lat,
						lng: marker.venue.location.lng
					}}
					
					icon={{url:( marker.venue.id === selectedPlace.id && activeMarker !== null ? PinActive : Pin ),
						scaledSize: new window.google.maps.Size(30,40),
					}}
				/>
			))}

        <InfoWindow 
					onClose={onInfoWindowClose}
					marker={activeMarker}
					visible={showingInfoWindow}
				>
					<div 
						className="info-window" 
						tabIndex="0"
						aria-label="Place information" 
					>
						<h1 
							className="info-name"  
							tabIndex="0" 
							aria-label={ 'objects name' + selectedPlace.name}
						>
							{selectedPlace.name}
						</h1>

						<h2 
							className="info-category" 
							tabIndex="0" 
							aria-label={'objects category' + selectedPlace.category}
						>
							{selectedPlace.category}
						</h2>
						
						<p 
							className="info-address" 
							tabIndex="0" 
							aria-label={'address' + selectedPlace.address}
						>
							{selectedPlace.address}
						</p>

						<p 
							className="info-address" 
							tabIndex="0" 
							aria-label={selectedPlace.city}
						>
							{selectedPlace.city}
						</p>

						<a 
							className="info-link" 
							href={`https://foursquare.com/v/${selectedPlace.name}/${selectedPlace.id}`} 
							target="_blank" 
							rel="noopener noreferrer"
						>
							More info at Foursquare
						</a>
					</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnQLFqkMCYD4o76W7kT5CtOAEf1QP-iQc'
})(MapContainer)