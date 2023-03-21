import React, { Component } from 'react';
import BGatributos from '../../../Assets/images/inicio/background-atributos.png';
import BGatributosMovil from '../../../Assets/images/inicio/background-atributos-movil.png';
import IMGTitle from '../../../Assets/images/atributos/title.svg';
import Paloma1 from '../../../Assets/images/atributos/paloma-atributos.png';
import PalomaVerdeRight from '../../../Assets/images/paloma-green-right.png';
import LikeIcon from '../../../Assets/images/fases/iconos/like.png';
import PiscinaIcon from '../../../Assets/images/fases/iconos/piscina.png';
import LlaveIcon from '../../../Assets/images/fases/iconos/key.png';
import UbicacionIcon from '../../../Assets/images/fases/iconos/place.png';
import DestacadoIcon from '../../../Assets/images/fases/iconos/estrella.png';
import GasIcon from '../../../Assets/images/fases/iconos/medidor.png';
import perro from '../../../Assets/images/fases/iconos/perro.png';
import VistaIcon from '../../../Assets/images/fases/iconos/vista.png';
import AmplioPatio from '../../../Assets/images/fases/iconos/amplio-patio-interno.png';

export class Atributos extends Component {
	render() {
		return (
			<section className='section section-atributos' id='Atributos'>
				<picture className='background-image'>
					<source media='(min-width: 769px)' srcSet={BGatributos}></source>
					<img className='image' src={BGatributosMovil} />
				</picture>
				<div className='p-relative'>
					<div className='headerInvisible' id='headerInvisible' />
					<div className='contain'>
						<div className='contentImgTitle'>
							<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white' title='Nuestros atributos'>
								<div className='paloma-bird' style={{ backgroundImage: `url(${Paloma1})` }} />
								<span translate='no' className='geomanist-light fsize-1-5vw' style={{ lineHeight: '1em' }}>
									Nuestros
									<br />
									<span className='geomanist-bold fsize-2vw'>atributos</span>
								</span>
							</div>
						</div>
						<div className='contentAtributos'>
							<div className='atributo' title='Respaldo exitoso Fase 1, Fase 2 y Fase 3'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${LikeIcon})` }} />
								<div className='titleAtributo'>Respaldo exitoso Fase 1, Fase 2 y Fase 3</div>
							</div>
							<div className='atributo' title='Ubicación céntrica'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${UbicacionIcon})` }} />
								<div className='titleAtributo'>Ubicación céntrica</div>
							</div>
							<div className='atributo' title='Acabados de calidad'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${DestacadoIcon})` }} />
								<div className='titleAtributo'>Acabados de calidad</div>
							</div>
							<div className='atributo' title='Vista espectacular'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${AmplioPatio})` }} />
								<div className='titleAtributo'>Amplio patio interno</div>
							</div>
						</div>
						<div className='contentAtributos'>
							<div className='atributo' title='Exclusivas áreas comunes'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${PiscinaIcon})` }} />
								<div className='titleAtributo'>Exclusivas áreas comunes</div>
							</div>
							<div className='atributo' title='Doble acceso'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${LlaveIcon})` }} />
								<div className='titleAtributo'>Doble acceso</div>
							</div>
							<div className='atributo' title='Gas natural'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${GasIcon})` }} />
								<div className='titleAtributo'>Gas Natural</div>
							</div>
							<div className='atributo' title='Vigilancia las 24 horas'>
								<div className='imgAtributo' style={{ backgroundImage: `url(${perro})` }} />
								<div className='titleAtributo'>Pet friendly</div>
								<div className='paloma-bird-green-right' style={{ backgroundImage: `url(${PalomaVerdeRight})` }} />
							</div>
						</div>
					</div>
				</div>
				<div className='bottom-part' style={{ backgroundImage: `url(${require('../../../Assets/images/atributos/bottom-atributos.png')})` }} />
			</section>
		);
	}
}
