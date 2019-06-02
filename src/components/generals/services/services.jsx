import React from "react";
import Grid from '@material-ui/core/Grid';

import Service from './../service/service';
import './services.css';

const info_luminosos = {
  title: 'ANUNCIOS',
  subtitle: 'LUMINOSOS',
  col: '50%',
  serviceList: [
    'UNA VISTA',
    'DOS VISTAS',
	  'TIPO PALETA',
    'TIPO NUBE'
  ],
  imgList: [
    './static/min/alumi1.png',
    './static/min/alumi2.png',
    './static/min/alumi3.png'
  ]
}

const info_espectaculares = {
  title: 'ANUNCIOS',
  subtitle: 'ESPECTACULARES',
  col: '50%',
  serviceList: [
    'TUBO MASTIL',
    'VOLUMETRICO'
  ],
  imgList: [
    './static/min/aespec1.png',
    './static/min/aespec2.png',
    './static/min/aespec3.png',
    './static/min/aespec4.png',
    './static/min/aespec5.png'
  ]
}

const info_carretero = {
  title: 'ANUNCIOS',
  subtitle: 'TIPO CARRETERO',
  col: '50%',
  serviceList: [
    'DOBLES',
    'GRANDES',
    'CUADRADOS',
    'GRANDES',
    'MEDIANOS',
    'PEQUEÑOS'
  ],
  imgList: [
    './static/min/acarre1.png',
    './static/min/acarre2.png',
    './static/min/acarre3.png',
    './static/min/acarre4.png'
  ]
}	


const info_individuales = {
  title: 'LETRAS',
  subtitle: 'INDIVIDUALES 3D',
  col: '50%',
  serviceList: [
    'Acrílico',
    'Aluminio',
    'Madera',
    'Acero Inox',
    'Letras Publicitarias',
    'Letras Luminosas'
  ],
  imgList: [
    './static/min/lumino1.png',
    './static/min/lumino2.png',
    './static/min/lumino3.png',
    './static/min/lumino4.png'
  ]
}	


const info_neon = {
  title: 'NEÓN',
  subtitle: '',
  col: '100%',
  serviceList: [
    'Nacional',
    'Importado',
	  'Anuncios de Neón'
  ],
  imgList: [
    './static/min/neon1.png',
    './static/min/neon2.png',
    './static/min/neon3.png'
  ]
}	


const info_aluminio = {
  title: 'PANEL',
  subtitle: 'DE ALUMINIO',
  col: '50%',
  serviceList: [
    'Fachadas',
    'Anuncios',
    'Muros',
    'Totem'
  ],
  imgList: [
    './static/min/aluminio1.png',
    './static/min/aluminio2.png',
    './static/min/aluminio3.png'
  ]
}	


const info_senalizacion = {
  title: 'SEÑALIZACIONES',
  subtitle: '',
  col: '50%',
  serviceList: [
    'Exteriores',
    'Neón',
    'Leds',
    'Señalétia Corporativa'
  ],
  imgList: [
    './static/min/sena1.png',
    './static/min/sena2.png',
    './static/min/sena3.png'
  ]
}	


const info_velaria = {
  title: 'VELARIAS',
  subtitle: '',
  col: '100%',
  serviceList: [
    'Diferentes tipos de lonaria',
    'Estructura a diseño',
	  'Diferentes porcentajes de protección solar'
  ],
  imgList: [
    './static/min/vela1.png',
    './static/min/vela2.png',
    './static/min/vela3.png'
  ]
}	

const ServicesList = () => {
	return (
		<div>
      <div className="text-center my-4 text-title-section">
        nuestros servicios
      </div>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info_luminosos} />
        </Grid>
        <Grid item xs={12} sm={6}>
			<Service sliderHeight={'12em'} titleColor={'#db1cef'} info={info_espectaculares} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#346fe2'} info={info_carretero} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info_individuales} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#db1cef'} info={info_neon} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#346fe2'} info={info_aluminio} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#f9e95a'} info={info_senalizacion} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Service sliderHeight={'12em'} titleColor={'#db1cef'} info={info_velaria} />
        </Grid>
      </Grid>
    </div>
	)
}

export default ServicesList;
