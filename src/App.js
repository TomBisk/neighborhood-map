import React, { Component } from 'react';
import './App.css';

// Import components
import Footer from './components/Footer';
import Header from './components/Header';
import MapContainer from './components/MapContainer';
import PlacesList from './components/PlacesList';
import Search from './components/Search';


class App extends Component {
  	

	state = {
		// To store fetched data
		data: [],
		filteredData: [],
		
		// Default map center and zoom position
		mapCenter: {lat: 50.297488,
								lng: 18.954573},
		zoom: 10,
		
		// To handling API loading error
		error: {gm: '',
					  fs: '',
					 	msg: 'Check the console for details.'},
		
		// To handling queries in search input
		query: '',
		
		// State of sidebar to auto show/hide sidebar/menu on mobiles 
		sidebarState: false,
		
		// To set active and selected marker an show info window
		activeMarker: {} ,
		selectedPlace: {},
		showingInfoWindow: false,
	}
	
	// To handling menu's auto on/off on mobiles
	sidebar = document.getElementsByTagName("aside");
	menuIcon = document.getElementsByClassName("menu-icon");
	

	componentDidMount() {
		this.getData();
	}
	
/**
 * To get data from Foursqare API with defined specific parameters and error handling:
 * ll - ap center coords
 * categoryId - category of objects
 * radius - area radius [in meters] from map center
 * limit - limit of fetched objects
 * v - date of data update (YYYYMMDD)
 */
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
	
/**
 * To filter data by input text
 * (based on react course at https://typeofweb.com/ (PL)
 */
	updateQuery = query => {
		const filteredData = this.getFiltered(query)
		this.setState({filteredData, showingInfoWindow: false,
		activeMarker: null,})
		
	}
	
	getFiltered(query) {
		return this.state.data.filter(item => item.venue.name.toLowerCase().includes(query.toLowerCase()) || item.venue.categories[0].name.toLowerCase().includes(query.toLowerCase()))
	}
	

/**
 * It checks sidebar/menu state, shows/hides it and changes menu icon.
 * Used to switch sidebar visibility by button clicking and to hiding
 * list when item selected on mobile and showing list when info window closed
 * or map clicked. It changes proper classes for sidbar and button elements
 */
	onMenuClick = () => {
		if (this.state.sidebarState) {
			this.sidebar[0].classList.toggle("is-shown");
			for (let i = 0; i < this.menuIcon.length; i++) {
				this.menuIcon[i].classList.toggle("menu-active");
			}
			this.setState({
				sidebarState: false,
			})
		} else if (!this.state.sidebarState) {
				this.sidebar[0].classList.toggle("is-shown");
				for (let i = 0; i < this.menuIcon.length; i++) {
					this.menuIcon[i].classList.toggle("menu-active");
				}
				this.setState({
					sidebarState: true,
				})
		} 	
	}

/**
 * To get properties of clicked marker and set them to proper states
 * and show info window
 */
	onMarkerClick = (props, marker) => {
		this.setState({
			activeMarker: marker,
			selectedPlace: props,
			showingInfoWindow: true,
		})
	}
	
/**
 * To close oened info window and unactive last marker
 * when map clicked. It opens sidebar on mobile
 */
	onMapClick = () => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null,
			})
			this.onMenuClick()
		}
	}
	
/**
 * When info window is closed (by X button) it 
 * change the state of info window, remove 
 * active marker and shows sidebar on mobile
 */	
	onInfoWindowClose = () => {
		this.setState({
			showingInfoWindow: false,
			activeMarker: null,
		})
		this.onMenuClick()
	}
	
/**
 * When list item clicked, it "clicks" proper marker 
 * and call to hide sidebar on mobile
 */
	onListClick = (item) => {
		document.querySelector(`[title="${item}"]`).click()
		this.onMenuClick()
	}	
	
	
	render() {
		
    return (
      <div className="App">
        <Header
					sidebarState={this.state.sidebarState}
					onMenuClick={this.onMenuClick}
				/>
				<div className="container">
					<aside 
						id="sidebar" 
						className="sidebar is-hidden"
					>
						<Search
							updateQuery={this.updateQuery}
						/>
						{this.state.error.fs.length !== 0 ?
							<div 
								className="error-msg" 
								role="alert" 
								aria-label="error message"
							>
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
								onListClick={this.onListClick}
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
							onMarkerClick={this.onMarkerClick}
							onMapClick={this.onMapClick}
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
