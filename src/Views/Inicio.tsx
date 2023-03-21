import React, { Component } from 'react';
import { StickyContact } from '../layout';
import ReactFullpage from '@fullpage/react-fullpage';
import topTitle from '../Assets/images/fases/piros/headerTitle.svg?url';
import { Banner, Fachada, Atributos, AreasComunes, Departamentos, DobleAcceso, Fases, Ubicanos } from '../components/Inicio';
import { LandingFooter } from '../layout';
import { sliderData } from './resources/slider.js';
import { dataDepartamentosIntriga } from './resources/departamentos.js';
import { areasComunesIntriga } from './resources/areas_comunes.js';
import { Contact } from '../components/common/Contact';
import MediaQuery from 'react-responsive';
import Multimedia from './Multimedia.js';
import { Recorrido } from '../Views/resources/recorrido';
import { SectionMultimedia } from '../Views/resources/multimedia';
import { SectionHeader } from '../components/Inicio/Header';
import { WebLayout } from '../layout/WebLayout';
//@ts-ignore
const $ = window.jQuery;

export default class Inicio extends Component {
	fnGetAlturaHeader = () => {
		// @ts-ignore
		var header = document.getElementById('header').offsetHeight;
		// @ts-ignore
		document.getElementById('headerInvisible').style.height = header + 'px';
	};

	render() {
		const thes = this;
		return (
			<WebLayout classPage='page-inicio bg-tercero' title='Proyecto Nesta | Departamentos en Jesús María &#8211; Cosapi & Grupo Lar Perú'>
				<StickyContact />
				<MediaQuery query='(min-width: 770px)'>
					{/* @ts-ignore */}
					<ReactFullpage
						sectionsColor={['transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '#f5f6f7', '#f5f6f7', '#f5f6f7', '#dbdfe0']}
						css3={true}
						scrollOverflow={false}
						anchors={['inicio', 'promociones', 'el-proyecto', 'atributos', 'areas-comunes', 'section-multimedia', 'doble-acceso', 'fases', 'ubicanos', 'contactanos', 'footer']}
						navigation={true}
						navigationPosition={'right'}
						navigationTooltips={['Inicio', 'Promociones', 'El Proyecto', 'Atributos', 'Imágenes', 'Multimedia', 'Doble acceso', 'Fases', 'Ubícanos', 'Contáctanos', 'footer']}
						scrollingSpeed={600}
						onLeave={function (origin, destination, direction) {
							$(origin.item).removeClass('active-animation');
							$(destination.item).addClass('active-animation');
						}}
						afterRender={function () {
							thes.fnGetAlturaHeader();
						}}
						afterResize={function () {
							thes.fnGetAlturaHeader();
						}}
						responsiveWidth={1100}
						slidesNavigation={true}
						// credits={{enabled: false}}
						render={({ state, fullpageApi }) => {
							return (
								<ReactFullpage.Wrapper>
									<SectionHeader />
									<Banner sliders={sliderData} fullpageApi={fullpageApi} />
									<Fachada />
									<Atributos />
									<AreasComunes areas={areasComunesIntriga} depas={dataDepartamentosIntriga} />
									<SectionMultimedia />
									<DobleAcceso />
									<Fases />
									<Ubicanos />
									<Contact modelos={true} />
									<LandingFooter line={true} />
								</ReactFullpage.Wrapper>
							);
						}}
					/>
				</MediaQuery>
				<MediaQuery query='(max-width: 769px)'>
					<SectionHeader />
					<Banner sliders={sliderData} fullpageApi={null} />
					<Fachada />
					<Atributos />
					<AreasComunes areas={areasComunesIntriga} depas={dataDepartamentosIntriga} />
					<SectionMultimedia />
					<DobleAcceso />
					<Fases />
					<Ubicanos />
					<Contact modelos={true} />
				</MediaQuery>
			</WebLayout>
		);
	}
}
