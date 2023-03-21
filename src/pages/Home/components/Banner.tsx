import React, { Component, useRef } from 'react';
//@ts-ignore
import MediaQuery from 'react-responsive';
import Slider from 'react-slick';
const events = {
	onChanged: function (event: any) {},
};
export const Banner = (props: any) => {
	const car = useRef(null);
	const options = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		pauseOnFocus: true,
		pauseOnDotsHover: true,
		cssEase: 'linear',
		arrows: false,
		variableWidth: true,
		beforeChange: (current: any, next: any) => {},
	};
	return (
		<section className='section section-banner section-tramado' id='Promociones'>
			<div className='p-relative'>
				<div className='headerInvisible' id='headerInvisible' />
				<Slider {...options} className='owl-carousel Areas-comunes carousel-marco myCarouselDepa carousel-normal owl-theme owl-loaded owl-drag'>
					{props?.sliders.length > 0
						? props?.sliders.map((fill: any, index: number) => (
								<div className='content-image' key={index}>
									<a href={fill.link}>
										<picture>
											<source media='(min-width: 500px)' srcSet={fill.sliderWeb} />
											<img className='image' src={fill.sliderMovil} loading='lazy'></img>
										</picture>
									</a>
								</div>
						  ))
						: null}
				</Slider>
			</div>
		</section>
	);
};
