import React, { Component } from 'react';
import { StickyContact } from '../layout/StickyContact';
import MediaQuery from 'react-responsive';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
import '../Assets/scss/pages/fases.scss';
import { WebLayout } from '../layout/WebLayout';
import IMGEstado from '../Assets/images/fases/piros/estado.png';
import IMGTitle1 from '../Assets/images/fases/piros/title1.svg?url';
import titlePaloma1 from '../Assets/images/dobleacceso/paloma1.png';
import titlePaloma2 from '../Assets/images/dobleacceso/paloma2.png';
import bgNameLeft from '../Assets/images/areas-sociales/bgName.png';
import bgNameRight from '../Assets/images/departamentos/bgName.png';
import topTitle from '../Assets/images/fases/piros/headerTitle.svg?url';
import { Intersection } from '../components/Others';

import { dataDepartamentosIntriga } from './resources/departamentos.js';
import { areasComunesIntriga } from './resources/areas_comunes.js';

import { Contact } from '../components/common/Contact';
import { flats } from './resources/flat_types.js';

//@ts-ignore
const $ = window.jQuery;

const options = {
	items: 1,
	nav: true,
	dots: false,
	singleItem: true,
	navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
	loop: true,
	rewind: true,
	autoplay: false,
};

const events = {
	onInitialized: function (event: any) {
		let element = $(event.target).closest('.contentSlider');
		let name = $(event.target).find('.owl-item.active .img-name').attr('title');
		$(element).find('.name-carousel span').text(name);
	},
	onTranslated: function (event: any) {
		let element = $(event.target).closest('.contentSlider');
		let name = $(event.target).find('.owl-item.active .img-name').attr('title');
		$(element).find('.name-carousel span').text(name);
	},
};

export default class Fases extends Component<any, any> {
	constructor(props: any) {
		super(props);
		console.log('this:', this.props);
	}
	componentDidMount = () => {
		this.fnCarouselAwait();
		let top = document.querySelector('.superior-top');
		//@ts-ignore
		if (top) top.style = 'display:none';

		if (window.location.hash.includes('Planos')) {
			let load = setInterval(() => {
				//@ts-ignore
				window.scrollTo(0, document.querySelector('#Planos').offsetTop);
				clearInterval(load);
			}, 100);
		}
	};

