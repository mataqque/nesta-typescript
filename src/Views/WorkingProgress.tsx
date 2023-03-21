import React, { Component } from 'react';
import Item from '../components/workingprogress/Item';
import titlePaloma1 from '../Assets/images/dobleacceso/paloma1.png';
import titlePaloma2 from '../Assets/images/dobleacceso/paloma2.png';
import { WebLayout } from '../layout/WebLayout.js';
import '../Assets/scss/pages/workingprogress.scss';
export default class WorkingProgress extends Component<any, any> {
	constructor(props: any) {
		super(props);
		console.log('data', this.props.data);
	}
	render() {
		return (
			<WebLayout classPage='page-workingprogress' title='Avance de obra &#8211; Proyecto Nesta'>
				<div className='headerInvisible' id='headerInvisible' />
				<div className='contain'>
					<section className='section-workingprogress section-tramado pb-5 fadeIn animated slow'>
						<div className='contentImgTitle'>
							<div className='imgtitle text-center d-flex justify-content-center align-items-center text-white' title='Nuestros atributos'>
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma1})` }} />
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma2})` }} />
								<span translate='no' className='geomanist-light fsize-1-5vw' style={{ lineHeight: '1em' }}>
									<span className='geomanist-bold fsize-2vw'>Avance de obra</span>
								</span>
							</div>
						</div>
						<div className='container content-tl'>
							<div className='vertical-tl'></div>
							{this.props.data.data.map((fill: any, index: any) => (
								<Item carousel={'carousel' + index} key={index} id={index} name={fill.title} images={fill.items} />
							))}
						</div>
					</section>
				</div>
			</WebLayout>
		);
	}
}
