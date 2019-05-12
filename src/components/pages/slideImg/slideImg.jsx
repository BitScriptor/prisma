import React from "react";
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import logo from './img2.jpg';

const slideImages = [
	logo,
	'logoPrisma.png',
	'logoPrisma.png',
];

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true
}

const Slideshow = () => {
	return (
		<Slide {...properties}>
			<div className="each-slide">
				<div style={{'backgroundImage': `url(${slideImages[0]})`, 'backgroundSize': 'cove', 'backgroundRepeat': 'no-repeat', 'height':'400px'}}>
					<span>Slide JOSS</span>
				</div>
			</div>
			<div className="each-slide">
				<div style={{'backgroundImage': `url(${slideImages[1]})`}}>
					<span>Slide 2</span>
				</div>
			</div>
			<div className="each-slide">
				<div style={{'backgroundImage': `url(${slideImages[2]})`}}>
					<span>Slide 3</span>
				</div>
			</div>
		</Slide>
	)
}

export default Slideshow;