	fnCarouselAwait = () => {};
	render() {
		return (
			<WebLayout classPage='page-fases' title='Terra &#8211; Proyecto Nesta'>
				<StickyContact />
				<div className='headerInvisible' id='headerInvisible' />
				<div className='contain'>
					<div className={`section-fases section-tramado fadeIn animated slow ${this.props.data.class}`}>
						<section className='section-piros'>
							<div className='content_estado' style={{ backgroundImage: `url(${topTitle})` }}>
								<h2 className='text-fase-1'>
									TERRA FASE 1 <span className='geomanist-bold'>EN CONSTRUCCIÓN</span>
								</h2>
								<h2 className='text-fase-2'>
									TERRA FASE 2 <span className='geomanist-bold'>EN PREVENTA</span>
								</h2>
							</div>
							<div className='container-fluid pr-5 pl-5'>
								<div className='row content-vista-espectacular'>
									<div className='col-md-7 img-vista-espectacular'>
										<MediaQuery query='(min-width: 541px)'>
											{/* @ts-ignore */}
											<img src={this.props.data.imagenVista} className='img img-fluid' alt='Vista espectacular Jesús María' />
										</MediaQuery>
										<MediaQuery query='(max-width: 540px)'>
											{/* @ts-ignore */}
											<img src={this.props.data.imagenVistaMovil} className='img img-fluid' alt='Vista espectacular Jesús María' loading='lazy' />
										</MediaQuery>
									</div>
									<div className='col-md-5 d-flex justify-content-center align-items-center flex-column text-center geomanist-regular c-second'>
										<div className='title-vista-espectacular'>
											{/* @ts-ignore */}
											<div dangerouslySetInnerHTML={{ __html: this.props.data.title }}></div>
											<img src={require('../Assets/images/paloma-naranja-right.png')} className='img img-fluid img-paloma-naranja-right' loading='lazy' />
										</div>
										{/* @ts-ignore */}
										<div className='subtitle-vista-espectacular' dangerouslySetInnerHTML={{ __html: this.props.data.subtitle }}></div>
										<div className='subtitle-vista-espectacular text-fase-2'>
											<img className='best-place' src={require('../Assets/images/fases/best-tu-place.png')} loading='lazy'></img>
										</div>
									</div>
								</div>

								<div className='row content-render geomanist-regular c-second'>
									<img className='text-fase-2 background-fase-2' src={require('../Assets/images/fases/background-fase-2.png')} loading='lazy'></img>
									<div className='col-md-6 atributos-col'>
										<div className='mt-1 content-atributos d-flex flex-wrap justify-content-center'>
											<div className='title-render text-center'>
												Vive en <span className='badassmoon'>Terra</span>
											</div>
											<div className='subtitle-render text-center'>
												Y goza de un <span className='geomanist-bold'>panorama de ensueño</span>
											</div>
											{/* @ts-ignore */}
											{this.props.data.atributos.map(item => {
												return (
													<div className='atributo d-flex align-items-center'>
														<div className='icon svg svg-contain bg-primary text-fase-1' style={{ WebkitMaskImage: `url(${item.icon})` }} />
														<div className='icon svg svg-contain bg-primary text-fase-2' style={{ backgroundImage: `url(${item.icon})` }} />
														<div className='text-atributo'>{item.title}</div>
													</div>
												);
											})}

											<div className='img-financiado'>
												{/* @ts-ignore */}
												<img src={this.props.data.banco} className='img img-fluid' />
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='img-render'>
											<img src={this.props.data.render} className='img img-fluid' />
										</div>
									</div>
								</div>
							</div>
						</section>
						<Intersection class={this.props.data.class} intersection={this.props.data.intersection} />
						<section className='section-select-modelo pt-4 pb-5' id='Planos'>
							<img className='text-fase-2 img-background-flower' src={require('../Assets/images/fases/compress-background-flower.webp')} alt='background flowers' loading='lazy'></img>
							<div className='contentImgTitle mt-5'>
								<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white' style={{ backgroundImage: `url(${IMGTitle1})` }}>
									<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma1})` }} />
									<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma2})` }} />
									<span translate='no' className='geomanist-light fsize-2-3vw'>
										¡Elige tu <span className='geomanist-bold'>modelo!</span>
									</span>
								</div>
							</div>
							<div className='content-60'>
								<div className='row lightGallery mt-5'>
									{this.props.data.fases.map((flat: any, index: any) => (
										<div className='Coltipologia mt-3 col-md-4 col-xs-6 col-sm-6'>
											<div className='card border-0'>
												<div
													// @ts-ignore
													href={flat.image}
													data-src={flat.image}
													className='card-image img-gallery shadow bgImg bgCover w-100 cursor-zoom'
													style={{ backgroundImage: `url(${flat.image})`, paddingTop: '100%' }}
												/>
												<span translate='no' className='mt-2'>
													{flat.rooms_amount} ({flat.area})
												</span>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>
						<section className='section-areas-comunes pt-4 pb-5'>
							<div className='contentImgTitle'>
								<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white' style={{ backgroundImage: `url(${IMGTitle1})` }}>
									<div className='paloma-bird paloma-bird-1' style={{ backgroundImage: `url(${titlePaloma1})` }} />
									<span translate='no' className='geomanist-light fsize-2-3vw title-2'>
										Las <span className='geomanist-bold'>áreas comunes </span>
										<br className='text-fase-1' />
										que mereces!
									</span>
								</div>
							</div>
							<div className='content-70'>
								<div className='row'>
									<div className='col-md-12'>
										<div className='contentSlider carousel-marco'>
											<div className='name-carousel' style={{ backgroundImage: `url(${bgNameLeft})` }}>
												<span translate='no'></span>
											</div>
											<OwlCarousel
												ref={'car'}
												options={options}
												events={events}
												className='owl-carousel carousel-marco owl-theme carousel-normal lightGallery content-carousel owl-loaded owl-drag'
											>
												{areasComunesIntriga.map((fill, index) => (
													<div
														// @ts-ignore
														href={fill.image}
														className='img-gallery w-100 bgImg bgCover cursor-zoom'
														key={index}
														data-exthumbimage={fill.image}
														data-src={fill.image}
														data-sub-html={fill.name}
													>
														<img className='tl-image img-name linkContentImage w-100 bgImg bgCover' title={fill.name} src={fill.imageCompress} />
													</div>
												))}
											</OwlCarousel>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className='section-fotos-departamento pt-4 pb-5'>
							<div className='contentImgTitle'>
								<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white' style={{ backgroundImage: `url(${IMGTitle1})` }}>
									<div className='paloma-bird' />
									<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma2})` }} />
									<span translate='no' className='geomanist-light fsize-2-3vw'>
										Conoce tu <br className='text-fase-1' /> <span className='geomanist-bold'>departamento</span>
									</span>
								</div>
							</div>
							<div className='content-70'>
								<div className='row'>
									<div className='col-md-12'>
										<div className='contentSlider carousel-marco'>
											<div className='name-carousel right' style={{ backgroundImage: `url(${bgNameRight})` }}>
												<span translate='no'></span>
											</div>
											<OwlCarousel
												ref={'car'}
												options={options}
												events={events}
												className='owl-carousel carousel-marco owl-theme carousel-normal lightGallery content-carousel owl-loaded owl-drag'
											>
												{dataDepartamentosIntriga.map((fill, index) => (
													<div
														// @ts-ignore
														href={fill.image}
														className='img-gallery w-100 bgImg bgCover cursor-zoom'
														key={index}
														data-exthumbimage={fill.image}
														data-sub-html={fill.name}
														data-src={fill.image}
													>
														<img className='w-100 img-name bgImg bgCover' title={fill.name} src={fill.imageCompress} />
													</div>
												))}
											</OwlCarousel>
										</div>
									</div>
								</div>
							</div>
						</section>
						<Contact modelos={true} nestaCar={false} />
						<div className='content_estado content_estado-footer text-fase-2' style={{ backgroundImage: `url(${topTitle})` }}>
							<img className='icon-car' src={require('../Assets/images/fases/iconos/car.png')}></img>
							<h2 className='text-fase-2'>
								Contamos con <span className='geomanist-bold'> estacionamientos exclusivos</span> para clientes en la Sala de Ventas.
							</h2>
						</div>
					</div>
				</div>
			</WebLayout>
		);
	}
}
