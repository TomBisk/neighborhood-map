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
					lat: 50.26489189999999,
					lng: 19.0237815,
				}}
				zoom={11}
				onClick={this.props.onMapClicked}
			>
				{this.props.state.filteredData.map(marker => (
		
        <Marker 
					key={marker.venue.id}
					onClick={this.props.onMarkerClick}
          name={'Current location'}
					title={marker.venue.name}
					position={{
						lat: marker.venue.location.lat,
						lng: marker.venue.location.lng
					}}
					icon={{
						url: Pin,
						
						scaledSize: new window.google.maps.Size(30,40),
					}}
				/>
			))}

        <InfoWindow 
					onClose={this.onInfoWindowClose}
					marker={this.props.state.activeMarker}
					visible={this.props.state.showingInfoWindow}
				>
            <div>
              <h1>{/*{this.state.selectedPlace.name}*/}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnQLFqkMCYD4o76W7kT5CtOAEf1QP-iQc'
})(MapContainer)