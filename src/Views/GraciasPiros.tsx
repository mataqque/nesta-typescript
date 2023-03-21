import React, { Component } from 'react';

export default class GraciasPiros extends Component {
	componentDidMount() {
		const phone = new URLSearchParams(window.location.search).get('seller_phone');
		if (phone) {
			const wspbtn = document.querySelector('#wsp');
			//@ts-ignore
			wspbtn.setAttribute('href', 'https://wa.me/51' + phone + '?text=Hola,%20quiero%20más%20información%20sobre%20Nesta%20Piros.');
			//@ts-ignore
			wspbtn.style.display = 'flex';
		} else {
			//@ts-ignore
			document.querySelector('#wsp').style.display = 'none';
		}
	}
	render() {
		return (
			<section className='section-gracias'>
				<div className='bgImage' style={{ backgroundImage: `url(${require('../Assets/images/gracias/gracias-fondo.jpg')})` }} />
				<div className='m-auto d-flex justify-content-center align-items-center h-100 content-text'>
					<h1>¡Mensaje Enviado!</h1>
					<h4>Gracias por solicitar información sobre Nesta.</h4>
					<br />
					<div className='w-100 d-flex justify-content-center align-items-center content-buttons'>
						<a href='https://nestacosapi.grupolar.pe/'>Volver</a>
						<a href='#' target='_blank' id='wsp' className='ml-5'>
							<img src={require('../Assets/images/whatsapp.svg').default} style={{ width: 25 }} className='img img-fluid mr-2' /> Hablar con un asesor
						</a>
					</div>
				</div>
			</section>
		);
	}
}
