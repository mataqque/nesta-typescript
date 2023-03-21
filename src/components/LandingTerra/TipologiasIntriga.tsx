import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { flats } from '../../Views/resources/flat_types';
import intriga from '../../Assets/svg/parteLeftLandingIntriga.svg?url';
//@ts-ignore
const $ = window.jQuery;

export class TipologiasIntriga extends Component {
	componentDidMount = () => {};
	render() {
		return (
			<section className='section section-tipologias-intriga'>
				<div className='scrollspy scrollspy-tipologias' id='tipologias' />
				<div className='row'>
					<div className='col-md-4'>
						<MediaQuery query='(max-width: 540px)'>
							<div className='text-title'>
								¡Elige tu <br />
								<span>departamento!</span>
								<div className='paloma palomas-left bird-green-left' style={{ backgroundImage: `url(${require('../../Assets/images/landing/bird-green-left.png')})` }} />
								<div className='paloma palomas-right' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/tipologia/palomas-right.png')})` }} />
							</div>
						</MediaQuery>
						<div className='content-title bg-primary section-tramado text-white' style={{ WebkitMaskImage: `url(${intriga})` }}>
							<MediaQuery query='(min-width: 541px)'>
								<div className='text-title'>
									¡Elige tu <br />
									<span>departamento!</span> <br />
									<div className='paloma paloma-white img img-contain' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/paloma2.png')})` }} />
								</div>
							</MediaQuery>
						</div>
						<div className='paloma paloma-red img img-contain' style={{ backgroundImage: `url(${require('../../Assets/images/landing/intriga/paloma1.png')})` }} />
					</div>
					<div className='col-md-8'>
						<div className='w-9'>
							<div className='row'>
								{flats.map((flat, index) => (
									<div className='col-6 col-xs-6 col-sm-6 col-md-4'>
										<div className='tipologia'>
											<div
												data-exthumbimage={flat.image}
												data-src={flat.image}
												className='img-tipologia img img-contain w-100'
												style={{ backgroundImage: `url(${flat.image})` }}
											/>
											<div className='text-tipologia'>
												{flat.rooms_amount} [{flat.area}]
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
