import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import MapContainer from './components/MapContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
				<div className="container">
					<aside className="sidebar">
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
