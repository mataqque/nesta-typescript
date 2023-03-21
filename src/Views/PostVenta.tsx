import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import titlePaloma1 from '../Assets/images/palomas-left.png';
import ImgTitle from '../Assets/images/postventa/title.png';
import { Input, TextArea, Selectbox } from '../components/Others';
import axios from 'axios';
import { postSale } from '../components/emails/PostSale';
import { WebLayout } from '../layout/WebLayout';

export default class PostVenta extends Component {
	constructor(props: any) {
		super(props);
		this.state = {
			activateValid: '',
			startValid: '',
			cbodoc: 'DNI',
			txtdoc: '',
			txtdeps: '',
			txtname: '',
			txtlastname: '',
			txttelephone: '',
			txtemail: '',
			txtarea: '',
			modelo1: false,
			modelo2: false,
			modelo3: false,
			styleValid: 'accepted',
			termsConditions: false,
			disabledButton: false,
		};
		//@ts-ignore
		this.validator = new SimpleReactValidator();
	}

	clearInputs = () => {
		this.setState({
			activateValid: '',
			startValid: '',
			cbodoc: 'DNI',
			txtdoc: '',
			txtdeps: '',
			txtname: '',
			txtlastname: '',
			txttelephone: '',
			file: '',
			txtemail: '',
			txtarea: '',
			modelo1: false,
			modelo2: false,
			modelo3: false,
			styleValid: 'accepted',
			termsConditions: false,
			disabledButton: false,
		});
	};

	submitForm = () => {
		this.setState({ startValid: '', activateValid: 'active' });
		//@ts-ignore
		this.validator.allValid() ? this.handleCreate() : this.setState({ startValid: 'activate' });
	};

	setStateFromInput = (event: any) => {
		var obj = {};
		//@ts-ignore
		obj[event.target.name] = event.target.value;
		this.setState(obj);
	};

	setStateFromCbo = (obj: any) => {
		this.setState(obj);
	};

	async handleCreate() {
		this.setState({ disabledButton: true });

		const data = new FormData();
		data.append('from', 'Proyecto Nesta <no-reply@nesta.com.pe>');
		data.append('to', 'postventa@cosapiinmobiliaria.com.pe,comercial@nesta.com.pe,postventa@nesta.com.pe');
		data.append('subject', 'Post-venta Nesta');
		data.append('html', postSale(this.state));
		//@ts-ignore
		data.append('attachment', this.state.file);
		//@ts-ignore
		document.querySelector('form button').innerText = 'Enviando...';

		await axios
			.post('https://cors.formulaperu.com/https://api.mailgun.net/v3/mg.formulaperu.com/messages', data, {
				auth: {
					username: 'api',
					password: 'key-2f8526fda8b88fce4bc2fd3f1858cca7',
				},
			})
			.then(
				({ data }) => {
					//@ts-ignore
					document.querySelector('form button').innerText = 'Enviado';
					window.location.reload();
				},
				e => {
					console.error(e.response);
					//@ts-ignore
					document.querySelector('form button').innerText = 'Error';
				}
			);

		setTimeout(() => {
			this.setState({ disabledButton: false });
		}, 3000);
	}

	handleFile(e: any) {
		this.setState({ file: e.target.files[0] });
		console.log(e.target.files[0]);
	}

