import React from 'react';
import ServicesDetails from './../../generals/servicesDetails/ServicesDetails';

const info = [{
  link: 'LUMINOSOS',
  title: 'ANUNCIOS LUMINOSOS',
  description:
    <div className="description-container">
      <div className="description-text">Diseñado y fabricado de acuerdo a las necesidades especificas del cliente.</div>
      <div className="description-text">Estructurado con ptr y ángulo.</div>
      <div className="description-text">Pantalla de lona traslucida o acrílico, decorada en inyección de tinta o recorte de vinil.</div>
      <div className="description-text">Sistema de iluminación con lámparas de leds y balastro electrónico.</div>
      <ul>
          <li className="description-text">Tipo Nube</li>
          <li className="description-text">Tipo Paleta</li>
          <li className="description-text">Una o Dos vistas</li>
      </ul>
    </div>,
  gallery: [
    {
		src: "/static/img/luminosos/unaVista/unavista1.jpg",
        thumbnail: "/static/img/luminosos/unaVista/unavista1.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/luminosos/nube/nube1.jpg",
		thumbnail: "/static/img/luminosos/nube/nube1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/luminosos/nube/nube2.jpg",
		thumbnail: "/static/img/luminosos/nube/nube2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/luminosos/nube/nube3.jpg",
		thumbnail: "/static/img/luminosos/nube/nube3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/luminosos/paleta/paleta1.png",
		thumbnail: "/static/img/luminosos/paleta/paleta1.png",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/luminosos/paleta/paleta2.jpg",
		thumbnail: "/static/img/luminosos/paleta/paleta2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
      ]
},
{
  link: 'ESPECTACULARES',
  title: 'ANUNCIOS ESPECTACULARES',
  description:
    <div className="description-container">
      <div className="description-text">Pantalla: fabricada de ángulo, para formar torres y dar forma a la pantalla, según la medida que sea requerida por el cliente</div>
      <div className="description-text">Tubo flauta con placa de acero para recibir la pantalla</div>
      <div className="description-text">Tubo Mástil según especificaciones de anuncio</div>
      <div className="description-text">Cimentación de acuerdo a peso y dimensiones de anuncio</div>
    </div>,
  gallery: [
    {
		src: "/static/img/espectaculares/mastil/mastil1.jpg",
        thumbnail: "/static/img/espectaculares/mastil/mastil1.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/espectaculares/mastil/mastil2.jpg",
		thumbnail: "/static/img/espectaculares/mastil/mastil2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/espectaculares/mastil/mastil3.jpg",
		thumbnail: "/static/img/espectaculares/mastil/mastil3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/espectaculares/mastil/mastil4.jpg",
		thumbnail: "/static/img/espectaculares/mastil/mastil4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/espectaculares/mastil/mastil5.jpg",
		thumbnail: "/static/img/espectaculares/mastil/mastil5.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/espectaculares/mastil/mastil6.jpg",
		thumbnail: "/static/img/espectaculares/mastil/mastil6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
	{
		src: "/static/img/espectaculares/mastil/volumetrico/volum1.jpg",
		thumbnail: "/static/img/espectaculares/volumetrico/volum1.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 320,
    },
	{
        src: "/static/img/espectaculares/mastil/mastil7.jpg",
        thumbnail: "/static/img/espectaculares/mastil/mastil7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
	{
        src: "/static/img/espectaculares/mastil/mastil8.jpg",
        thumbnail: "/static/img/espectaculares/mastil/mastil8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
	{
        src: "/static/img/espectaculares/mastil/mastil9.jpg",
        thumbnail: "/static/img/espectaculares/mastil/mastil9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
	{
		src: "/static/img/espectaculares/mastil/volumetrico/volum2.jpg",
		thumbnail: "/static/img/espectaculares/volumetrico/volum2.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 320,
    },
	{
        src: "/static/img/espectaculares/mastil/mastil10.jpg",
        thumbnail: "/static/img/espectaculares/mastil/mastil10.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
	{
        src: "/static/img/espectaculares/mastil/mastil11.jpg",
        thumbnail: "/static/img/espectaculares/mastil/mastil11.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
	{
        src: "/static/img/espectaculares/mastil/mastil12.jpg",
        thumbnail: "/static/img/espectaculares/mastil/mastil12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
	{
		src: "/static/img/espectaculares/mastil/volumetrico/volum3.jpg",
		thumbnail: "/static/img/espectaculares/volumetrico/volum3.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 320,
    },
      ]
},
{
  link: 'TIPO CARRETERO',
  title: 'ANUNCIOS TIPO CARRETERO',
  description:
    <div className="description-container">
      <div className="description-text">Pantalla fabricada de lamina, rotulada con vinil reflejante grado ingeniería, medidas y formato de acuerdo a requerimientos</div>
    </div>,
  gallery: [
    {
		src: "/static/img/carretero/carr1.jpg",
        thumbnail: "/static/img/carretero/carr1.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/carretero/carr2.jpg",
		thumbnail: "/static/img/carretero/carr2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/carretero/carr3.jpg",
		thumbnail: "/static/img/carretero/carr3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/carretero/carr4.jpg",
		thumbnail: "/static/img/carretero/carr4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
      ]
},
{
  link: 'INDIVIDUALES 3D',
  title: 'LETRAS INDIVIDUALES 3D',
  description:
    <div className="description-container">
      <div className="description-text">Fabricadas con la tipografía y en la medida de su preferencia, con sistema de iluminación a base de leds en el color que le de la visibilidad adecuada a su negocio</div>
      <div className="description-text">Estructurado con ptr y ángulo.</div>
      <ul>
          <li className="description-text">Acero Inoxidable</li>
          <li className="description-text">Aluminio</li>
          <li className="description-text">Acrílico</li>
          <li className="description-text">Etc...</li>
      </ul>
    </div>,
  gallery: [
    {
		src: "/static/img/individuales/indiv1.jpeg",
        thumbnail: "/static/img/individuales/indiv1.jpeg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/individuales/indiv2.jpg",
		thumbnail: "/static/img/individuales/indiv2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/individuales/indiv3.jpg",
		thumbnail: "/static/img/individuales/indiv3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/individuales/indiv4.jpg",
		thumbnail: "/static/img/individuales/indiv4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/individuales/indiv5.jpg",
		thumbnail: "/static/img/individuales/indiv5.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/individuales/indiv6.jpg",
		thumbnail: "/static/img/individuales/indiv6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/individuales/indiv7.jpg",
		thumbnail: "/static/img/individuales/indiv7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/individuales/indiv8.jpg",
		thumbnail: "/static/img/individuales/indiv8.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/individuales/indiv9.jpg",
		thumbnail: "/static/img/individuales/indiv9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/individuales/indiv10.jpg",
		thumbnail: "/static/img/individuales/indiv10.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/individuales/indiv11.jpg",
		thumbnail: "/static/img/individuales/indiv11.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/individuales/indiv12.jpg",
		thumbnail: "/static/img/individuales/indiv12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/individuales/indiv13.jpg",
		thumbnail: "/static/img/individuales/indiv13.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/individuales/indiv14.jpg",
		thumbnail: "/static/img/individuales/indiv14.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/individuales/indiv15.png",
		thumbnail: "/static/img/individuales/indiv15.png",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/individuales/indiv16.jpg",
		thumbnail: "/static/img/individuales/indiv16.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/individuales/indiv17.jpg",
		thumbnail: "/static/img/individuales/indiv17.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },

      ]
},
{
  link: 'NEON',
  title: 'NEON',
  description:
    <div className="description-container">
      <div className="description-text">El tubo de Gas Neon le da un toque retro a tu negocio, con colores llamativos, su fabricación es artesanal parecido al vidrio soplado</div>
      <div className="description-text">Los colores del Gas Neon son los del arcoíris</div>
      <div className="description-text">Contamos con tubo de Gas Neon nacional e importado</div>
    </div>,
  gallery: [
    {
		src: "/static/img/neon/neon1.jpg",
		thumbnail: "/static/img/neon/neon1.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/neon/neon2.jpg",
		thumbnail: "/static/img/neon/neon2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/neon/neon3.jpg",
		thumbnail: "/static/img/neon/neon3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/neon/neon4.jpg",
		thumbnail: "/static/img/neon/neon4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/neon/neon5.jpg",
		thumbnail: "/static/img/neon/neon5.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/neon/neon6.jpg",
		thumbnail: "/static/img/neon/neon6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
    {
		src: "/static/img/neon/neon7.jpg",
		thumbnail: "/static/img/neon/neon7.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/neon/neon8.jpg",
		thumbnail: "/static/img/neon/neon8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/neon/neon9.jpg",
		thumbnail: "/static/img/neon/neon9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
      ]
},
{
  link: 'DE ALUMINIO',
  title: 'PANEL DE ALUMINIO',
  description:
    <div className="description-container">
      <b className="description-title">PANEL DE ALUMINIO</b>
      <div className="description-text">Utilizado para recubrir fachadas, para fabricación de anuncios tipo Totem ect...</div>
      <div className="description-text">Material muy recomendable por su durabilidad</div>
      <div className="description-text">No requiere manteamiento</div>
      <div className="description-text">Se cuenta con una amplia gama de colores</div>
      <b className="description-title">TIPO TOTEM</b>
      <div className="description-text">Anuncio emblemático ideal para centros comerciales, grupo de servicios médicos o grupo de prestadores de servicios, ya que funcionan como directorio</div>
      <div className="description-text">Se fabrican en diferentes materiales, y dimensiones de acuerdo al requerimiento publicitario</div>
    </div>,
  gallery: [
    {
		src: "/static/img/aluminio/aluminio1.jpg",
        thumbnail: "/static/img/aluminio/aluminio1.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/aluminio/aluminio2.jpg",
		thumbnail: "/static/img/aluminio/aluminio2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/aluminio/aluminio3.jpg",
		thumbnail: "/static/img/aluminio/aluminio3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/aluminio/aluminio4.jpg",
		thumbnail: "/static/img/aluminio/aluminio4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/aluminio/aluminio5.jpg",
		thumbnail: "/static/img/aluminio/aluminio5.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/aluminio/aluminio6.jpg",
		thumbnail: "/static/img/aluminio/aluminio6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
    {
		src: "/static/img/aluminio/aluminio7.jpg",
        thumbnail: "/static/img/aluminio/aluminio7.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/aluminio/aluminio8.jpg",
		thumbnail: "/static/img/aluminio/aluminio8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/aluminio/aluminio9.jpg",
		thumbnail: "/static/img/aluminio/aluminio9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/aluminio/aluminio10.jpg",
		thumbnail: "/static/img/aluminio/aluminio10.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/aluminio/aluminio11.jpg",
		thumbnail: "/static/img/aluminio/aluminio11.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/aluminio/aluminio12.jpg",
		thumbnail: "/static/img/aluminio/aluminio12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
    {
		src: "/static/img/aluminio/aluminio13.jpg",
        thumbnail: "/static/img/aluminio/aluminio13.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/aluminio/totem/totem1.jpg",
		thumbnail: "/static/img/aluminio/totem/totem1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/aluminio/totem/totem2.jpg",
		thumbnail: "/static/img/aluminio/totem/totem2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/aluminio/totem/totem3.jpg",
		thumbnail: "/static/img/aluminio/totem/totem3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/aluminio/totem/totem4.jpg",
		thumbnail: "/static/img/aluminio/totem/totem4.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/aluminio/totem/totem5.jpg",
		thumbnail: "/static/img/aluminio/totem/totem5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
      ]
},
{
  link: 'SENALETICA',
  title: 'SEÑALIZACIONES',
  description:
    <div className="description-container">
      <div className="description-text">Diseñado y fabricado de acuerdo a las necesidades especificas del cliente.</div>
      <div className="description-text">Estructurado con ptr y ángulo.</div>
      <div className="description-text">Pantalla de lona traslucida o acrílico, decorada en inyección de tinta o recorte de vinil.</div>
      <div className="description-text">Sistema de iluminación con lámparas de leds y balastro electrónico.</div>
      <ul>
          <li className="description-text">Tipo Nube</li>
          <li className="description-text">Tipo Paleta</li>
          <li className="description-text">Una o Dos vistas</li>
      </ul>
    </div>,
  gallery: [
    {
		src: "/static/img/senaletica/exteriores/exterior1.jpg",
        thumbnail: "/static/img/senaletica/exteriores/exterior1.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/senaletica/exteriores/exterior2.jpg",
		thumbnail: "/static/img/senaletica/exteriores/exterior2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/senaletica/exteriores/exterior3.jpg",
		thumbnail: "/static/img/senaletica/exteriores/exterior3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/senaletica/exteriores/exterior4.jpg",
		thumbnail: "/static/img/senaletica/exteriores/exterior4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/senaletica/exteriores/exterior5.jpg",
		thumbnail: "/static/img/senaletica/exteriores/exterior5.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/senaletica/exteriores/exterior6.jpg",
		thumbnail: "/static/img/senaletica/exteriores/exterior6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
    {
		src: "/static/img/senaletica/exteriores/exterior7.jpg",
        thumbnail: "/static/img/senaletica/exteriores/exterior7.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/senaletica/exteriores/exterior8.jpg",
		thumbnail: "/static/img/senaletica/exteriores/exterior8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/senaletica/exteriores/exterior9.jpg",
		thumbnail: "/static/img/senaletica/exteriores/exterior9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/senaletica/interiores/interior1.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/senaletica/interiores/interior2.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior2.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/senaletica/interiores/interior3.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
    {
		src: "/static/img/senaletica/interiores/interior4.jpg",
        thumbnail: "/static/img/senaletica/interiores/interior4.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/senaletica/interiores/interior5.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/senaletica/interiores/interior6.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/senaletica/interiores/interior7.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/senaletica/interiores/interior8.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior8.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/senaletica/interiores/interior9.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
    {
		src: "/static/img/senaletica/interiores/interior10.jpg",
        thumbnail: "/static/img/senaletica/interiores/interior10.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/senaletica/interiores/interior11.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior11.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/senaletica/interiores/interior12.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/senaletica/interiores/interior13.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior13.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/senaletica/interiores/interior14.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior14.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/senaletica/interiores/interior15.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior15.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
    {
		src: "/static/img/senaletica/interiores/interior16.jpg",
        thumbnail: "/static/img/senaletica/interiores/interior16.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/senaletica/interiores/interior17.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior17.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/senaletica/interiores/interior18.jpg",
		thumbnail: "/static/img/senaletica/interiores/interior18.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/senaletica/neonLed/nled1.jpg",
		thumbnail: "/static/img/senaletica/neonLed/nled1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/senaletica/neonLed/nled2.jpg",
		thumbnail: "/static/img/senaletica/neonLed/nled2.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/senaletica/neonLed/nled3.jpg",
		thumbnail: "/static/img/senaletica/neonLed/nled3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
    },
    {
		src: "/static/img/senaletica/neonLed/nled4.jpg",
		thumbnail: "/static/img/senaletica/neonLed/nled4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/senaletica/neonLed/nled5.jpg",
		thumbnail: "/static/img/senaletica/neonLed/nled5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
      ]
},
{
  link: 'VELARIAS',
  title: 'VELARIAS',
  description:
    <div className="description-container">
      <div className="description-text">Diseñado y fabricado de acuerdo a las necesidades especificas del cliente.</div>
      <div className="description-text">Estructurado con ptr y ángulo.</div>
      <div className="description-text">Pantalla de lona traslucida o acrílico, decorada en inyección de tinta o recorte de vinil.</div>
      <div className="description-text">Sistema de iluminación con lámparas de leds y balastro electrónico.</div>
      <ul>
          <li className="description-text">Tipo Nube</li>
          <li className="description-text">Tipo Paleta</li>
          <li className="description-text">Una o Dos vistas</li>
      </ul>
    </div>,
  gallery: [
    {
		src: "/static/img/velaria/velaria1.jpg",
        thumbnail: "/static/img/velaria/velaria1.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
    },
    {
		src: "/static/img/velaria/velaria2.jpeg",
		thumbnail: "/static/img/velaria/velaria2.jpeg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
    },
    {
		src: "/static/img/velaria/velaria3.jpg",
		thumbnail: "/static/img/velaria/velaria3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
    },
    {
		src: "/static/img/velaria/velaria4.jpg",
		thumbnail: "/static/img/velaria/velaria4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
    },
    {
		src: "/static/img/velaria/velaria5.jpg",
		thumbnail: "/static/img/velaria/velaria5.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
    },
      ]
},
];

class Services extends React.Component {

  render() {
    return (
      <div>
        <ServicesDetails data={info.filter(item => item.link === this.props.match.params.service)[0]}/>
      </div>
    );
  }
}

export default Services;
