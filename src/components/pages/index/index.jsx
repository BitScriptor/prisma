import React from "react";
import Slider from './../../generals/slideImg/slideImg';
import ServicesList from './../../generals/services/services';


const imgList = [
  './static/img/img2.jpg',
  './static/img/img2.jpg',
  './static/img/img2.jpg',
];
class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Slider imgList={imgList} height={'400px'}/>
        <ServicesList/>
      </div>
    );
  }
}

export default Index;