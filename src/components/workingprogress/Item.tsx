import React, { Component } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
import image from '../../Assets/images/workingprogress/marco.svg?url';
//@ts-ignore
const $ = window.jQuery;

const options = {
	items: 1,
	nav: true,
	singleItem: true,
	navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	loop: true,
	rewind: true,
	autoplay: true,
};
const events = {
	onChanged: function (event: any) {},
};

export default class Item extends Component<any, any> {
	componentDidMount = () => {
		this.fnCarouselAwait();
	};

	fnCarouselAwait = () => {
		// $('.workCarousel' + this.props.carousel + ' .owl-stage').lightGallery({
		// 	selector: '.linkContentImage',
		// 	thumbnail: true,
		// 	animateThumb: false,
		// 	showThumbByDefault: false,
		// 	exThumbImage: 'data-exthumbimage',
		// });
	};

	render() {
		return (
			<div className='tl-content-item'>
				<div className={'c-black tl-item tl-item-' + this.props.id}>
					<span translate='no' className='tl-text-header'>
						{this.props.name}
					</span>
					<div className='contentSlider carousel-marco'>
						<OwlCarousel
							ref={'car'}
							options={options}
							events={events}
							className={'owl-carousel carousel-marco owl-theme carousel-normal content-carousel owl-loaded owl-drag workCarousel' + this.props.carousel}
							style={{ WebkitMaskBoxImage: `url(${image})` }}
						>
							{this.props.images.map((fill: any, index: any) => (
								<div
									className='tl-image linkContentImage cursor-zoom'
									key={index}
									data-exthumbimage={fill}
									data-src={fill}
									data-position={this.props.id}
									data-title={this.props.name}
									title={this.props.name}
									data-content={this.props.id}
									style={{ backgroundImage: `url(${fill})` }}
								>
									<div className='img-hover'>
										<span translate='no' className='ion-search'></span>
									</div>
								</div>
							))}
						</OwlCarousel>
					</div>
				</div>
			</div>
		);
	}
}
