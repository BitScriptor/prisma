import React from "react";
import './slideImg.css';
import Slider from "react-slick";

var settings = {
	arrows: false,
	dots: false,
	infinite: true,
	adaptiveHeight: false,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	focusOnSelect: false,
	autoplay: true,
  autoplaySpeed: 3000
};

class Slideshow extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
		super(props);
  }

  render() {
		const { imgList, height } = this.props;
		if (imgList) {
			return (
				<div className="slider">
					<Slider {...settings}>
						{imgList.map((image, index) => (
							<div>
								<div className="image-slider" style={{backgroundImage: `url(${image})`, height: height}}></div>
							</div>
						))}
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

