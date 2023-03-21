import React, { Component } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
//@ts-ignore
const $ = window.jQuery;

export class Departamentos extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			imagenes: [],
		};
	}

	componentWillMount = () => {
		//@ts-ignore
		let array = [];
		//@ts-ignore
		this.props.depas.forEach((element: any, index: any) => {
			array.push({ src: element.image, thumb: element.image, subHtml: element.name });
		});
		//@ts-ignore
		this.setState({ imagenes: array });
	};

	fnOpenModal = (e: any, index: number) => {
		e.preventDefault();
		let thes = this;
		let $lg = $('.myCarouselDepartamentos');
		$lg.lightGallery({
			dynamic: true,
			dynamicEl: thes.state.imagenes,
			animateThumb: false,
			showThumbByDefault: false,
		});
		$lg.data('lightGallery').index = index;
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
			<section className='section section-departamentos section-tramado fase-2'>
				<div className='p-relative'>
					<div className='headerInvisible' id='headerInvisible' />
					<div className='contain'>
						<div className='contentImgTitle'>
							<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white'>
								<div className='paloma-bird' style={{ backgroundImage: `url(${require('Assets/images/departamentos/paloma1.png')})` }} />
								<div className='paloma-bird' style={{ backgroundImage: `url(${require('Assets/images/departamentos/paloma2.png')})` }} />
								<span translate='no' className='geomanist-light fsize-1-5vw'>
									Conoce tu
									<br />
									<span className='geomanist-bold fsize-2vw'> departamento</span>
								</span>
							</div>
						</div>
						<div className='contentSlider carousel-marco'>
							<div className='name-carousel right' style={{ backgroundImage: `url(${require('Assets/images/departamentos/bgName.png')})` }}>
								<span translate='no'></span>
							</div>
							<OwlCarousel ref={'slider'} options={options} events={events} className='owl-carousel carousel-marco myCarouselDepartamentos carousel-normal owl-theme owl-loaded owl-drag'>
								{this.props.depas.map((fill: any, index: number) => (
									<a
										key={index}
										data-src={fill.image}
										data-exthumbimage={fill.image}
										href={fill.image}
										data-sub-html={fill.name}
										className='content-image cursor-zoom'
										onClick={e => this.fnOpenModal(e, index)}
									>
										<div className='image' style={{ backgroundImage: `url(${fill.image})` }} title={fill.name} />
									</a>
								))}
							</OwlCarousel>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
