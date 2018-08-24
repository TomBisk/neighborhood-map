import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import PlacesList from './components/PlacesList';
import MapContainer from './components/MapContainer';
import Footer from './components/Footer';

class App extends Component {
  
	allMarkers = [];
	sidebar = document.getElementsByTagName("aside");

	menuIcon = document.getElementsByClassName("menu-icon");
		

	state = {
		data: [],
		filteredData: [],
		mapCenter: {lat: 50.297488,
								lng: 18.954573},
		zoom: 10,
		
		mapCurrent: {lat: 50.297488,
								 lng: 18.954573,},
		
		error: {gm: '',
					  fs: '',
					 	msg: 'Check the console for details.'},
		query: '',
		sidebarState: false,
		screenRes: false,
		activeMarker:null ,
		showingInfoWindow: false,
		selectedPlace: {},
	}
	
	
	componentDidMount() {
		this.getData();
	}
	
	getData = () => {
		fetch(
		 `https://api.foursquare.com/v2/venues/explore
			?client_id=IN5TUWGGA1WEYLPY4HIWWOTFLOFYZ4A40GUDST5IJC4ZQ2K4
			&client_secret=ZTMTGWJJZDYY4XAIMVKSD5RXLMGLUGSQTC5SSDEQYOFLJUZA
			&ll=${this.state.mapCenter.lat},${this.state.mapCenter.lng}
			&categoryId=4bf58dd8d48988d181941735
			&radius=20000
			&limit=20
			&v=20180818`
		)
			.then(response => response.json())
			.then(res => {
			  const data = res.response.groups[0].items
				this.setState({data})
				this.setState({filteredData: data})
		})
		
			.catch(error => {
				console.log('err:' + error)
				this.setState({ error: {...this.state.error, fs: 'Error occured while retrieving data from Foursquare API'}})
		})
	}
	
	updateQuery = query => {
		const filteredData = this.getFiltered(query)
		this.setState({filteredData, showingInfoWindow: false,
		activeMarker: null,})
		
	}
	
	getFiltered(query) {
		return this.state.data.filter(item => item.venue.name.toLowerCase().includes(query.toLowerCase()) || item.venue.categories[0].name.toLowerCase().includes(query.toLowerCase()))
	}
	

	onMenuClicked = () => {
		
		if (this.state.sidebarState  ) {
			this.sidebar[0].classList.toggle("is-shown");
			for (let i = 0; i < this.menuIcon.length; i++) {
				this.menuIcon[i].classList.toggle("menu-active");
			}
			this.setState({
				sidebarState: false,
			})
		} else if (!this.state.sidebarState  ){
				this.sidebar[0].classList.toggle("is-shown");
				for (let i = 0; i < this.menuIcon.length; i++) {
					this.menuIcon[i].classList.toggle("menu-active");
				}
				this.setState({
					sidebarState: true,
				})
		} else{
			
		}
			
	}


	onMarkerClick = (props, marker) => {
		this.setState({
		activeMarker: marker,
		showingInfoWindow: true,
		selectedPlace: props,
	})
	
	}
	
	onMapClicked = () => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null,
				mapCurrent: {...this.state.mapCurrent,
					lat: this.state.mapCenter.lat,
					lng: this.state.mapCenter.lng},
				zoom: 10,
			})
		}
	}
	
	onInfoWindowClose = () => {
		this.setState({
			showingInfoWindow: false,
			activeMarker: null,
		})
	}
	
	
addMarker = (marker) => {
	if (marker) {
		this.allMarkers.push(marker);
	}
}
	
	
	onListClicked = (item) => {
		document.querySelector(`[title="${item}"]`).click()
		this.onMenuClicked()
	}	
	
	render() {
	
    return (
      <div className="App">
        <Header
					sidebarState={this.state.sidebarState}
					onMenuClicked={this.onMenuClicked}
				/>
				<div className="container">
					<aside id="sidebar" className="sidebar is-hidden">
						<Search
							updateQuery={this.updateQuery}
						/>
						{this.state.error.fs.length !== 0 ?
							<div className="error-msg" role="alert" aria-label="error message">
								<p className="error-info">
									{this.state.error.fs}
								</p>
								<p className="error-info">
									{this.state.error.msg}
								</p>
								</div>
							:
							<PlacesList
								filteredData={this.state.filteredData}
								activeMarker={this.state.activeMarker}
								onListClicked={this.onListClicked}
							/>
						}	
					</aside>
					<div className="map"
						role="application"
						aria-label="map with locations"
						tabIndex="-1"
					>
			
						<MapContainer
							state={this.state}
							addMarker={this.addMarker}
							onMarkerClick={this.onMarkerClick}
							onMapClicked={this.onMapClicked}
							onInfoWindowClose={this.onInfoWindowClose}
						/>
					</div>
				</div>
				<Footer/>
      </div>
    );
  }
}

export default App;
