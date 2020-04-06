import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Slider from '../../generals/slideImg/slideImg';
import './header.css';


const imgList = [
  './static/min/ruletaPrincipal/img1.jpg',
  './static/min/ruletaPrincipal/img2.jpg',
  './static/min/ruletaPrincipal/img3.jpg',
  './static/min/ruletaPrincipal/img4.jpg',
  './static/min/ruletaPrincipal/img5.jpg',
  './static/min/ruletaPrincipal/img6.jpg',
  './static/min/ruletaPrincipal/img7.jpg',
  './static/min/ruletaPrincipal/img8.jpg',
  './static/min/ruletaPrincipal/img9.jpg',
];

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(prevProps) {
		// eslint-disable-next-line no-undef
		AOS.init();
	}

	render() {
		const isHome = this.props.location.pathname === '/'
		return (
			<header className="headerContainer">
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
					<div className="logoContainer">
						<a href="/">
							<img className="logoHeader" src={require("../images/logoPrisma.png")}/>
						</a>
					</div>
				</nav>
				<div className="topnav">
					<div>
						<Link className={isHome ? 'active': ''} to="/">INICIO</Link>
					</div>
					<div>
						{this.props.location.pathname === '/' && <a href="#nuestros-clientes">NUESTROS SERVICIOS</a>}
					</div>
					<div>
					<Link className={this.props.location.pathname === '/contact'? 'active': ''} to="/contact">CONTACTO</Link>
					</div>
				</div>
				{isHome && 
					<div className="img-main-index">
						<Slider imgList={imgList} height={'25em'}/>
					</div>
				}
			</header>
		);
	}
}

const ShowTheLocationWithRouterHeader = withRouter(Header);

export default ShowTheLocationWithRouterHeader;
