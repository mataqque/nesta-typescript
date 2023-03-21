import React, { Component } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
import MediaQuery from 'react-responsive';
import bgName from '../../Assets/images/departamentos/bgName.png';
import intriga from '../../Assets/svg/parteLeftLandingIntriga.svg?url';
//@ts-ignore
const $ = window.jQuery;

const options = {
	items: 1,
	nav: true,
	singleItem: true,
	navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
	loop: true,
	rewind: true,
	autoplay: true,
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

export class DepartamentosIntriga extends Component<any, any> {
	componentDidMount = () => {
		// $('.myCarouselDepartamentos .owl-stage').lightGallery({
		//     selector: '.content-image',
		//     thumbnail:true,
		//     animateThumb: false,
		//     showThumbByDefault: false,
		//     exThumbImage: 'data-exthumbimage',
		// })
	};

	render() {
		return (
			<section className='section section-departamentos-intriga'>
				<div className='TopBacking img img-cover w-100' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/backing-top.png')})` }} />
				<div className='row'>
					<MediaQuery query='(max-width: 540px)'>
						<div className='col-12 col-md-12'>
							<div className='text-title'>
								Conoce tu <br />
								<span>departamento</span>
							</div>
							<div className='paloma paloma-naranja-left' style={{ backgroundImage: `url(${require('../../Assets/images/paloma-naranja-left.png')})` }} />
							<div className='paloma paloma-green-right' style={{ backgroundImage: `url(${require('../../Assets/images/paloma-green-right.png')})` }} />
							<div className='title bg-black section-tramado text-white' style={{ WebkitMaskImage: `url(${intriga})` }} />
						</div>
					</MediaQuery>

					<MediaQuery query='(min-width: 540px)'>
						<div className='col-md-4'>
							<div className='title bg-primary section-tramado text-white' style={{ WebkitMaskImage: `url(${intriga})` }}>
								<div className='text-title'>
									Conoce tu <br />
									<span>departamento</span>
								</div>
							</div>
							<div className='paloma paloma-red img img-contain' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/paloma4.png')})` }} />
						</div>
					</MediaQuery>

					<div className='col-md-8'>
						<div className='w-9'>
							<div className='row'>
								<div className='col-md-12'>
									<div className='contentSlider carousel-marco' style={{ margin: 'auto' }}>
										<div className='name-carousel right' style={{ backgroundImage: `url(${bgName})` }}>
											<span translate='no'></span>
										</div>
										<OwlCarousel
											ref={'slider'}
											options={options}
											events={events}
											className='owl-carousel carousel-marco myCarouselDepartamentos carousel-normal owl-theme owl-loaded owl-drag'
										>
											{this.props.depas.map((fill: any, index: any) => (
												<a key={index} data-src={fill.image} data-exthumbimage={fill.image} href={fill.image} data-sub-html={fill.name} className='content-image cursor-zoom'>
													<div className='image' style={{ backgroundImage: `url(${fill.image})` }} title={fill.name} />
												</a>
											))}
										</OwlCarousel>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
