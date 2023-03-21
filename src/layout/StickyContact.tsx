import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import MovilEstatico from '../Assets/images/stickyContact/movil_estatico_nesta.png';
import WebEstatico from '../Assets/images/stickyContact/web_estatico_nesta.png';
import { Controller, Scene } from 'react-scrollmagic';
// import Icon from 'Components/UI/icon';

const whatsapp = require('../Assets/images/whatsapp-animation.json');
export class StickyContact extends Component {
	fnMoveToScroll = (e: any) => {
		//@ts-ignore
		document.getElementById('myContact').scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	render() {
		return (
			<Controller>
				<Scene classToggle={['.content-wsp-button', 'hide']} triggerElement='.linea-effect-start' reverse={true} indicators={false}>
					<div className='content-wsp-button'>
						<MediaQuery query='(min-width: 768px)'>
							{/* <a href={"/#contactanos"} className="stickyContact" >
                                <Icon icon={whatsapp} ></Icon>
                            </a> */}
						</MediaQuery>
						<MediaQuery query='(max-width: 768px)'>
							<button className='stickyContact' onClick={e => this.fnMoveToScroll(e)} aria-label='Name'>
								<div className='img bgImg' style={{ backgroundImage: `url(${MovilEstatico})` }} />
							</button>
						</MediaQuery>
					</div>
				</Scene>
			</Controller>
		);
	}
}
