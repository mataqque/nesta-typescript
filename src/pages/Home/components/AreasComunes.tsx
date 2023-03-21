import React, { Component, useEffect, useRef, useState } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
import titlePaloma from '../../../Assets/images/areas-sociales/paloma.png';
import TitleAreasSociales from '../../../Assets/images/areas-sociales/areas-sociales.svg?url';
import bgName from '../../../Assets/images/areas-sociales/bgName.png';
//@ts-ignore
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
const options = {
	items: 1,
	nav: true,
	singleItem: true,
	navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
	loop: true,
	rewind: true,
	autoplay: false,
};
import Slider from 'react-slick';
//@ts-ignore
const $ = window.jQuery;

export const AreasComunes = ({ areas = [], depas = [] }: any) => {
	console.log(depas);
	const [imagenes, setImagenes] = useState([]);
	const [typeSliderActive, setTypeSliderActive] = useState('Interiores');
	const sliderAreasComunes = useRef(null);
	const sliderInteriores = useRef(null);
	useEffect(() => {
		let array: any = [];
		areas.forEach((element: any, index: number) => {
			array.push({ src: element.image, thumb: element.image, subHtml: element.name });
		});
		setImagenes(array);
	}, []);

	const fnOpenModal = (e: any, index: number) => {};
	const changeSlider = (value: any) => {
		let sliders = document.querySelectorAll('.change-slider');
		sliders.forEach((element: any) => {
			element.classList.remove('active');
		});
		let slider = document.querySelectorAll(`.slider-${value}`);
		slider.forEach((element: any) => {
			element?.classList.add('active');
		});
	};
	const options = {
		items: 1,
		nav: true,
		singleItem: true,
		navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
		loop: true,
		rewind: true,
		autoplay: false,
		dots: false,
	};
	const events = {
		onInitialized: function (event: any) {
			let element = $(event.target).closest('.contentSlider');
			let name = $(event.target).find('.owl-item.active .image').attr('title');
			$(element).find('.name-carousel span').text(name);
		},
		onTranslated: function (event: any) {
			let element = $(event.target).closest('.contentSlider');
			let name = $(event.target).find('.owl-item.active .image').attr('title');
			$(element).find('.name-carousel span').text(name);
		},
	};
	return (
		<section className='section section-areascomunes section-tramado fase-2' id='Areas-comunes'>
			<img className='background-areas' src={require('../../../Assets/images/banner/compress-background-inicio.webp')} alt='fondo seccion de areas comunes e interiores' loading='lazy' />
			<div className='p-relative'>
				<div className='headerInvisible' id='headerInvisible' />
				<div className='contain'>
					<div className='contentImgTitle'>
						<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white'>
							{/* <div className="paloma-bird" style={{backgroundImage:`url(${titlePaloma})`}} /> */}
							<span translate='no' className='geomanist-light fsize-1-5vw'>
								Conoce <span className='geomanist-bold fsize-2vw'>tu departamento</span>
							</span>
						</div>
						<div className='contain-buttons'>
							<div className={`btn change-slider slider-Interiores active`} onClick={() => changeSlider('Interiores')}>
								Interiores
							</div>
							<div className={`btn change-slider slider-Areas-comunes mr-1`} onClick={() => changeSlider('Areas-comunes')}>
								Áreas comunes
							</div>
						</div>
					</div>
					<div className='relative'>
						<div className={`contentSlider change-slider slider-Areas-comunes carousel-marco `}>
							<div className='name-carousel left'>
								<span translate='no'></span>
							</div>
							<LightgalleryProvider>
								<OwlCarousel options={options} events={events} className='owl-carousel Areas-comunes carousel-marco myCarouselDepa carousel-normal owl-theme owl-loaded owl-drag'>
									{areas.map((fill: any, index: number) => (
										<div key={index} className='content-image cursor-zoom'>
											<LightgalleryItem key={index} group='any' src={fill.image}>
												<picture className='content-img'>
													<source media='(min-width: 769px)' srcSet={fill.image}></source>
													<img className='image' src={fill.imageCompress} alt={'Nesta - Galeria'} title={fill.name} loading='lazy' />
												</picture>
											</LightgalleryItem>
										</div>
									))}
								</OwlCarousel>
							</LightgalleryProvider>
						</div>
						<div className={`contentSlider change-slider slider-Interiores carousel-marco active`}>
							<div className='name-carousel left'>
								<span translate='no'></span>
							</div>
							<LightgalleryProvider>
								<OwlCarousel options={options} events={events} className='owl-carousel slider-Interiores carousel-marco myCarouselDepa carousel-normal owl-theme owl-loaded owl-drag'>
									{depas.map((fill: any, index: number) => (
										<div key={index} className='content-image cursor-zoom'>
											<LightgalleryItem key={index} group='any' src={fill.image} subHtml={'#areas-comunes' + index}>
												<picture className='content-img'>
													<source media='(min-width: 769px)' srcSet={fill.image}></source>
													<img className='image' src={fill.imageCompress} title={fill.name} loading='lazy' />
												</picture>
											</LightgalleryItem>
										</div>
									))}
								</OwlCarousel>
							</LightgalleryProvider>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
