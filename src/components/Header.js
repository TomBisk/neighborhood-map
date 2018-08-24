import React from 'react';
import './Header.css'
import '../Media.css'


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
			<button 
				id="menu" 
				className="header-menu"
				aria-label="toggle menu"
				onClick={props.onMenuClick}
				
			>
				<span className="menu-icon menu-color"></span>
				<span className="menu-icon menu-color"></span>
				<span className="menu-icon menu-color"></span>
			</button>
			<h1 className="header-title" tabIndex="1">Visit museums in Silesian Metropolis</h1>
		</header>
	)
}

export default Header;