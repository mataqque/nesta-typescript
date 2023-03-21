import React, { Component } from 'react';
import { WebLayout } from '../layout/WebLayout';
import MediaQuery from 'react-responsive';
import { Banner } from '../components/LandingTerra/Banner';
import { AreasExclusivas, Tipologias, Formulario } from '../components/LandingPiros';
import { landingPiros } from './resources/landing.js';
// import WebBannerLandingPiros from "Components/LandingIntriga/WebBannerLandingPiros"
// import MovilBannerLandingPiros from "Components/LandingIntriga/MovilBannerLandingPiros"

export default class LandingPiros extends Component {
	render() {
		return (
			<div className='landing-piros'>
				<WebLayout classPage='page-landing-piros' title='Proyecto Nesta &#8211; Departamentos en Jesús María &#8211; Beneficios Bono Verde'>
					<Banner>
						{landingPiros.map((fill: any, index: any) => (
							<div className={'content-image ' + fill.class} key={index}>
								<MediaQuery query='(min-width: 768px)'>
									<div className='image' style={{ backgroundImage: `url(${fill.sliderWeb})` }}>
										{/* <WebBannerLandingPiros /> */}
									</div>
								</MediaQuery>
								<MediaQuery query='(max-width: 767px)'>
									<div className='image' style={{ backgroundImage: `url(${fill.sliderMovil})` }}>
										{/* <MovilBannerLandingPiros /> */}
									</div>
								</MediaQuery>
							</div>
						))}
					</Banner>
					<section className='section section-contenido'>
						<div className='container'>
							<div className=''>
								<div className='row'>
									<div className='col-sm-12 col-md-12 col-lg-6'>
										<Tipologias />
									</div>
									<div className='col-sm-12 col-md-12 col-lg-6 section'>
										<div className='m-auto titleImg' style={{ backgroundImage: `url(${require('../Assets/images/landing/piros/title-cotiza.png')})` }} />
										<br />
										<Formulario />
									</div>
								</div>
							</div>
						</div>
					</section>
					<AreasExclusivas />
					<div className='copyright pt-3 pb-3 text-center'>Copyright © 2019 Proyecto Nesta. Todos los derechos reservados.</div>
				</WebLayout>
			</div>
		);
	}
}
