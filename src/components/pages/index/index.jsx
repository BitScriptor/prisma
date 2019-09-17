import React from "react";
import Slider from './../../generals/slideImg/slideImg';
import ServicesList from './../../generals/services/services';


const imgList = [
  './static/min/img1.png',
  './static/min/img2.png',
  './static/min/img3.png',
];
class Index extends React.Component {

  componentDidMount(prevProps) {
		// eslint-disable-next-line no-undef
		AOS.init();
  }
  
  render() {
    return (
      <div>
        <div className="img-main-index">
          <Slider imgList={imgList} height={'25em'}/>
        </div>
        <ServicesList/>
      </div>
    );
  }
}

export default Index;
