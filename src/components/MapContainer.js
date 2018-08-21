import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapContainer.css'


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
				/*onClick={onMapClicked}*/
			>
				{this.props.state.data.map(marker => (
		
        <Marker 
					onClick={this.onMarkerClick}
          name={'Current location'}
					position={{
						lat:marker.venue.location.lat,
						lng:marker.venue.location.lng
					}}
				/>
			))}

        <InfoWindow onClose={this.onInfoWindowClose}>
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