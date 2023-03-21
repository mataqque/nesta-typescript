import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
export class AreasExclusivas extends Component<any, any> {
	render() {
		return (
			<section className='section section-areas-exclusivas'>
				<div className='container-fluid'>
					{/* ts-ignore */}

					<div className='m-auto titleImg' style={{ backgroundImage: `url(${require('../../Assets/images/landing/piros/title-areas-exclusivas.png')})` }} />
					<br />
					<MediaQuery query='(min-width: 990px)'>
						<div className='content-images-areas-exclusivas lightGalleryAreasExclusivas'>
							<a href={require('../../Assets/images/landing/piros/areas-exclusivas/Nesta_Ladies_Club.jpg')}>
								<img alt='Nesta Ladies Club' className='img img-fluid' src={require('../../Assets/images/landing/piros/areas-exclusivas/exclusiva1.png')} />
							</a>
							<a href={require('../../Assets/images/landing/piros/areas-exclusivas/Sala-de-ninos.png')}>
								<img alt='Sala de Niños' className='img img-fluid' src={require('../../Assets/images/landing/piros/areas-exclusivas/exclusiva2.png')} />
							</a>
							<a href={require('../../Assets/images/landing/piros/areas-exclusivas/Nesta_Pizza_Rooftop.jpg')}>
								<img alt='Nesta Pizza Rooftop' className='img img-fluid' src={require('../../Assets/images/landing/piros/areas-exclusivas/exclusiva3.png')} />
							</a>
							<a href={require('../../Assets/images/landing/piros/areas-exclusivas/Nesta_Pet_Zone.jpg')}>
								<img alt='Nesta Pet Zone' className='img img-fluid' src={require('../../Assets/images/landing/piros/areas-exclusivas/exclusiva4.png')} />
							</a>
						</div>
					</MediaQuery>
					<MediaQuery query='(max-width: 990px)'>
						<div className='container'>
							<div className='row lightGalleryAreasExclusivas'>
								<a className='col-md-12 mt-4' href={require('../../Assets/images/landing/piros/areas-exclusivas/Nesta_Ladies_Club.jpg')}>
									<img alt='Nesta Ladies Club' className='img img-fluid rounded ' src={require('../../Assets/images/landing/piros/areas-exclusivas/exclusiva1.png')} />
								</a>
								<a className='col-md-12 mt-4' href={require('../../Assets/images/landing/piros/areas-exclusivas/Sala-de-ninos.png')}>
									<img alt='Sala de Niños' className='img img-fluid rounded ' src={require('../../Assets/images/landing/piros/areas-exclusivas/exclusiva2.png')} />
								</a>
								<a className='col-md-12 mt-4' href={require('../../Assets/images/landing/piros/areas-exclusivas/Nesta_Pizza_Rooftop.jpg')}>
									<img alt='Nesta Pizza Rooftop' className='img img-fluid rounded ' src={require('../../Assets/images/landing/piros/areas-exclusivas/exclusiva3.png')} />
								</a>
								<a className='col-md-12 mt-4' href={require('../../Assets/images/landing/piros/areas-exclusivas/Nesta_Pet_Zone.jpg')}>
									<img alt='Nesta Pet Zone' className='img img-fluid rounded ' src={require('../../Assets/images/landing/piros/areas-exclusivas/exclusiva4.png')} />
								</a>
							</div>
						</div>
					</MediaQuery>
				</div>
			</section>
		);
	}
}
