import React, { Component } from 'react';
// import {Input, Checkbox, SelectWithImage} from "..omponents/Others"
import SimpleReactValidator from 'simple-react-validator';
import Terminos from '../../Assets/pdf/Políticas-de-Privacidad-de-datos-Nesta.pdf';
import { InterestedService } from '../../components/services';
import { Checkbox, Input, SelectWithImage } from '../Others';

export class Formulario extends Component {
	_interestedService: InterestedService;
	validator: SimpleReactValidator;
	constructor(props: any) {
		super(props);
		this._interestedService = new InterestedService();
		this.validator = new SimpleReactValidator();
		this.state = {
			activateValid: '',
			startValid: '',
			cbodorm: '',
			txtname: '',
			txtlastname: '',
			txttelephone: '',
			txtemail: '',
			termsConditions: false,
			styleValid: 'accepted',
			birth_date: '',
			disabledButton: false,
		};
	}
	clearInputs = () => {
		this.setState({
			activateValid: '',
			startValid: '',
			cbodorm: '',
			txtname: '',
			txtlastname: '',
			txttelephone: '',
			txtemail: '',
			termsConditions: false,
			birth_date: '',
			styleValid: 'accepted',
			disabledButton: false,
		});
	};
	submitForm = () => {
		this.setState({ startValid: '', activateValid: 'active' });
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
	setStateFromCbo2 = (val: any) => {
		this.setState({ cbodorm: val });
	};
	handleCreate() {
		this.setState({ disabledButton: true });
		//@ts-ignore
		document.querySelector('button.btn-nesta-piros').innerText = 'Enviando...';

		this._interestedService
			.withInterested({
				//@ts-ignore
				rooms: this.state.cbodorm,
				//@ts-ignore
				fname: this.state.txtname,
				//@ts-ignore
				lname: this.state.txtlastname,
				//@ts-ignore
				email: this.state.txtemail,
				//@ts-ignore
				phone: this.state.txttelephone,
				//@ts-ignore
				date_of_birth: this.state.birth_date,
				project_id: 8,
			})
			.send()
			.then(
				client => {
					console.log(client);
					let query = '';
					//@ts-ignore
					window.gtag('event', 'conversion', {
						send_to: 'AW-811712721/WnK-CO_EsX8Q0YGHgwM',
					});
					//@ts-ignore
					document.querySelector('button.btn-nesta-piros').innerText = 'Enviado';
					setTimeout(() => {
						if (client.last_agent_assigned.phone) {
							query = '?seller_phone=' + client.last_agent_assigned.phone.replace(/\s/g, '');
							return;
						}
						window.location.href = `/landing-piros/gracias?${query}`;
					}, 1000);
				},
				err => {
					//@ts-ignore
					document.querySelector('button.btn-nesta-piros').innerText = 'Error';
					console.error(err.response);
					this.setState({ disabledButton: false });
				}
			);
	}
	render() {
		return (
			<div className='container' id='contacto'>
				<div className='row'>
					<div className='col-md-12'>
						<SelectWithImage
							//@ts-ignore
							name='cbodorm'
							setValueCbo={this.setStateFromCbo2}
							placeholder={'Selecciona un departamento'}
							//@ts-ignore
							estado={this.state.cbodorm}
							validator={this.validator}
							//@ts-ignore
							startValid={this.state.startValid}
							styleValid={'required'}
							//@ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12'>
						<Input
							type='text'
							name='txtname'
							//@ts-ignore
							estado={this.state.txtname}
							setValueTxt={this.setStateFromInput}
							validator={this.validator}
							//@ts-ignore
							startValid={this.state.startValid}
							styleValid={'required'}
							placeholder='Nombres *'
							//@ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12'>
						<Input
							type='text'
							name='txtlastname'
							//@ts-ignore
							estado={this.state.txtlastname}
							setValueTxt={this.setStateFromInput}
							validator={this.validator}
							//@ts-ignore
							startValid={this.state.startValid}
							styleValid={'required'}
							placeholder='Apellidos *' //@ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12'>
						<Input
							type='email'
							name='txtemail'
							//@ts-ignore
							estado={this.state.txtemail}
							setValueTxt={this.setStateFromInput}
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
						<Input
							type='tel'
							name='txttelephone'
							//@ts-ignore
							estado={this.state.txttelephone}
							setValueTxt={this.setStateFromInput}
							validator={this.validator}
							//@ts-ignore
							startValid={this.state.startValid}
							styleValid={'required|numeric|min:7|max:9'}
							placeholder='Celular *'
							//@ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12'>
						<Input
							type='date'
							max='2007-01-01'
							name='birth_date'
							//@ts-ignore
							estado={this.state.birth_date}
							setValueTxt={this.setStateFromInput}
							validator={this.validator}
							//@ts-ignore
							startValid={this.state.startValid}
							styleValid={'required'}
							placeholder='Fecha de nacimiento *'
							//@ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12'>
						<Checkbox
							id='terminos_condiciones'
							name='termsConditions'
							//@ts-ignore
							estado={this.state.termsConditions}
							setValueTxt={this.setStateFromCbo}
							validator={this.validator}
							//@ts-ignore
							startValid={this.state.startValid}
							styleValid={'accepted'}
							text={[
								'He leído y acepto la',
								<a href={Terminos} className='text-decoration-none geomanist-bold' target='_blank' rel='noopener noreferrer'>
									&nbsp;política de datos personales
								</a>,
							]}
							value='1'
							//@ts-ignore
							activateValid={this.state.activateValid}
						/>
					</div>
					<div className='col-md-12 text-center'>
						{/* @ts-ignore */}
						<button onClick={e => this.submitForm(e)} disabled={this.state.disabledButton} className='btn-nesta-piros'>
							Cotizar
						</button>
					</div>
				</div>
			</div>
		);
	}
}
