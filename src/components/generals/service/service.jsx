import React from "react";
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";
import { Brightness1 } from '@material-ui/icons';

import Slideshow from './../slideImg/slideImg';
import './service.css';


class Service extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid container>
          <Link to={`/services/${this.props.info.subtitle}`} className="linkContainer" />
          <Grid item xs={12} sm={6} className="container-info">
            <div className="title" style={{'color': this.props.titleColor}}>
              {this.props.info.title}
            </div>
            <div className="subtitle">
              {this.props.info.subtitle}
            </div>
            <div className="List mt-2">
              <div className="listService">
                {this.props.info.serviceList.map((value, index) => {
                  return (
                    <Link to={`/services/${this.props.info.subtitle}`} style={{width: this.props.info.col}} key={index}>
                      <Icon className="icon"><Brightness1 style={{'color': this.props.titleColor}}/></Icon> {value}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Grid> 
          <Grid item xs={12} sm={6}>
            <Slideshow imgList={this.props.info.imgList} height={this.props.sliderHeight}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Service;
