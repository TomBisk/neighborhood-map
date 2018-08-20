import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import MapContainer from './components/MapContainer';
import Footer from './components/Footer';

class App extends Component {
  
	
	getData = () => {
		
		
		/*https://api.foursquare.com/v2/venues/explore
			?client_id=IN5TUWGGA1WEYLPY4HIWWOTFLOFYZ4A40GUDST5IJC4ZQ2K4
			&client_secret=ZTMTGWJJZDYY4XAIMVKSD5RXLMGLUGSQTC5SSDEQYOFLJUZA
			&ll=50.26489189999999,19.0237815
			&categoryId=4bf58dd8d48988d181941735
			&radius=10000
			&limit=20
			&v=20180818*/
	}
	
	
	
	
	
	render() {
    return (
      <div className="App">
        <Header/>
				<div className="container">
					<aside id="aside" className="sidebar is-hidden">
						<Search/>
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
