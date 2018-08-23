import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapContainer.css'
import Pin from '../utils/pin.svg'
import PinActive from '../utils/pin-active.svg'


export class MapContainer extends Component {
	
	
	
	
	
	
	render() {
    return (
      <Map 
				google={this.props.google}
				initialCenter={{
					lat: 50.297488,
					lng: 18.954573,
				}}
				center={{
					lat: this.props.state.mapCurrent.lat,
					lng: this.props.state.mapCurrent.lng,
				}}
			
				zoom={this.props.state.zoom}
				onClick={this.props.onMapClicked}
			>
				{this.props.state.filteredData.map(marker => (
				
        <Marker 
					key={marker.venue.id}
					onClick={this.props.onMarkerClick}
					id={marker.venue.id}
					title={marker.venue.name}
					name={marker.venue.name}
					category={marker.venue.categories[0].name}
					address={marker.venue.location.formattedAddress[0]}
					city={marker.venue.location.formattedAddress[1]}
					ref={this.props.addMarker}
					position={{
						lat: marker.venue.location.lat,
						lng: marker.venue.location.lng
					}}
					
					icon={{url:( marker.venue.id === this.props.state.selectedPlace.id && this.props.state.activeMarker !== null ? PinActive : Pin ),
						scaledSize: new window.google.maps.Size(30,40),
					}}
				/>
			))}

        <InfoWindow 
					onClose={this.props.onInfoWindowClose}
					marker={this.props.state.activeMarker}
					visible={this.props.state.showingInfoWindow}
				>
					<div className="info-window">
						<h1 className="info-name">
							{this.props.state.selectedPlace.name}
						</h1>
						<h2 className="info-category">
							{this.props.state.selectedPlace.category}
						</h2>
						<p className="info-address">
							{this.props.state.selectedPlace.address}
						</p>
						<p className="info-address">
							{this.props.state.selectedPlace.city}
						</p>
						<a className="info-link" 
							href={`https://foursquare.com/v/${this.props.state.selectedPlace.name}/${this.props.state.selectedPlace.id}`} 
							target="_blank"
						>More info at Foursquare</a>
					</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnQLFqkMCYD4o76W7kT5CtOAEf1QP-iQc'
})(MapContainer)