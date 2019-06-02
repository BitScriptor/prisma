import React from "react";
import Grid from '@material-ui/core/Grid';
import Check from '@material-ui/icons/Check';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import './footer.css';

class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-footer mt-4 p-4">
				<footer className="container">
					<Grid container spacing={16}>
        		<Grid item xs={12} sm={4}>
							<div className="text-yellow">
								<div className="footer-title">
									Nuestro menu
								</div>
								<div className="footer-list">
									<div className="footer-list-item icon-yellow">
										<Check/>
										Inicio
									</div>
									<div className="footer-list-item icon-yellow">
										<Check/>
										Contacto
									</div>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={4}>
							<div className="text-pink">
								<div className="footer-title">
									Contáctanos por correo
								</div>
								<div className="footer-list">
									<div className="footer-list-item icon-pink">
										<Email/>
										sdasdasdasd@ssdfsdf.com
									</div>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={4}>
							<div className="text-blue">
								<div className="footer-title">
									Contáctanos por teléfono
								</div>
								<div className="footer-list">
									<div className="footer-list-item icon-blue">
										<Phone/>
										(33) 23 23 23 43
									</div>
								</div>
							</div>
						</Grid>
					</Grid>
				</footer>
			</div>
		);
	}
}

export default Footer;