import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Controller, Scene } from 'react-scrollmagic';

export class WspButton extends Component {
	fnMoveToScroll = (e: any) => {
		e.preventDefault();
		//@ts-ignore
		document.getElementById('contacto').scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	render() {
		return (
			<Controller>
				<Scene classToggle={['.content-wsp-button', 'hide']} triggerElement='.linea-effect-start' reverse={true} indicators={false}>
					<div className='content-wsp-button'>
						<MediaQuery query='(min-width: 768px)'>
							<a href={'/#contactanos'} className='stickyContact' onClick={e => this.fnMoveToScroll(e)}>
								<div className='img bgImg' style={{ backgroundImage: `url(${require('../../Assets/images/stickyContact/web_estatico_nesta.png')})` }} />
							</a>
						</MediaQuery>
						<MediaQuery query='(max-width: 768px)'>
							<a href='#contacto' className='wspbutton' onClick={e => this.fnMoveToScroll(e)} style={{ backgroundImage: `url(${require('../../Assets/images/btn-wsp.png')})` }} />
						</MediaQuery>
					</div>
				</Scene>
			</Controller>
		);
	}
}
