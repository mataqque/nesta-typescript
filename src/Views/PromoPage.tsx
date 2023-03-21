import React, { Component } from 'react';
import Planta from '../Assets/images/promociones/planta.png';
import { WebLayout } from '../layout/WebLayout';
import { ContactForm } from '../components/common/ContactForm';

export default class PromoPage extends Component<any, any> {
	render() {
		return (
			<WebLayout classPage='page-promo' title={`${this.props.promo.title} - Proyecto Nesta`}>
				<section className='section-promo section-tramado'>
					<div className='planta' style={{ backgroundImage: `url(${Planta})` }} />
					<div className='p-relative'>
						<div className='headerInvisible' id='headerInvisible' />
						<div className='container-fluid'>
							<div className='row'>
								<div className='col-md-12 col-lg-7 pl-0 pr-0' style={{ backgroundColor: '#353535' }}>
									{/* <div className="bgImg myImgPromo w-100 img-promo-page" style={{backgroundImage:`url(${this.props.promo.img_square})`,backgroundPosition:'top'}} /> */}
									<img src={this.props.promo.img_square} className='img img-fluid' />
									{/* <div className="content-nota-legal text-center bg-white " style={{fontSize:8,lineHeight:'1em'}}>
                                        *Tasa desde 6.99%, varía según evaluación del banco para departamentos dentro de Mivivienda Verde. **Bono del 3% aplica sobre el valor de financiamiento para viviendas de máximo S/419,600.00.
                                    </div> */}
								</div>
								<div className='col-md-12 col-lg-5 d-flex justify-content-center align-items-center'>
									<div className='padding-contain'>
										<div className='h-100'>
											<div className='row pt-3-movil pb-3-movil'>
												<div className='d-flex text-center justify-content-center w-100'>
													<h1 className='contactTextTitle c-black geomanist-bold text-center'>Contáctanos</h1>
												</div>
												<p className='text-center c-second w-100 geomanist-regular'>
													¡Conoce más de nuestros precios de <span className='geomanist-bold'>Preventa!</span> Déjanos tu contacto
												</p>
												<ContactForm />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</WebLayout>
		);
	}
}
