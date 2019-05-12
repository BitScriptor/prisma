import React from "react";
import './slideImg.css';
import { Slide } from 'react-slideshow-image';

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true
}

class Slideshow extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
		if (this.props.imgList) {
			return (
				<Slide {...properties}>
					<div className="each-slide">
						<div className="sliderItem" style={{'backgroundImage': `url(${this.props.imgList[0]})`, 'height': `${this.props.height}`}}>
							<span>Slide JOSS</span>
						</div>
					</div>
					<div className="each-slide">
						<div className="sliderItem" style={{'backgroundImage': `url(${this.props.imgList[1]})`, 'height': `${this.props.height}`}}>
							<span>Slide 2</span>
						</div>
					</div>
					<div className="each-slide">
						<div className="sliderItem" style={{'backgroundImage': `url(${this.props.imgList[2]})`, 'height': `${this.props.height}`}}>
							<span>Slide 3</span>
						</div>
					</div>
				</Slide>
			);
		} else {
			return (
				<div>
					cargando
				</div>
			);
		}
  }
}

export default Slideshow;

