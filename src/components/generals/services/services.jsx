import React from "react";
import Grid from '@material-ui/core/Grid';

import Service from './../service/service';
import './services.css';

const info = {
  title: 'Anuncios',
  subtitle: 'aaaaa',
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
      <div>
        nuestros servicios
      </div>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'200px'} info={info} />
        </Grid>
      </Grid>
    </div>
	)
}

export default ServicesList;
