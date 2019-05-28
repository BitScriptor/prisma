import React from "react";
import Grid from '@material-ui/core/Grid';

import Service from './../service/service';
import './services.css';

const info_luminosos = {
  title: 'ANUNCIOS',
  subtitle: 'LUMINOSOS',
  serviceList: [
    'UNA VISTA',
    'DOS VISTAS',
	'TIPO PALETA',
    'TIPO NUBE'
  ],
  imgList: [
    './static/img/alumi1.jpg',
    './static/img/alumi2.jpg',
    './static/img/alumi3.jpg'
  ]
}

const info_espectaculares = {
  title: 'ANUNCIOS',
  subtitle: 'ESPECTACULARES',
  serviceList: [
    'TUBO MASTIL',
    'VOLUMETRICO'
  ],
  imgList: [
    './static/img/aespec1.jpg',
    './static/img/aespec2.jpg',
    './static/img/aespec3.jpg',
    './static/img/aespec4.jpg',
    './static/img/aespec5.jpg'
  ]
}

const info_carretero = {
  title: 'ANUNCIOS',
  subtitle: 'TIPO CARRETERO',
  serviceList: [
    'DOBLES',
    'GRANDES',
	'CUADRADOS',
	'GRANDES',
	'MEDIANOS',
	'PEQUEÑOS'

  ],
  imgList: [
    './static/img/acarre1.jpg',
    './static/img/acarre2.jpg',
    './static/img/acarre3.jpg',
    './static/img/acarre4.jpg'
  ]
}	


const info_individuales = {
  title: 'LETRAS',
  subtitle: 'INDIVIDUALES 3D',
  serviceList: [
    'Acrílico',
    'Aluminio',
	'Madera',
	'Acero Inox',
	'Letras Publicitarias',
	'Letras Luminosas'

  ],
  imgList: [
    './static/img/lumino1.jpg',
    './static/img/lumino2.jpg',
    './static/img/lumino3.jpg',
    './static/img/lumino4.jpg'
  ]
}	


const info_neon = {
  title: 'NEÓN',
  subtitle: '',
  serviceList: [
    'Nacional',
    'Importado',
	'Anuncios de Neón'

  ],
  imgList: [
    './static/img/neon1.jpg',
    './static/img/neon2.jpg',
    './static/img/neon3.jpg'
  ]
}	


const info_aluminio = {
  title: 'PANEL',
  subtitle: 'DE ALUMINIO',
  serviceList: [
    'Fachadas',
    'Anuncios',
	'Muros',
	'Totem'

  ],
  imgList: [
    './static/img/aluminio1.jpg',
    './static/img/aluminio2.jpg',
    './static/img/aluminio3.jpg'
  ]
}	


const info_senalizacion = {
  title: 'SEÑALIZACIONES',
  subtitle: '',
  serviceList: [
    'Exteriores',
    'Neón',
	'Leds',
	'Señalétia Corporativa'

  ],
  imgList: [
    './static/img/sena1.jpg',
    './static/img/sena2.jpg',
    './static/img/sena3.jpg'
  ]
}	


const info_velaria = {
  title: 'VELARIAS',
  subtitle: '',
  serviceList: [
    'Diferentes tipos de lonaria',
    'Estructura a diseño',
	'Diferentes porcentajes de protección solar'

  ],
  imgList: [
    './static/img/vela1.jpg',
    './static/img/vela2.jpg',
    './static/img/vela3.jpg'
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
          <Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info_luminosos} />
        </Grid>
        <Grid item xs={12} sm={6}>
			<Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info_espectaculares} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info_carretero} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info_individuales} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info_neon} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info_aluminio} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info_senalizacion} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info_velaria} />
        </Grid>
      </Grid>
    </div>
	)
}

export default ServicesList;
