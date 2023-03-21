import React, { Component } from 'react';
import IMGTitle from 'Assets/images/areas-sociales/areas-sociales.svg';
import titlePaloma1 from 'Assets/images/dobleacceso/paloma1.png';
import titlePaloma2 from 'Assets/images/dobleacceso/paloma2.png';
import IMG1 from 'Assets/images/dobleacceso/compress-img1.webp';
import IMG2 from 'Assets/images/dobleacceso/compress-img2.webp';
import IMGVirtualExperience from 'Assets/images/multimedia/virtualExperience.png';
import IMGVirtualExperience3d from 'Assets/images/multimedia/virtualExperience3d.png';
import { Icon } from '../../components/UI/icon/icon';
import { Link } from 'react-router-dom';
import Paloma1 from 'Assets/images/atributos/paloma-atributos.png';

const logo = require('../../Assets/images/inicio/tour-360.json');
export class SectionMultimedia extends Component {
	constructor(props: any) {
		super(props);
		this.hideLoading = this.hideLoading.bind(this);
		this.state = {
			value: '',
			active: false,
			hide: false,
		};
	}
	hideLoading() {
		console.log('termino');
		this.setState({ hide: true });
	}
	render() {
		return (
			<section className='section section-multimedia section-tramado bgImg'>
				<div className='topPart' />
				<div className='p-relative'>
					<div className='headerInvisible' id='headerInvisible' />
					<div className='contain'>
						<div className='contentImgTitle'>
							<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white' title='Nuestros atributos'>
								<div className='paloma-bird' style={{ backgroundImage: `url(${Paloma1})` }} />
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma1})`, transform: 'rotateY(180deg)' }} />
								<span translate='no' className='geomanist-light fsize-1-5vw' style={{ lineHeight: '1em' }}>
									<span className='geomanist-bold fsize-2vw'>Multimedia</span>
								</span>
							</div>
						</div>
						<div className='contentImages'>
							<div className='mask-multimedia mask-multimedia-1'>
								<div className='content-card'>
									<Icon
										icon={logo}
										ref={(element: any) => {
											// @ts-ignore
											this.logo = element;
										}}
										event={this.hideLoading}
									></Icon>
									<span className='title-1'>EXPLORA NUESTRO</span>
									<span className='title-2'>Recorrido Virtual</span>
									<div className='btns'>
										<a href='https://360.nerdstudio.pe/recorridovirtual/cosapilar/nesta/index.htm' target='_blank' className='btn'>
											2 Dorms.
										</a>
										<a href='https://gvrestate.com/gvre/GrupoLar/Nesta3D/' target='_blank' className='btn'>
											3 Dorms.
										</a>
									</div>
								</div>
							</div>
							<Link to='/avance-de-obra' className='mask-multimedia mask-multimedia-2'>
								<div className='content-card content-card-2'>
									<img className='background' src={require('../../Assets/images/inicio/compress-avance-de-obra.webp')} loading='lazy'></img>
									<span className='title-1'>DESCUBRE NUESTRO</span>
									<span className='title-2'>Avance de Obra</span>
								</div>
							</Link>
							<Link to='/vive-superior' className='mask-multimedia mask-multimedia-3'>
								<div className='content-card content-card-3'>
									<img className='background' src={require('../../Assets/images/inicio/compress-vista-superior.webp')} loading='lazy'></img>
									<span className='title-1'>AHORA</span>
									<span className='title-2'>VIVE SUPERIOR</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
