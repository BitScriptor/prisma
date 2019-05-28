import React from "react";
import Grid from '@material-ui/core/Grid';

import Slideshow from './../slideImg/slideImg';
import './service.css';


class Service extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={6} className="container-info">
            <div className="title" style={{'color': this.props.titleColor}}>
              {this.props.info.title}
            </div>
            <div className="subtitle">
              {this.props.info.subtitle}
            </div>
            <div className="List">

            </div>
          </Grid> 
          <Grid item xs={12} sm={6}>
            <Slideshow imgList={this.props.info.imgList} height={'200px'}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Service;
