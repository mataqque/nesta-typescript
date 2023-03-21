import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import IMGWsp from '../Assets/images/contacto/nesta_wsp.png';
import bgImageGracias from '../Assets/images/gracias/gracias-fondo.jpg';
import Brochure from '../Assets/pdf/Nesta.pdf';
import { WebLayout } from '../layout/WebLayout';
export default class Gracias extends Component {
	componentDidMount() {
		const phone = new URLSearchParams(window.location.search).get('seller_phone');
		if (phone) {
			const wspbtn = document.querySelector('#wsp');
			// @ts-ignore
			wspbtn.setAttribute('href', 'https://wa.me/51' + phone + '?text=Hola,%20quiero%20más%20información%20sobre%20Nesta%20Terra.');
			// @ts-ignore
			wspbtn.style.display = 'flex';
		}
	}
	render() {
		return (
			<WebLayout classPage='page-gracias' title='Gracias &#8211; Proyecto Nesta'>
				<div className='contain'>
					<div className='bgImg fullImg d-flex justify-content-center align-items-center flex-column' style={{ backgroundImage: `url(${bgImageGracias})`, backgroundSize: 'cover' }}>
						<h4 className='msgTitle text-center'>¡Mensaje Enviado!</h4>
						<p>Gracias por solicitar información de Nesta.</p>
						<div className='d-flex mt-2 content-buttons-thanks'>
							<a href='#' target='_blank' id='wsp' className='btn-nesta ml-3 outline btn-wsp' style={{ display: 'none' }}>
								<div className='wsp mr-2' style={{ backgroundImage: `url(${IMGWsp})` }} />
								Hablar con un asesor
							</a>
							<a href={Brochure} target='_blank' className='btn-nesta ml-3 outline'>
								Descargar brochure
							</a>
						</div>
						<Link to={'/'} className='c-gray underline mt-3'>
							Volver
						</Link>
					</div>
				</div>
			</WebLayout>
		);
	}
}
