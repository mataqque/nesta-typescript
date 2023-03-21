import React, { Component } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
import bgName from '../../Assets/images/areas-sociales/bgName.png';

//@ts-ignore
const $ = window.jQuery;

export class AreasComunes extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			imagenes: [],
			typeSliderActive: 'Interiores',
		};
	}

	componentWillMount = () => {
		//@ts-ignore
		let array = [];
		this.props.areas.forEach((element: any, index: any) => {
			array.push({ src: element.image, thumb: element.image, subHtml: element.name });
		});
		//@ts-ignore
		this.setState({ imagenes: array });
	};
	componentDidMount() {
		window.onload = function () {
			setInterval(() => {
				$('.myCarouselAreasComunes .owl-stage').lightGallery({
					selector: '.content-image',
					thumbnail: true,
					animateThumb: false,
				});
				$('.myCarouselDepa .owl-stage').lightGallery({
					selector: '.content-image',
					thumbnail: true,
					animateThumb: false,
				});
			}, 500);
		};
	}
	fnOpenModal = (e: any, index: number) => {};
	changeSlider = (value: any) => {
		console.log(value);
		$(`.btn`).removeClass('active');
		$(`.contentSlider`).removeClass('active');
		$(`.btn-${value}`).addClass('active');
	};
	render() {
		const options = {
			items: 1,
			nav: true,
			singleItem: true,
			navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
			loop: true,
			rewind: true,
			autoplay: false,
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
								<div
									className={`btn btn-Interiores active`}
									onClick={() => {
										this.changeSlider('Interiores');
									}}
								>
									Interiores
								</div>
								<div
									className={`btn btn-Areas-comunes mr-1`}
									onClick={() => {
										this.changeSlider('Areas-comunes');
									}}
								>
									Áreas comunes
								</div>
							</div>
						</div>
						<div className='relative'>
							<div className={`contentSlider btn-Areas-comunes carousel-marco `}>
								<div className='name-carousel left' style={{ backgroundImage: `url(${bgName})` }}>
									<span translate='no'></span>
								</div>
								<OwlCarousel
									ref={'sliderAreasComunes'}
									options={options}
									events={events}
									className='owl-carousel carousel-marco myCarouselAreasComunes carousel-normal owl-theme owl-loaded owl-drag'
								>
									{this.props.areas.map((fill: any, index: any) => (
										// @ts-ignore
										<div key={index} data-src={fill.image} href={fill.image} className='content-image cursor-zoom'>
											<img src={fill.imageCompress} loading='lazy' className='image' data-exthumbimage={fill.image} title={fill.name} />
										</div>
									))}
								</OwlCarousel>
							</div>
							<div className={`contentSlider btn-Interiores carousel-marco active`}>
								<div className='name-carousel left' style={{ backgroundImage: `url(${bgName})` }}>
									<span translate='no'></span>
								</div>
								<OwlCarousel
									ref={'sliderAreasComunes'}
									options={options}
									events={events}
									className='owl-carousel carousel-marco myCarouselDepa carousel-normal owl-theme owl-loaded owl-drag'
								>
									{this.props.depas.map((fill: any, index: number) => (
										// @ts-ignore
										<div key={index} data-src={fill.image} href={fill.image} className='content-image cursor-zoom'>
											<img loading='lazy' src={fill.imageCompress} className='image' data-exthumbimage={fill.image} title={fill.name} />
										</div>
									))}
								</OwlCarousel>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
