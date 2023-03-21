import React, { Component } from 'react';
import IMGTitle from '../../Assets/images/areas-sociales/areas-sociales.svg?url';
import titlePaloma1 from '../../Assets/images/dobleacceso/paloma1.png';
import titlePaloma2 from '../../Assets/images/dobleacceso/paloma2.png';
import IMG1 from '../../Assets/images/dobleacceso/compress-img1.webp';
import IMG2 from '../../Assets/images/dobleacceso/compress-img2.webp';
import IMGVirtualExperience from '../../Assets/images/multimedia/virtualExperience.png';
import IMGVirtualExperience3d from '../../Assets/images/multimedia/virtualExperience3d.png';

export class Recorrido extends Component {
	render() {
		return (
			<section className='section section-dobleacceso section-tramado bgImg'>
				<div className='topPart' />
				<div className='p-relative'>
					<div className='headerInvisible' id='headerInvisible' />
					<div className='contain'>
						<div className='contentImgTitle'>
							<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white'>
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma1})` }} />
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma2})` }} />
								<span translate='no' className='geomanist-light fsize-1-5vw'>
									<span className='geomanist-bold fsize-2vw'>Recorrido virtual</span>
								</span>
							</div>
						</div>
						<div className='contentImages'>
							<div className='myImage'>
								<span className='title-virtualExperience'>Depa de 2 Dorms</span>
								<a href='https://360.nerdstudio.pe/recorridovirtual/cosapilar/nesta/index.htm' target='_blank'>
									<div className='image' style={{ backgroundImage: `url(${IMGVirtualExperience})` }}></div>
								</a>
								{/* <span translate="no">*El doble acceso del proyecto Nesta se otorgará al culminar el mismo en su totalidad.</span> */}
							</div>
							<div className='myImage'>
								<span className='title-virtualExperience'>Depa de 3 Dorms</span>
								<a href='https://gvrestate.com/gvre/GrupoLar/Nesta3D/' target='_blank'>
									<div className='image' style={{ backgroundImage: `url(${IMGVirtualExperience3d})` }}></div>
								</a>
								{/* <span translate="no">*El doble acceso del proyecto Nesta se otorgará al culminar el mismo en su totalidad.</span> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
