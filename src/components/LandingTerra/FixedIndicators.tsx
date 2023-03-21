import React, { Component } from 'react';
//@ts-ignore
import Scrollspy from 'react-scrollspy';
//@ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll';

export class FixedIndicators extends Component {
	render() {
		return (
			<div className='fixed-indicator'>
				<Scrollspy items={['home', 'contacto']} currentClassName='active'>
					<AnchorLink offset='100' href={'#home'} className='indicator --home'>
						<div className='svg-container'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40.6 30.6'>
								<path
									d='M36 10.6L20.8.7c-.3-.2-.8-.2-1.1 0L4.6 10.6c-.4.3-.6.8-.4 1.3a.9.9 0 0 0 .6.6c.3.1.6 0 .8-.1l1.5-1V29a.94.94 0 0 0 1 1h24.4a.94.94 0 0 0 1-1V11.3l1.5 1c.5.3 1.2.1 1.5-.4.2-.5 0-1-.5-1.3zM23.4 28h-6.1v-8.2h6.1V28zm8.1 0h-6.1v-9.2a.94.94 0 0 0-1-1h-8.1a.94.94 0 0 0-1 1V28H9.1V10l11.2-7.3L31.5 10v18z'
									fill='#353535'
								/>
							</svg>
						</div>
						<div className='text-container'>
							<span translate='no'>Inicio</span>
						</div>
					</AnchorLink>
					<AnchorLink offset='100' href={'#contacto'} className='indicator --contacto'>
						<div className='svg-container'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.02 30.93' fill='#353535'>
								<path d='M24.93 5.5h-12.8c-1.7 0-3.1 1.3-3.1 2.88v7.2c0 1.6 1.4 2.88 3.1 2.88h.66v2.5a.92.92 0 0 0 .6.87h.01c.13.05.25.07.37.07a1.07 1.07 0 0 0 .68-.25l3.6-3.18h6.86c1.7 0 3.1-1.3 3.1-2.88V8.4c0-1.6-1.4-2.88-3.1-2.88zM13.78 16.57h-1.32l-.33-.01c-.6 0-1.12-.45-1.12-1v-7.2c0-.55.5-1 1.12-1h12.8c.6 0 1.12.45 1.12 1v7.2c0 .55-.5 1-1.12 1h-7.25a.98.98 0 0 0-.67.26l-2.23 1.97v-1.3c0-.5-.44-.93-1-.93zm-.2-5.27h9.54c.54 0 1-.42 1-.94s-.44-.94-1-.94h-9.54c-.55 0-1 .42-1 .94s.45.94 1 .94zm10.52 2.38c0-.52-.44-.94-1-.94h-9.54c-.55 0-1 .42-1 .94s.44.94 1 .94h9.54c.55 0 1-.42 1-.94zm-4 5.57c-.54 0-1 .42-1 .94v8.18c0 .38-.35.7-.78.7H2.76c-.43 0-.78-.3-.78-.7V2.57c0-.38.35-.7.78-.7h15.56c.43 0 .78.3.78.7v1.28c0 .52.44.94 1 .94s1-.42 1-.94V2.57C21.1 1.15 19.86 0 18.34 0H2.76C1.24 0 0 1.15 0 2.57v25.8c0 1.42 1.24 2.57 2.76 2.57h15.56c1.52-.01 2.76-1.16 2.76-2.57V20.2c-.01-.52-.45-.94-1-.94zm-11.55 8h4c.54 0 1-.42 1-.94s-.44-.94-1-.94h-4c-.54 0-1 .42-1 .94s.44.94 1 .94z'></path>
							</svg>
						</div>
						<div className='text-container'>
							<span translate='no'>Contacto</span>
						</div>
					</AnchorLink>
				</Scrollspy>
			</div>
		);
	}
}
