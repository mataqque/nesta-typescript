import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Backing, Contacto, FixedIndicators2, WspButton, Banner, Atributos, TipologiasIntriga, AreasComunesIntriga, DepartamentosIntriga } from '../components/LandingTerra';
import { landingData } from './resources/landing.js';
import { areasComunesIntriga } from './resources/areas_comunes.js';
import { dataDepartamentosIntriga } from './resources/departamentos.js';
import { WebLayout } from '../layout/WebLayout.js';
import { Intersection } from '../components/Others';
const valueInterseccion = require('../Assets/images/fases/background-separe.png');
export default class LandingTerra extends Component {
	render() {
		return (
			<WebLayout classPage='page-landing v2' title='Proyecto Nesta &#8211; Departamentos en Jesús María &#8211; Beneficios Bono Verde'>
				<section className='scrollspy scrollspy-inicio' id='home'>
					&nbsp;
				</section>
				<Banner>
					{landingData.map((fill, index) => (
						<div className='content-image' key={index}>
							<MediaQuery query='(min-width: 768px)'>
								<div className='image' style={{ backgroundImage: `url(${fill.sliderWeb})` }}>
									{index == 4 && (
										<>
											<div className='content-marco'>
												<div className='content-title geomanist-regular'>
													El sueño de tener la <span className='geomanist-bold'>naturaleza</span> a tus
													<br /> pies está cada vez más cerca.
													<div className='paloma-right-red' style={{ backgroundImage: `url(${require('../Assets/images/landing/slider/paloma-right-red.png')})` }} />
												</div>
												<div className='content-ventana'>
													<div className='sujetador' style={{ backgroundImage: `url(${require('../Assets/images/landing/slider/especial/1.png')})` }} />
													<div className='cortina' style={{ backgroundImage: `url(${require('../Assets/images/landing/slider/especial/2.png')})` }} />
													<div className='ventana' style={{ backgroundImage: `url(${require('../Assets/images/landing/slider/especial/3.png')})` }} />
													<div className='paloma-left-yellow' style={{ backgroundImage: `url(${require('../Assets/images/landing/slider/paloma-left-yellow.png')})` }} />
												</div>
											</div>
											<div className='w-50 h-100 geomanist-regular content-atributos-slider'>
												<div className='content-text'>
													Vive frente a unos de los <span className='geomanist-bold'>parques más grandes de Lima</span>
												</div>
												<div className='content-text'>
													<span className='geomanist-bold'>Pronto</span> sentirás la tranquilidad de vivir en <span className='geomanist-bold'>Jesús María</span>
												</div>
											</div>
										</>
									)}
								</div>
							</MediaQuery>
							<MediaQuery query='(max-width: 767px)'>
								<div className='image' style={{ backgroundImage: `url(${fill.sliderMovil})` }}>
									{index == 4 && (
										<>
											<div className='content-marco'>
												<div className='content-title geomanist-regular'>
													<div className='paloma-left-yellow' style={{ backgroundImage: `url(${require('../Assets/images/landing/slider/paloma-left-yellow.png')})` }} />
													El sueño de tener la <br />
													<span className='geomanist-bold'>naturaleza</span> a tus pies está <br />
													cada vez más cerca.
													<div className='paloma-right-red' style={{ backgroundImage: `url(${require('../Assets/images/landing/slider/paloma-right-red.png')})` }} />
												</div>
												<div className='content-ventana'>
													<div className='sujetador' style={{ backgroundImage: `url(${require('../Assets/images/landing/slider/especial/1.png')})` }} />
													<div className='cortina' style={{ backgroundImage: `url(${require('../Assets/images/landing/slider/especial/2.png')})` }} />
													<div className='ventana' style={{ backgroundImage: `url(${require('../Assets/images/landing/slider/especial/3.png')})` }} />
												</div>
											</div>
											<div className='w-100 h-100 geomanist-regular content-atributos-slider'>
												<div className='content-text'>
													Vive frente a unos de los <span className='geomanist-bold'>parques más grandes de Lima</span>
												</div>
												<div className='content-text'>
													<span className='geomanist-bold'>Pronto</span> sentirás la tranquilidad de vivir en <span className='geomanist-bold'>Jesús María</span>
												</div>
											</div>
										</>
									)}
								</div>
							</MediaQuery>
						</div>
					))}
				</Banner>
				<Atributos />
				<Intersection intersection={valueInterseccion} />
				<TipologiasIntriga />
				<AreasComunesIntriga areas={areasComunesIntriga} />
				<DepartamentosIntriga depas={dataDepartamentosIntriga} />
				<Backing />
				<Contacto />
				<FixedIndicators2 />
				<WspButton />
			</WebLayout>
		);
	}
}
