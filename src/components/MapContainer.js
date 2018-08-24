import React, { Component } from 'react';
// import components
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapContainer.css'
import '../Media.css'
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
					lat: this.props.state.mapCenter.lat,
					lng: this.props.state.mapCenter.lng,
				}}
			
				zoom={this.props.state.zoom}
				onClick={this.props.onMapClick}
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
					<div className="info-window" aria-label="Place information" tabIndex="0">
						<h1 className="info-name"  tabIndex="0" aria-label={ 'objects name' + this.props.state.selectedPlace.name}>
							{this.props.state.selectedPlace.name}
						</h1>
						<h2 className="info-category" tabIndex="0" aria-label={'objects category' + this.props.state.selectedPlace.category}>
							{this.props.state.selectedPlace.category}
						</h2>
						<p className="info-address" tabIndex="0" aria-label={'address' + this.props.state.selectedPlace.address}>
							{this.props.state.selectedPlace.address}
						</p>
						<p className="info-address" tabIndex="0" aria-label={this.props.state.selectedPlace.city}>
							{this.props.state.selectedPlace.city}
						</p>
						<a className="info-link" 
							href={`https://foursquare.com/v/${this.props.state.selectedPlace.name}/${this.props.state.selectedPlace.id}`} 
							target="_blank" rel="noopener noreferrer"
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