import React, {Component} from 'react';
import '../App.css'
import logo from '../utils/main-logo.svg'


const Header = () => (
	<header className="header">
		<img src={logo} className="header-logo" alt="logo"/>
		<h1 className="header-title">Neighborhood Map</h1>
	</header>
)

export default Header;