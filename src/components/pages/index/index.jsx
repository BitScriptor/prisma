import React from "react";
import Slider from './../../generals/slideImg/slideImg';
import ServicesList from './../../generals/services/services';


const imgList = [
  './static/min/img1.png',
  './static/min/img2.png',
  './static/min/img3.png',
];
class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Slider imgList={imgList} height={'25em'}/>
        <ServicesList/>
      </div>
    );
  }
}

export default Index;
