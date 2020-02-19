import React from 'react';
import Slider from './../../generals/slideImg/slideImg';
import './ServicesDetails.css';

class ServicesDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { data } = this.props;
    const imgList = data.gallery.map((image) => image.src);
    return (
      <div>
        <div className="text-center title-service">
          {this.props.data.title}
        </div>
        <div className="mb-4 description">
          {this.props.data.description}
        </div>
        <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto",
                textAlign: "center",
                background: "white"
            }}
            className="mb-5">
          <Slider
            imgList={imgList}
            height={'39em'}
          />
        </div>
      </div>
    );
  }
}

export default ServicesDetails;
