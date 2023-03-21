import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Contacto, FixedIndicators, WspButton, Banner } from '../components/LandingTerra';
import { landingData } from './resources/landing.js';
import { WebLayout } from '../layout/WebLayout.js';

export default class LandingIntriga extends Component {
	render() {
		return (
			<WebLayout classPage='page-landing' title='Proyecto Nesta &#8211; Departamentos en Jesús María &#8211; Beneficios Bono Verde'>
				<section className='scrollspy scrollspy-inicio' id='home'>
					&nbsp;
				</section>
				<Banner>
					{landingData.map((fill, index) => (
						<div className='content-image' key={index}>
							<MediaQuery query='(min-width: 768px)'>
								<div className='image' style={{ backgroundImage: `url(${fill.sliderWeb})` }}>
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
								</div>
							</MediaQuery>
							<MediaQuery query='(max-width: 767px)'>
								<div className='image' style={{ backgroundImage: `url(${fill.sliderMovil})` }}>
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
								</div>
							</MediaQuery>
						</div>
					))}
				</Banner>
				<Contacto />
				<FixedIndicators />
				<WspButton />
			</WebLayout>
		);
	}
}
