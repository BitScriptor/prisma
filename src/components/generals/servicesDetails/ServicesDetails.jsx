import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import './ServicesDetails.css';

class ServicesDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images
    };
  }

  render() {
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
          <Gallery
            images={this.props.data.gallery}
            enableImageSelection={false}
          />
        </div>
      </div>
    );
  }
}

export default ServicesDetails;
