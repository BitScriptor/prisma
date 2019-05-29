import React from "react";
import './slideImg.css';
import { Slide } from 'react-slideshow-image';
import Slider from "react-slick";

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true
}

var settings = {
	arrows: false,
	dots: false,
	infinite: true,
	adaptiveHeight: false,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	focusOnSelect: false
};

class Slideshow extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
		super(props);
  }

  render() {
		if (this.props.imgList) {
			return (
				<div className="slider">
					<Slider {...settings}>
						<div>
							<div className="image-slider" style={{backgroundImage: `url(${this.props.imgList[0]})`, height: this.props.height}}></div>
						</div>
						<div>
							<div className="image-slider" style={{backgroundImage: `url(${this.props.imgList[1]})`, height: this.props.height}}></div>
						</div>
						<div>
							<div className="image-slider" style={{backgroundImage: `url(${this.props.imgList[2]})`, height: this.props.height}}></div>
						</div>
					</Slider>
				</div>
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

