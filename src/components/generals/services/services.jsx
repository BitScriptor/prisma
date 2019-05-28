import React from "react";
import Grid from '@material-ui/core/Grid';

import Service from './../service/service';
import './services.css';

const info = {
  title: 'Title',
  subtitle: 'Subtitle',
  serviceList: [
    'aaaaa',
    'bbbbbbb',
    'cccccccc'
  ],
  imgList: [
    './static/img/img2.jpg',
    './static/img/img2.jpg',
    './static/img/img2.jpg',
  ]
}

const ServicesList = () => {
	return (
		<div>
      <div className="text-center my-4">
        nuestros servicios
      </div>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info} />
        </Grid>
      </Grid>
    </div>
	)
}

export default ServicesList;
