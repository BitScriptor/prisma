import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import './header.css';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

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
							<Link className={this.props.location.pathname === '/'? 'active': ''} to="/">INICIO</Link>
						</div>
						<div>
							<Link className={this.props.location.pathname === '/about'? 'active': ''} to="/about">NUESTROS CLIENTES</Link>
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

const ShowTheLocationWithRouterHeader = withRouter(Header);

export default ShowTheLocationWithRouterHeader;
