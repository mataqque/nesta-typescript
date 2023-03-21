import React, { Component } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
import ImgTitle from '../Assets/images/multimedia/entorno.png';
import IMGVideo from '../Assets/images/multimedia/video-general.png';
import titleElementTop from '../Assets/images/workingprogress/topElement.png';
import titlePaloma3 from '../Assets/images/dobleacceso/paloma2.png';
import titlePaloma4 from '../Assets/images/contacto/paloma1.png';
import IMG1 from '../Assets/images/multimedia/entorno-campo-de-marte.jpg';
import IMG2 from '../Assets/images/multimedia/entorno-maximo-abril-vf.jpg';
import IMG3 from '../Assets/images/multimedia/entorno-parque-de-la-exposicion-vf.jpg';
import IMG4 from '../Assets/images/multimedia/entorno-parque-de-la-reserva-vf.jpg';
import IMG5 from '../Assets/images/multimedia/entorno-real-plaza-vf.jpg';
import IMG6 from '../Assets/images/multimedia/entorno-UPC-vf.jpg';
import IMG7 from '../Assets/images/multimedia/entorno-up-vf.jpg';

import ImgTitle2 from '../Assets/images/multimedia/vive-superior.png';
import IMGViveSuperior1 from '../Assets/images/multimedia/cap1.png';
import IMGViveSuperior2 from '../Assets/images/multimedia/cap2.png';
import IMGViveSuperior3 from '../Assets/images/multimedia/cap3.png';
import titlePaloma1 from '../Assets/images/dobleacceso/paloma1.png';
import titlePaloma2 from '../Assets/images/dobleacceso/paloma2.png';
import SVGPlay from '../Assets/images/multimedia/play.svg?url';

import ImgTitle3 from '../Assets/images/multimedia/recorrido-virtual.png';
import IMGHeaderVirtualExperience from '../Assets/images/multimedia/headerVirtualExperience.png';
import IMGVirtualExperience from '../Assets/images/multimedia/virtualExperience.png';
import IMGVirtualExperience3d from '../Assets/images/multimedia/virtualExperience3d.png';
//@ts-ignore
import lgvideo from 'lg-video';
import { WebLayout } from '../layout/WebLayout';

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
	onChanged: function (event: any) {},
};

export default class Multimedia extends Component {
	componentDidMount = () => {
		this.fnCarouselAwait();
		console.log(window.location);
		if (window.location.hash == '#section-recorrido-virtual') {
			$('html, body').animate(
				{
					scrollTop: $('#section-recorrido-virtual').offset().top - 100,
				},
				700
			);
		}
	};

	fnCarouselAwait = () => {
		$('.video-gallery').lightGallery();
		$('.multimediaCarousel .owl-stage').lightGallery({
			selector: '.contentImage',
			thumbnail: true,
			animateThumb: false,
			showThumbByDefault: false,
			exThumbImage: 'data-exthumbimage',
		});
	};

	render() {
		return (
			<WebLayout classPage='page-multimedia' title='Promociones &#8211; Proyecto Nesta'>
				<div className='headerInvisible' id='headerInvisible' />
				<div className='contain section-tramado padding-with-footer'>
					<div className='section-vivesuperior pt-4 pb-5'>
						<div className='contentImgTitle'>
							<div className='imgtitle text-center d-flex justify-content-center align-items-center' title='Nuestros atributos'>
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma1})` }} />
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma2})` }} />
								<span translate='no' className='geomanist-light fsize-1-5vw' style={{ lineHeight: '1em' }}>
									<span className='geomanist-bold fsize-2vw'>Vive superior</span>
								</span>
							</div>
						</div>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-4 col-md-6 mt-4'>
									<div className='contentItem fadeIn animated delay-2s'>
										<div className='video-gallery'>
											<a href='https://www.youtube.com/watch?v=w1cj-CsnAug' className='contentImgPlay' style={{ backgroundImage: `url(${IMGViveSuperior1})` }}>
												<div className='icon h-100 bgImg' style={{ backgroundImage: `url(${SVGPlay})` }}></div>
											</a>
										</div>
										<div className='episode line-height-normal'>EPISODIO 1</div>
										<div className='title line-height-normal' title='Vive con iluminación'>
											Vive con iluminación{' '}
											<span translate='no' className='duration'>
												1:25
											</span>
										</div>
										<div className='description line-height-normal'>Vive en un depa con una perfecta entrada de luz natural. ¿Suena bien no?</div>
									</div>
								</div>
								<div className='col-lg-4 col-md-6 mt-4'>
									<div className='contentItem fadeIn animated delay-2s'>
										<div className='video-gallery'>
											<a href='https://www.youtube.com/watch?v=Cu99BIA0YDc' className='contentImgPlay' style={{ backgroundImage: `url(${IMGViveSuperior2})` }}>
												<div className='icon h-100 bgImg' style={{ backgroundImage: `url(${SVGPlay})` }}></div>
											</a>
										</div>
										<div className='episode line-height-normal'>EPISODIO 2</div>
										<div className='title line-height-normal' title='Vive sin ruido'>
											Vive sin ruido{' '}
											<span translate='no' className='duration'>
												1:19
											</span>
										</div>
										<div className='description line-height-normal'>¿Te imaginas una vida sin ruidos molestos? ¡Desconéctate!</div>
									</div>
								</div>
								<div className='col-lg-4 col-md-6 mt-4'>
									<div className='contentItem fadeIn animated delay-2s'>
										<div className='video-gallery'>
											<a href='https://www.youtube.com/watch?v=idy4_zP84RQ' className='contentImgPlay' style={{ backgroundImage: `url(${IMGViveSuperior3})` }}>
												<div className='icon h-100 bgImg' style={{ backgroundImage: `url(${SVGPlay})` }}></div>
											</a>
										</div>
										<div className='episode line-height-normal'>EPISODIO 3</div>
										<div className='title line-height-normal' title='Vive con privacidad'>
											Vive con privacidad{' '}
											<span translate='no' className='duration'>
												1:10
											</span>
										</div>
										<div className='description line-height-normal'>Olvídate de los vecinos y disfruta de la privacidad en tu hogar.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</WebLayout>
		);
	}
}
