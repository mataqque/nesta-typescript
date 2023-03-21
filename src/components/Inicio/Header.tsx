import React, { Component } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
import MediaQuery from 'react-responsive';
const sliderWeb = require('../../Assets/images/banner/compress-slider-desktop.webp');
const sliderMovil = require('../../Assets/images/banner/compress-slider-movil.webp');

export class SectionHeader extends Component {
	render() {
		return (
			<section className='section section-header' id='inicio'>
				<picture className='content-img'>
					<source media='(min-width: 769px)' srcSet={sliderWeb}></source>
					<img src={sliderMovil} loading='lazy'></img>
				</picture>
			</section>
		);
	}
}
