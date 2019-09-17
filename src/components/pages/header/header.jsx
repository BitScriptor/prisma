import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import './header.css';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(prevProps) {
		// eslint-disable-next-line no-undef
		AOS.init();
	}

	render() {
		return (
			<header>
				<div className="contactHeader">
					<div className="container container-header-info">
						<div className="d-flex justify-content-between">
							<div className="contactHeaderLeft">
								<span className="topData">
									<img className="icon-header" src="/static/img/whats.png"/>
									(33) 11 36 13 74
								</span>
								<span className="topData">
									<img className="icon-header" src="/static/img/telefono.png"/>
									(33) 36 56 01 01
								</span>
							</div>
							<div className="contactHeaderRight">
								<a href="https://www.facebook.com/prismapublicidadexterior/" target="_blank">
									<span>
										<img className="icon-header" src="/static/img/face.png"/>
									</span>
								</a>
								<span className="topData">
									<a href="mailto:prisma_neon@yahoo.com.mx">
										<img className="icon-header" src="/static/img/mail.png"/>
										prisma_neon@yahoo.com.mx
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
				<nav data-aos="flip-up" className="flex-container">
					<a href="/"><img className="logoHeader" src={require("../images/logoPrisma.png")}/></a>
					<div className="topnav">
						<div>
							<Link className={this.props.location.pathname === '/'? 'active': ''} to="/">INICIO</Link>
						</div>
						<div>
							{this.props.location.pathname === '/' && <a href="#nuestros-clientes">NUESTROS CLIENTES</a>}
						</div>
						<div>
						<Link className={this.props.location.pathname === '/contact'? 'active': ''} to="/contact">CONTACTO</Link>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

const ShowTheLocationWithRouterHeader = withRouter(Header);

export default ShowTheLocationWithRouterHeader;
