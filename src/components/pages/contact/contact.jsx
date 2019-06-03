import React from "react";
import Grid from '@material-ui/core/Grid';
import './contact.css';

class Contact extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			issue: '',
			message: ''
		};
	}

	sendEmail (e) {
		e.preventDefault();
		if (this.state.name !== '' && this.state.email !== '' && this.state.issue !== '' && this.state.message !== '') {
			let data = `action=correo&name=${this.state.name}&email=${this.state.email}&issue=${this.state.issue}&message=${this.state.message}`;

			let xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.addEventListener("readystatechange", function () {
				if (this.readyState === 4) {
					console.log(this.responseText);
					window.location.reload();
				}
			});

			xhr.open("POST", "/send.php");
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.setRequestHeader("cache-control", "no-cache");
			xhr.setRequestHeader("Postman-Token", "c43eecc8-b814-4b26-846c-ec6cbe908cc3");

			xhr.send(data);

			this.setState({
				name: '',
				email: '',
				issue: '',
				message: ''
			});
		}
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
  };

	render() {
		return (
			<div className="container">
				<Grid container spacing={32}>
					<Grid item xs={12} sm={6}>
						<form id="comentarios">
							<label>Nombre</label>
							<input 
								className="efectSombra"
								name="name"
								type="text"
								onChange={this.handleChange.bind(this)}/>
							<label>Correo</label>
							<input 
								className="efectSombra" 
								name="email" 
								id="correo" 
								type="text"
								onChange={this.handleChange.bind(this)}/>
							<label>Asunto</label>
							<input 
								className="efectSombra" 
								name="issue" 
								type="text"
								onChange={this.handleChange.bind(this)}/>
							<label>Mensaje</label>
							<textarea 
								className="efectSombra" 
								name="message"
								onChange={this.handleChange.bind(this)}></textarea>
							<center><input name="accion" className="boton" type="submit" value="Enviar" onClick={this.sendEmail.bind(this)} /></center>
						</form>
					</Grid>
					<Grid item xs={12} sm={6}>
						<div className="divMap">
							<iframe title='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58493.46023640195!2d-103.37732165894572!3d20.683458843557304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1db891bd975%3A0x592151afdc4da3e8!2sLa+Normal%2C+44260+Guadalajara%2C+Jal.!5e0!3m2!1ses-419!2smx!4v1559420570230!5m2!1ses-419!2smx'></iframe>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Contact;
