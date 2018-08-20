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
				zoom={14}
				/*onClick={onMapClicked}*/
			>

        <Marker 
					onClick={this.onMarkerClick}
          name={'Current location'} 
				/>

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