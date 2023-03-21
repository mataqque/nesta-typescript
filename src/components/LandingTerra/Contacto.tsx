import React, { Component } from 'react';
import { ContactForm } from '../common/ContactForm';

export class Contacto extends Component {
	render() {
		return (
			<section className='section section-contacto section-tramado' id='contacto'>
				<div className='linea-effect-start' />
				<div className='top-contact' style={{ backgroundImage: `url(${require('../../Assets/images/landing/contact-top.png')})` }} />
				<div className='planta' style={{ backgroundImage: `url(${require('../../Assets/images/planta.png')})` }} />
				<div className='container container-contacto'>
					<div className='row p-relative'>
						<div className='bird-green-left' style={{ backgroundImage: `url(${require('../../Assets/images/landing/bird-green-left.png')})` }} />
						<div className='col-md-12 text-center geomanist-bold title-contact'>Contáctanos</div>
						<div className='col-md-12 text-center geomanist-regular mb-4'>
							<span translate='no' className='geomanist-bold'>
								¡Inscríbete aquí!
							</span>{' '}
							Sé el primero(a) en descubrir la nueva forma de vivir en Jesús María
						</div>

						<ContactForm />
					</div>
				</div>
			</section>
		);
	}
}
