import React from "react";
import { Link } from "react-router-dom";
import './header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="contactHeader">
					<div className="container container-header-info">
						<div className="d-flex justify-content-between">
							<div className="contactHeaderLeft">
								<span className="topData">W (33) 11 36 13 74</span>
								<span className="topData">T (33) 38 33 07 03 / (33) 36 56 01 01</span>
							</div>
							<div className="contactHeaderRight">
								<a href="www.facebook.com"><span className="topData">Facebook</span></a>
								<span className="topData">C ventas@prismaneon.com</span>
							</div>
						</div>
					</div>
				</div>
				<div>
					<a href="/"><img className="logoHeader" src={require("../images/logoPrisma.png")}/></a>
				</div>
				<nav className="container text-center">
					<div className="topnav">
						<div>
							<a className="active" href="#inicio">INICIO</a>
						</div>
						<div>
							<a href="#nuestroClientes">NUESTROS CLIENTES</a>
						</div>
						<div>
							<a href="#servicios">SERVICIOS</a>
						</div>
						<div>
							<a href="#contacto">CONTACTO</a>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
