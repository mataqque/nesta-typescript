import React, { Component } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
import MediaQuery from 'react-responsive';
import compressSliderDesktop from '../../Assets/images/banner/compress-slider-desktop.webp';
import compressSlidermobile from '../../Assets/images/banner/compress-slider-movil.webp';

export class SectionHeader extends Component {
	render() {
		return (
			<section className='section section-header' id='inicio'>
				<picture className='content-img'>
					<source media='(min-width: 769px)' srcSet={compressSliderDesktop}></source>
					<img src={compressSlidermobile} loading='lazy'></img>
				</picture>
			</section>
		);
	}
}
