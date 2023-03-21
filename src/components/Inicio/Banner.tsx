import React, { Component } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
import MediaQuery from 'react-responsive';

const options = {
	items: 1,
	nav: true,
	singleItem: true,
	navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
	loop: false,
	rewind: true,
	autoplay: true,
	smartSpeed: 650,
};
const events = {
	onChanged: function (event: any) {},
};

export class Banner extends Component<any, any> {
	render() {
		return (
			<section className='section section-banner section-tramado' id='Promociones'>
				<div className='p-relative'>
					<div className='headerInvisible' id='headerInvisible' />
					<OwlCarousel ref={'car'} options={options} events={events} className='owl-carousel owl-theme owl-loaded owl-drag'>
						{this.props.sliders.map((fill: any, index: number) => (
							<div className='content-image' key={index}>
								<MediaQuery query='(orientation: landscape)'>
									<a href={fill.link}>
										<div className='image' style={{ backgroundImage: `url(${fill.sliderWeb})` }}>
											{fill.svgBannerWeb}
										</div>
									</a>
								</MediaQuery>
								<MediaQuery query='(orientation: portrait)'>
									<a href={fill.link}>
										<div className='image' style={{ backgroundImage: `url(${fill.sliderMovil})` }}>
											{fill.svgBannerMovil}
										</div>
									</a>
								</MediaQuery>
							</div>
						))}
					</OwlCarousel>
				</div>
			</section>
		);
	}
}
