import React, { Component } from 'react';
//@ts-ignore
import OwlCarousel from 'react-owl-carousel2';
//@ts-ignore
const $ = window.jQuery;

const options = {
	items: 1,
	nav: true,
	singleItem: true,
	navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
	loop: true,
	rewind: true,
	autoplay: false,
	smartSpeed: 650,
	autoWidth: true,
};
const events = {
	onInitialized: function (event: any) {
		$('.imgTipologia.preview').removeClass('active');
		$('.imgTipologia.preview:nth(0)').addClass('active');
	},
	onChanged: function (event: any) {
		$('.imgTipologia.preview').removeClass('active');
		$('.imgTipologia.preview:nth(' + event.page.index + ')').addClass('active');
	},
};

export class Tipologias extends Component {
	componentDidMount = () => {};
	render() {
		return (
			<div className='content-tipologias'>
				<div className='row'>
					<div className='col-md-12'>
						<OwlCarousel ref={'tipology'} options={options} events={events} className='owl-carousel lightGalleryTipologia lightGalleryTipologia-piros owl-theme owl-loaded owl-drag'>
							{/* <div 
                                className="imgTipologia" 
                                data-exthumbimage={require('Assets/images/landing/piros/tipologias/tipo1.png')}
                                data-src={require('Assets/images/landing/piros/tipologias/tipo1.png')}
                                style={{backgroundImage:`url(${require('Assets/images/landing/piros/tipologias/tipo1.png')})`}} 
                            />
                            <div 
                                className="imgTipologia" 
                                data-exthumbimage={require('Assets/images/landing/piros/tipologias/tipo2.png')}
                                data-src={require('Assets/images/landing/piros/tipologias/tipo2.png')}
                                style={{backgroundImage:`url(${require('Assets/images/landing/piros/tipologias/tipo2.png')})`}} 
                            /> */}
							<div className='imgTipologia' data-src={require('../../Assets/images/landing/piros/tipologias/tipo3.png')}>
								<img className='img-fluid' src={require('../../Assets/images/landing/piros/tipologias/tipo3.png')} alt='' />
							</div>
							<div
								className='imgTipologia'
								data-exthumbimage={require('../../Assets/images/landing/piros/tipologias/Nesta-Piros-BX10.png')}
								data-src={require('../../Assets/images/landing/piros/tipologias/Nesta-Piros-BX10.png')}
							>
								<img
									className='img-fluid'
									data-src={require('../../Assets/images/landing/piros/tipologias/Nesta-Piros-BX10.png')}
									src={require('../../Assets/images/landing/piros/tipologias/Nesta-Piros-BX10.png')}
									alt=''
								/>
							</div>
						</OwlCarousel>
					</div>
				</div>
				<br />
				<div className='row'>
					{/* <div className="col-4">
                        <div 
                            onClick={() => this.refs.tipology.goTo(0)}
                            className="imgTipologia preview active" 
                            style={{backgroundImage:`url(${require('Assets/images/landing/piros/tipologias/tipo1.png')})`}} 
                        />
                    </div>
                    <div className="col-4">
                        <div 
                            onClick={() => this.refs.tipology.goTo(1)}
                            className="imgTipologia preview" 
                            style={{backgroundImage:`url(${require('Assets/images/landing/piros/tipologias/tipo2.png')})`}} 
                        />
                    </div> */}
					<div className='col-4'>
						<div
							// @ts-ignore
							onClick={() => this.refs.tipology.goTo(0)}
							className='imgTipologia preview'
							style={{
								backgroundImage: `url(${require('../../Assets/images/landing/piros/tipologias/tipo3.png')})`,
							}}
						/>
					</div>
					<div className='col-4'>
						<div
							// @ts-ignore
							onClick={() => this.refs.tipology.goTo(1)}
							className='imgTipologia preview'
							style={{
								backgroundImage: `url(${require('../../Assets/images/landing/piros/tipologias/Nesta-Piros-BX10.png')})`,
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}
