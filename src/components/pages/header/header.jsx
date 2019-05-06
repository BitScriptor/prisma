import React from "react";
import { Link } from "react-router-dom";
import './header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div class="contactHeader">
						<a href="#nuestroClientes">W (33) 11 36 13 74</a>
						<a href="#servicios">T (33) 38 33 07 03 / (33) 36 56 01 01</a>
				</div>
				<div>
					<img class="logoHeader" src={require("../images/logoPrisma.png")}/>
				</div>
				<nav className="text-center">
					<hr/>
					<div class="topnav">
						<a class="active" href="#inicio">INICIO</a>
						<a href="#nuestroClientes">NUESTROS CLIENTES</a>
						<a href="#servicios">SERVICIOS</a>
						<a href="#contacto">CONTACTO</a>
					</div> 
					<hr/>
				</nav>
				<div>
					<Link to="/">Home</Link>
				</div>
			</header>
		);
	}
}

export default Header;
