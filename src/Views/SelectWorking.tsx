import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import titlePaloma1 from '../Assets/images/dobleacceso/paloma1.png';
import titlePaloma2 from '../Assets/images/dobleacceso/paloma2.png';
import '../Assets/scss/pages/workingprogress.scss';
import { WebLayout } from '../layout/WebLayout';
export default class SelectWorking extends Component {
	render() {
		return (
			<WebLayout classPage='page-workingprogress' title='Avance de obra &#8211; Proyecto Nesta'>
				<div className='headerInvisible' id='headerInvisible' />
				<div className='contain'>
					<section className='section-workingprogress list section-tramado pb-5 fadeIn animated slow'>
						<div className='contentImgTitle'>
							<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white' title='Nuestros atributos'>
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma1})` }} />
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma2})` }} />
								<span translate='no' className='geomanist-light fsize-1-5vw' style={{ lineHeight: '1em' }}>
									<span className='geomanist-bold fsize-2vw'>Avance de obra</span>
								</span>
							</div>
						</div>
						<div className='content-select-workingprogress d-flex justify-content-center w-90' style={{ margin: 'auto', color: '#989899' }}>
							<Link to='/avance-de-obra/terra' className='selectable --terra'>
								<div className='title text-uppercase text-center bg_terra_color'>¡EN CONSTRUCCIÓN!</div>
								<div className='content-logo bg_terra_color'>
									<img src={require('../Assets/images/workingprogress/logo-terra.png')} className='img img-fluid' loading='lazy' />
								</div>
							</Link>
							<Link to={'/avance-de-obra/piros'} className='selectable --piros ml-4'>
								<div className='title text-uppercase text-center bg_piros_color'>¡Entrega inmediata!</div>
								<div className='content-logo bg_piros_color'>
									<img src={require('../Assets/images/workingprogress/logo-piros.png')} className='img img-fluid' loading='lazy' />
								</div>
							</Link>
							<a className='selectable --ventos ml-4'>
								<div className='title text-uppercase text-center bg_ventos_color'>100% vendido</div>
								<div className='content-logo bg_ventos_color'>
									<img src={require('../Assets/images/workingprogress/logo-ventos.png')} className='img img-fluid' loading='lazy' />
								</div>
							</a>
							<a className='selectable --aqua ml-4 mr-4'>
								<div className='title text-uppercase text-center bg_aqua_color'>100% vendido</div>
								<div className='content-logo bg_aqua_color'>
									<img src={require('../Assets/images/workingprogress/logo-aqua.png')} className='img img-fluid' />
								</div>
							</a>
							<a className='selectable --platinum'>
								<div className='title text-uppercase text-center bg_platinum_color'>100% vendido</div>
								<div className='content-logo bg_platinum_color'>
									<img src={require('../Assets/images/workingprogress/logo-platinum.png')} className='img img-fluid' />
								</div>
							</a>
						</div>
					</section>
				</div>
			</WebLayout>
		);
	}
}
