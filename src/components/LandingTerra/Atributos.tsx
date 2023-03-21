import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import nestaTerra from '../../Assets/svg/logos/nestaTerra.svg?url';
import respaldo from '../../Assets/images/landing/intriga/atributos/respaldo-exitoso.svg?url';
import dobleacceso from '../../Assets/images/landing/intriga/atributos/doble-acceso.svg?url';
import exclusivas from '../../Assets/images/landing/intriga/atributos/exclusivas.svg?url';
import vistaEspectacular from '../../Assets/images/landing/intriga/atributos/vista-espectacular.svg?url';
import ubicacioncentrica from '../../Assets/images/landing/intriga/atributos/ubicacion-centrica.svg?url';
import acabadosdecalidad from '../../Assets/images/landing/intriga/atributos/acabados-calidad.svg?url';
import vigilancia from '../../Assets/images/landing/intriga/atributos/vigilancia.svg?url';
import respaldointernacional from '../../Assets/images/landing/intriga/atributos/respaldo-internacional.svg?url';
export class Atributos extends Component {
	render() {
		return (
			<section className='section section-atributos section-tramado' id='Atributos'>
				<div className='scrollspy scrollspy-atributos' id='atributos' />
				<div className='row'>
					<div className='col-md-7 d-flex justify-content-center flex-column align-items-center c-second'>
						<h1 className='d-flex align-items-center mb-0 p-relative'>
							<div className='img img-contain palomaLeft' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/atributos/palomasLeft.png')})` }} />
							Vive en
							<div className='img img-contain logo-terra' style={{ backgroundImage: `url(${nestaTerra})` }} />
							<div className='img img-contain bonoVerde' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/atributos/bono-verde.png')})` }} />
						</h1>
						<h4>
							Y disfruta de una <span className='geomanist-bold'>vista de ensueño</span>
						</h4>
						<div className='mt-1 content-atributos d-flex flex-wrap justify-content-center'>
							<div className='atributo d-flex align-items-center'>
								<div className='icon svg svg-contain bg-primary' style={{ WebkitMaskImage: `url(${respaldo})` }} />
								<div className='text-atributo'>Respaldo exitoso Fase 1, Fase 2 y Fase 3</div>
							</div>
							<div className='atributo d-flex align-items-center'>
								<div className='icon svg svg-contain bg-primary' style={{ WebkitMaskImage: `url(${dobleacceso})` }} />
								<div className='text-atributo'>Doble acceso</div>
							</div>
							<div className='atributo d-flex align-items-center'>
								<div className='icon svg svg-contain bg-primary' style={{ WebkitMaskImage: `url(${exclusivas})` }} />
								<div className='text-atributo'>Exclusivas áreas comunes</div>
							</div>
							<div className='atributo d-flex align-items-center'>
								<div className='icon svg svg-contain bg-primary' style={{ WebkitMaskImage: `url(${vigilancia})` }} />
								<div className='text-atributo'>Vigilancia 24 horas</div>
							</div>
							<div className='atributo d-flex align-items-center'>
								<div className='icon svg svg-contain bg-primary' style={{ WebkitMaskImage: `url(${acabadosdecalidad})` }} />
								<div className='text-atributo'>Acabados de calidad</div>
							</div>
							<div className='atributo d-flex align-items-center'>
								<div className='icon svg svg-contain bg-primary' style={{ WebkitMaskImage: `url(${respaldointernacional})` }} />
								<div className='text-atributo'>Respaldo internacional de inmobiliarias</div>
							</div>
							<div className='atributo d-flex align-items-center'>
								<div className='icon svg svg-contain bg-primary' style={{ WebkitMaskImage: `url(${ubicacioncentrica})` }} />
								<div className='text-atributo'>Ubicación céntrica</div>
							</div>
							<div className='atributo d-flex align-items-center'>
								<div className='icon svg svg-contain bg-primary' style={{ WebkitMaskImage: `url(${vistaEspectacular})` }} />
								<div className='text-atributo'>Vista Espectacular</div>
							</div>
						</div>
						<div className='content-financiado'>
							<div className='img img-contain img-financiado' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/financiado.png')})` }} />
						</div>
						<div className='img img-contain img-part-left' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/atributos/partLeft.png')})` }} />
					</div>
					<MediaQuery query='(min-width: 540px)'>
						<div className='col-md-5'>
							<div className='img-render img img-contain' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/atributos/nesta-render.png')})` }} />
						</div>
					</MediaQuery>
					<MediaQuery query='(max-width: 540px)'>
						<div className='col-md-5' style={{ paddingLeft: 0, paddingRight: 0 }}>
							<div className='img-render img img-contain' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/atributos/nesta-render-movil.png')})` }} />
						</div>
					</MediaQuery>
				</div>
			</section>
		);
	}
}
