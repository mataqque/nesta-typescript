import React, { Component } from 'react';
//@ts-ignore
import Scrollspy from 'react-scrollspy';
//@ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll';

export class FixedIndicators2 extends Component {
	render() {
		return (
			<div className='fixed-indicator'>
				<Scrollspy
					items={[
						'home',
						'atributos',
						// 'tipologias',
						'gallery',
						'respaldo',
					]}
					currentClassName='active'
				>
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
					<AnchorLink offset='100' href={'#atributos'} className='indicator --atributos'>
						<div className='svg-container'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40.6 30.6'>
								<path
									d='M33.7 10l-7.8-1.1-.1-.2-3.4-6.9C22 1 21.2.5 20.2.5c-.9 0-1.7.5-2.2 1.3l-3.5 7.1h-.2L6.8 10c-.9.1-1.7.8-1.9 1.6a2.35 2.35 0 0 0 .6 2.5l5.6 5.5-1.3 7.8c-.2.9.2 1.8 1 2.4.7.5 1.7.6 2.5.2l7-3.7.2.1 6.8 3.6c.8.4 1.8.4 2.5-.2.7-.5 1.1-1.4 1-2.4l-1.3-7.8 5.7-5.5c.7-.6.9-1.6.6-2.5-.4-.9-1.2-1.5-2.1-1.6zm-5.6 8c-.6.6-.8 1.3-.7 2.1l1.5 8.3-7.5-3.9c-.7-.4-1.6-.4-2.2 0l-7.5 4 1.4-8.3c.1-.8-.1-1.6-.7-2.1l-6.1-5.9 8.4-1.2c.8-.1 1.5-.6 1.8-1.3L20.3 2 24 9.6c.3.7 1 1.2 1.8 1.3l8.4 1.2-6.1 5.9z'
									fill='#353535'
								/>
							</svg>
						</div>
						<div className='text-container'>
							<span translate='no'>Atributos</span>
						</div>
					</AnchorLink>
					{/* <AnchorLink offset='100' href={"#tipologias"} className="indicator --tipologias">
                        <div className="svg-container">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.6 30.6"><path d="M38.8 12.2h-4.6V1.7c0-1-.8-1.7-1.7-1.7H1.7C.8 0 0 .8 0 1.7v17.5c0 1 .8 1.7 1.7 1.7h5v7.9c0 1 .8 1.7 1.7 1.7h24.1c1 0 1.7-.8 1.7-1.7v-4.7h4.6c1 0 1.7-.8 1.7-1.7v-8.6c.1-.9-.7-1.6-1.7-1.6zM7 18.9H2V2h14.4v26.6H8.7v-7.9c0-1-.7-1.8-1.7-1.8zm31.6 3.3H34c-1 0-1.7.8-1.7 1.7v4.7H18.4V2h13.8v10.4c0 1 .8 1.7 1.7 1.7h4.6v8.1z" fill="#353535"/></svg>                       
                        </div>
                        <div className="text-container">
                            <span translate="no">Tipología</span>
                        </div>
                    </AnchorLink> */}

					<AnchorLink offset='100' href={'#gallery'} className='indicator --gallery'>
						<div className='svg-container'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40.6 30.6' fill='#353535'>
								<path d='M27 7.1h2.2v2.2H27zM31.1.4H9.5C7.3.4 5.4 2.2 5.4 4.5v21.6c0 2.2 1.8 4.1 4.1 4.1h21.6c2.2 0 4.1-1.8 4.1-4.1V4.5C35.1 2.2 33.3.4 31.1.4zM9.5 28c-1 0-1.9-.8-1.9-1.9v-6.2l5.4-5.2 6.9 6.6L13 28H9.5zM33 26.1c0 1-.8 1.9-1.9 1.9H15.8l11-10.5 6.2 6v2.6zm0-5.4l-5.5-5.3c-.4-.4-1-.4-1.3 0L21.3 20l-7.6-7.3c-.4-.4-1-.4-1.3 0l-4.7 4.5V4.5c0-1 .8-1.9 1.9-1.9h21.6c1 0 1.9.8 1.9 1.9v16.2z' />
							</svg>
						</div>
						<div className='text-container'>
							<span translate='no'>Galería</span>
						</div>
					</AnchorLink>
					<AnchorLink offset='130' href={'#respaldo'} className='indicator --backing'>
						<div className='svg-container'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40.6 30.6'>
								<path
									d='M34.3 2.4h-3.7V1.3c0-.5-.4-1-1-1H11c-.5 0-1 .4-1 1v1.1H6.3c-.5 0-1 .4-1 1 0 3.9 1 7.6 2.9 10.4 1.8 2.8 4.3 4.4 6.9 4.5a11.92 11.92 0 0 0 1.8 1.5v3.7h-1.3a3.33 3.33 0 0 0-3.3 3.3v1.3c-.5 0-.9.5-.9 1s.4 1 1 1h15.9c.5 0 1-.4 1-1 0-.5-.4-1-.9-1v-1.3a3.33 3.33 0 0 0-3.3-3.3h-1.3v-3.7a11.92 11.92 0 0 0 1.8-1.5c2.6-.2 5.1-1.8 6.9-4.5 1.9-2.8 2.9-6.5 2.9-10.4-.1-.5-.6-1-1.1-1zm-1 2c-.2 3.2-1.1 6.1-2.5 8.3-1 1.5-2.2 2.6-3.5 3.2a4.67 4.67 0 0 0 .5-1c1.4-2.9 2.4-6.5 2.7-10.5h2.8zm-9.1 12.4c-.6.7-1.3 1.2-1.9 1.6 0 0-.1 0-.1.1-1.2.6-2.5.6-3.7 0 0 0-.1 0-.1-.1-.7-.4-1.3-.9-1.9-1.6 0-.1-.1-.1-.1-.1-.6-.7-1.2-1.6-1.7-2.7C13 10.9 12.1 6.7 12 2.3h16.6c-.1 4.4-1 8.6-2.6 11.8-.5 1-1.1 1.9-1.7 2.7-.1-.1-.1 0-.1 0zm-5.3 4a6.15 6.15 0 0 0 2.7 0v2.8h-2.7v-2.8zm-5.6-4.9c-1.3-.6-2.5-1.7-3.5-3.2-1.5-2.2-2.4-5.2-2.5-8.3h2.8c.3 4 1.3 7.6 2.7 10.5.2.4.4.7.5 1zm1 11c0-.7.6-1.3 1.3-1.3h9.3c.7 0 1.3.6 1.3 1.3v1.3h-12v-1.3z'
									fill='#353535'
								/>
							</svg>
						</div>
						<div className='text-container'>
							<span translate='no'>Respaldo</span>
						</div>
					</AnchorLink>
				</Scrollspy>
			</div>
		);
	}
}
