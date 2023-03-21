import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import imgLarMap from 'Assets/images/nosotros/mapa-desktop2.png';
import imgTitle from 'Assets/images/nosotros/usTitle.png';
import imgPalomas from 'Assets/images/nosotros/palomas.png';
import '../Assets/scss/pages/us.scss';
import { WebLayout } from '../layout/WebLayout';
export default class Nosotros extends Component {
	render() {
		return (
			<WebLayout classPage='page-nosotros' title='Nosotros &#8211; Proyecto Nesta'>
				<div className='headerInvisible' id='headerInvisible' />
				<section className='section-nosotros section-tramado fadeIn animated slow'>
					<div className='contain'>
						<MediaQuery query='(min-width: 769px)'>
							<div className='content-lar-map'>
								<div className='lar-map' style={{ backgroundImage: `url(${imgLarMap})` }}>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
								</div>
								<div className='partBottom responsive-movil' />
							</div>
						</MediaQuery>
						<MediaQuery query='(max-width: 768px)'>
							<div className='content-lar-map'>
								<div className='lar-map' style={{ backgroundImage: `url(${require('Assets/images/nosotros/mapa-desktop-movil.png')})` }}>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
									<div className='hotspot'>
										<div className='pulse'></div>
										<a href='#' className='dot'>
											<i className='fa fa-plus'></i>
										</a>
									</div>
								</div>
								<div className='partBottom responsive-movil' />
							</div>
						</MediaQuery>
						<div className='backing'>
							<div className='contentImgTitle'>
								<div className='imgtitle' title='Con el respaldo de 2 grandes inmobiliarias' style={{ backgroundImage: `url(${imgTitle})` }}>
									<div className='palomas' style={{ backgroundImage: `url(${imgPalomas})` }} />
								</div>
							</div>
							<div className='experience'>
								<div className='company-logo --cosapi' />
								<span translate='no'>
									Más de <b>60 años</b>&nbsp;construyendo las
									<br />
									edificaciones más emblemáticas
									<br />
									como el edificio más alto del Perú.
								</span>
							</div>
							<div className='experience'>
								<div className='company-logo --lar' />
								<span translate='no'>
									Más de <b>50 años</b> en el rubro inmobiliario.
									<br />
									Amplia experiencia construyendo
									<br /> edificaciones de más de 30 niveles.
								</span>
							</div>
						</div>
					</div>
				</section>
			</WebLayout>
		);
	}
}