	render() {
		return (
			<WebLayout classPage='page-venta' title='Post venta &#8211; Proyecto Nesta'>
				<div className='headerInvisible' id='headerInvisible' />
				<div className='contain h-100'>
					<section className='section-servicio section-tramado fadeIn animated slow pt-4 pb-5'>
						<div className='contentImgTitle'>
							<div className='imgtitle' style={{ backgroundImage: `url(${ImgTitle})` }}>
								<div className='paloma-bird' style={{ backgroundImage: `url(${titlePaloma1})` }} />
							</div>
						</div>
						<div className='container'>
							<p className='text-center mt-2 line-height-normal'>
								Para brindarle un mejor servicio ponemos a disposición nuestra oficina de{' '}
								<span translate='no'>
									<b>Atención al Cliente,</b>
								</span>
								<br /> por favor déjenos sus datos para ponernos en contacto con usted.
							</p>
							{/* @ts-ignore */}
							<form id={'contact-form'} className={'contact-form ' + this.state.activateValid}>
								<div className='row'>
									<div className='col-md-4'>
										<Selectbox
											name={'cbodoc'}
											//@ts-ignore
											estado={this.state.cbodoc}
											placeholder='Seleccione Tipo de documento*'
											setValueCbo={this.setStateFromCbo}
											//@ts-ignore
											validator={this.validator}
											//@ts-ignore
											startValid={this.state.startValid}
											styleValid={'required'}
											options={[
												{
													name: 'DNI',
													value: 'DNI',
												},
												{
													name: 'Carnet de extranjeria',
													value: 'Carnet de extranjeria',
												},
												{
													name: 'Pasaporte',
													value: 'Pasaporte',
												},
											]}
										/>
									</div>
									<div className='col-md-4'>
										<Input
											type='text'
											name='txtdoc'
											//@ts-ignore
											estado={this.state.txtdoc}
											setValueTxt={this.setStateFromInput}
											//@ts-ignore
											validator={this.validator}
											//@ts-ignore
											startValid={this.state.startValid}
											styleValid={'required|number'}
											placeholder='N° de documento *'
											//@ts-ignore
											activateValid={this.state.activateValid}
										/>
									</div>
									<div className='col-md-4'>
										<Input
											type='text'
											name='txtdeps'
											//@ts-ignore
											estado={this.state.txtdeps}
											setValueTxt={this.setStateFromInput}
											//@ts-ignore
											validator={this.validator}
											//@ts-ignore
											startValid={this.state.startValid}
											styleValid={'required'}
											placeholder='N° de departamento *'
											//@ts-ignore
											activateValid={this.state.activateValid}
										/>
									</div>
									<div className='col-md-6'>
										<Input
											type='text'
											name='txtname'
											//@ts-ignore
											estado={this.state.txtname}
											setValueTxt={this.setStateFromInput}
											//@ts-ignore//@ts-ignore

											validator={this.validator}
											//@ts-ignore
											startValid={this.state.startValid}
											styleValid={'required'}
											placeholder='Nombres *'
											//@ts-ignore
											activateValid={this.state.activateValid}
										/>
									</div>
									<div className='col-md-6'>
										<Input
											type='text'
											name='txtlastname'
											//@ts-ignore
											estado={this.state.txtlastname}
											setValueTxt={this.setStateFromInput}
											//@ts-ignore
											validator={this.validator}
											//@ts-ignore
											startValid={this.state.startValid}
											styleValid={'required'}
											placeholder='Apellidos *'
											//@ts-ignore
											activateValid={this.state.activateValid}
										/>
									</div>
									<div className='col-md-6'>
										<Input
											type='tel'
											name='txttelephone'
											//@ts-ignore
											estado={this.state.txttelephone}
											setValueTxt={this.setStateFromInput}
											//@ts-ignore
											validator={this.validator}
											//@ts-ignore
											startValid={this.state.startValid}
											styleValid={'required|numeric|min:7|max:9'}
											placeholder='Telefono *'
											//@ts-ignore
											activateValid={this.state.activateValid}
										/>
									</div>
									<div className='col-md-6'>
										<Input
											type='email'
											name='txtemail'
											//@ts-ignore
											estado={this.state.txtemail}
											setValueTxt={this.setStateFromInput}
											//@ts-ignore
											validator={this.validator}
											//@ts-ignore
											startValid={this.state.startValid}
											styleValid={'required|email'}
											placeholder='Email *'
											//@ts-ignore
											activateValid={this.state.activateValid}
										/>
									</div>
									<div className='col-md-12'>
										<TextArea
											//@ts-ignore
											name={'txtarea'}
											//@ts-ignore
											estado={this.state.txtarea}
											setValueTxt={this.setStateFromInput}
											//@ts-ignore
											validator={this.validator}
											//@ts-ignore
											startValid={this.state.startValid}
											styleValid={'required'}
											placeholder='Mensaje *'
											//@ts-ignore
											activateValid={this.state.activateValid}
										/>
									</div>
									<div className='col-md-12'>
										<input type='file' onChange={e => this.handleFile(e)} />
									</div>
									<div className='col-md-12 d-flex justify-content-center mt-3'>
										{/* @ts-ignore */}
										<button className='btn-nesta btn-green btn-wsp outline' onClick={(e: any) => this.submitForm(e)} disabled={this.state.disabledButton} type='button'>
											Enviar información
										</button>
									</div>
								</div>
							</form>
						</div>
					</section>
				</div>
			</WebLayout>
		);
	}
}
