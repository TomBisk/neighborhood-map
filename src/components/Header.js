import React from 'react';
import './Header.css'
import '../Media.css'
import logo from '../utils/main-logo-icon.svg'


const Header = props => {
	const sidebar = document.getElementsByTagName("aside");
	const menuIcon = document.getElementsByClassName("menu-icon");
	const media = window.matchMedia("screen and (min-width: 768px)");

	media.addListener(function(media) {
		if(media.matches) {
			sidebar[0].classList.add("is-shown");
			for (let i = 0; i < menuIcon.length; i++) {
				menuIcon[i].classList.remove("menu-active");
			}
    } else {
				sidebar[0].classList.remove("is-shown"); 
    }
	});
	
	return (
		<header className="header">
			<div 
				id="menu" 
				className="header-menu"
				onClick={() => {
					sidebar[0].classList.toggle("is-shown");
					for (let i = 0; i < menuIcon.length; i++) {
						menuIcon[i].classList.toggle("menu-active");	 
					}
				}}
			>
				<span className="menu-icon menu-color"></span>
				<span className="menu-icon menu-color"></span>
				<span className="menu-icon menu-color"></span>
			</div>
			<h1 className="header-title">Visit museums in Silesian Metropolis</h1>
		</header>
	)
}

export default Header;