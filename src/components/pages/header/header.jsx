import React from "react";
import { Link } from "react-router-dom";
import './header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div class="contactHeader">
					<div class="contactHeaderLeft">
						<p class="topData">W (33) 11 36 13 74</p>
						<p class="topData">T (33) 38 33 07 03 / (33) 36 56 01 01</p>
					</div>
					<div class="contactHeaderRight">
						<a href="www.facebook.com"><p class="topData">Facebook</p></a>
						<p class="topData">C ventas@prismaneon.com</p>
					</div>
				</div>
				<div>
					<a href="/"><img class="logoHeader" src={require("../images/logoPrisma.png")}/></a>
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
			</header>
		);
	}
}

export default Header;
