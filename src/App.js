import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import PlacesList from './components/PlacesList';
import MapContainer from './components/MapContainer';
import Footer from './components/Footer';

class App extends Component {
  
	state = {
		data: [],
		mapCenter: {lat: 50.26489189999999,
								lng: 19.0237815},
		error: '',
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
				console.log(data)
				this.setState({data})
		})
		
			.catch(error => {
				console.log('err:' + error)
				this.setState({ error: 'Error occured during getting data from Foursquare API'})
		})
	}
	
	render() {
    return (
      <div className="App">
        <Header/>
				<div className="container">
					<aside id="aside" className="sidebar is-hidden">
						<Search/>
						<PlacesList/>
						<PlacesList/>
						
					</aside>
					<div className="map">
						<MapContainer/>
					</div>
				</div>
				<Footer/>
      </div>
    );
  }
}


export default App;
