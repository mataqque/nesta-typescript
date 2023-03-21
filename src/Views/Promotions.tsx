import React, { Component } from 'react';
import { promotionsData } from './resources/promotions.js';
import titlePaloma from '../Assets/images/areas-sociales/paloma.png';
import ImgTitlePromotions from '../Assets/images/promociones/promos-titulo.png';
import '../Assets/scss/pages/promotions.scss';
import { WebLayout } from '../layout/WebLayout.js';
import { Promotion } from '../components/promotions/Promotion.js';
export default class Promotions extends Component<any, any> {
	render() {
		return (
			<WebLayout classPage='page-promociones' title='Promociones &#8211; Proyecto Nesta'>
				<section className='section section-promotions section-tramado'>
					<div className='p-relative'>
						<div className='headerInvisible' id='headerInvisible' />
						<div className='contain pt-4 padding-with-footer'>
							<div className='contentImgTitle'>
								<div className='imgtitle fadeIn animated' style={{ backgroundImage: `url(${ImgTitlePromotions})` }}>
									<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma})` }} />
								</div>
							</div>
							<div className='promotions-container'>
								{promotionsData.map(p => {
									// @ts-ignore
									return <Promotion slug={p.slug} img={p.img_tall} />;
								})}
							</div>
						</div>
					</div>
				</section>
			</WebLayout>
		);
	}
}
