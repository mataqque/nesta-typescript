import React, { Component } from 'react';
// @ts-ignore
import MediaQuery from 'react-responsive';
import compressSlider from '../../../Assets/images/banner/compress-slider-desktop.webp';
import sliderMovil from '../../../Assets/images/banner/compress-slider-movil.webp';

export const SectionHeader = () => {
	return (
		<section className='section section-header' id='inicio'>
			<picture className='content-img'>
				<source media='(min-width: 769px)' srcSet={compressSlider}></source>
				<img src={sliderMovil} alt='Imagen header' loading='lazy'></img>
			</picture>
		</section>
	);
};
