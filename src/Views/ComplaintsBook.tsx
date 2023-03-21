import React, { Component } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { MailService } from '../components/services/MailService';
import { ComplaintMail } from '../components/emails/complaint.html';

export default class ComplaintsBook extends Component<any, any> {
	constructor() {
		//@ts-ignore
		super();
		//@ts-ignore
		this.mailService = new MailService();
		//@ts-ignore
		this._complaintsBook = axios.create({
			baseURL: 'https://cors.formulaperu.com/https://reclamatuciudad.pe',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
	async handleSubmit(e: any) {
		e.preventDefault();
		const data = e.target;

		const book = {
			fname: data.fname.value,
			flname: data.flname.value,
			mlname: data.mlname.value,
			email: data.email.value,
			telephone: data.telephone.value,
			id_type: data.id_type.value,
			id_number: data.id_number.value,
			region: data.region.value,
			province: data.province.value,
			district: data.district.value,
			address: data.address.value,
			contracted_good_type: data.contracted_good_type.value,
			order_number: data.order_number.value,
			amount: data.amount.value,
			good_desc: data.good_desc.value,
			complaint_type: data.complaint_type.value,
			complaint_desc: data.complaint_desc.value,
			consumer_petiton: data.consumer_petiton.value,
			seller_action: data.seller_action.value,
		};

		const submitButton = document.querySelector('form button');
		//@ts-ignore
		submitButton.setAttribute('disabled', '');
		//@ts-ignore
		submitButton.textContent = 'Enviando';
		//@ts-ignore
		await this.mailService
			.from('Nesta <no-reply@nesta.com.pe>')
			.to('izamoram@grupolar.com, cbetancourt@betancourt.pe')
			.subject('Libro de reclamaciones')
			.html(ComplaintMail(book))
			.send()
			.then((r: any) => {
				Swal.fire({
					title: '',
					text: 'Datos registrados satisfactoriamente',
					icon: 'success',
					confirmButtonText: 'Aceptar',
					confirmButtonColor: '#ef7622',
				});
			})
			.catch((e: any) =>
				Swal.fire({
					title: '',
					text: '¡Error! Intentelo más tarde',
					icon: 'error',
					confirmButtonText: 'Aceptar',
					confirmButtonColor: 'red',
				})
			);
		//@ts-ignore
		submitButton.textContent = 'Enviar';
		//@ts-ignore
		submitButton.removeAttribute('disabled');
	}
	//@ts-ignore
	invalidMsg({ target }, message) {
		if (target.validity.typeMismatch) {
			target.setCustomValidity(message);
		} else {
			target.setCustomValidity('');
		}
	}
	componentDidMount() {
		const _initCustomValidity = (form: any, msg: any) => {
			form.querySelectorAll('input, select').forEach((element: any) => {
				element.title = 'Campo obligatorio';
				_setCustomValidity(element, msg);
			});
		};
		const _setCustomValidity = (element: any, message: any) => {
			element.oninvalid = (e: any) => !e.target.validity.valid && e.target.setCustomValidity(message);
			element.oninput = (e: any) => e.target.setCustomValidity('');
		};
		const form = document.querySelector('form');
		_initCustomValidity(form, 'Campo obligatorio');
		//@ts-ignore
		_setCustomValidity(form.email, 'Ingrese un correo valido');
		//@ts-ignore
		_setCustomValidity(form.telephone, 'Ingrese numero de teléfono valido');
	}
	render() {
		return (
			<main className='page --complaints-book'>
				<form onSubmit={e => this.handleSubmit(e)}>
					<div className='form-group col-xs-12'>
						<h1 className='tit-libro text-left text-center text-uppercase'>Libro de Reclamaciones</h1>
						<p className='descripcion color-blanco text-left tit-custom-dos'>
							Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, esta institución cuenta con un Libro de Reclamaciones a su disposición.
						</p>
					</div>

					<div className='form-row'>
						<div className='form-group col-sm-4 col-lg-4'>
							<input type='text' name='fname' className='form-control large' placeholder='Nombre*' required onInvalid={e => this.invalidMsg(e, 'Campo obligatorio')} />
						</div>
						<div className='form-group col-sm-4 col-lg-4'>
							<input type='text' name='flname' className='form-control large' placeholder='Apellido Paterno*' required />
						</div>
						<div className='form-group col-sm-4 col-lg-4'>
							<input type='text' name='mlname' className='form-control large' placeholder='Apellido Materno*' required />
						</div>
					</div>

					<div className='form-row'>
						<div className='form-group col-sm-3 col-lg-3'>
							<input type='email' name='email' className='form-control large' placeholder='Correo Electrónico*' required />
						</div>
						<div className='form-group col-sm-3 col-lg-3'>
							<input type='tel' name='telephone' className='form-control large' placeholder='Celular*' required />
						</div>
						<div className='form-group col-sm-3 col-lg-3 no-padding-right no-padding-left'>
							<select name='id_type' className='form-control' required>
								<option value='DNI'>DNI</option>
								<option value='RUC'>RUC</option>
								<option value='Carnet de Extranjería'>Carnet de Extranjería</option>
							</select>
						</div>
						<div className='form-group col-sm-3 col-lg-3 no-padding-right no-padding-left'>
							<input type='text' name='id_number' className='form-control large' placeholder='N° documento' required />
						</div>
					</div>

					<div className='form-row'>
						<div className='form-group col-sm-4 col-lg-4'>
							<input type='text' name='region' className='form-control large' placeholder='Departamento*' required />
						</div>
						<div className='form-group col-sm-4 col-lg-4'>
							<input type='text' name='province' className='form-control large' placeholder='Provincia*' required />
						</div>
						<div className='form-group col-sm-4 col-lg-4'>
							<input type='text' name='district' className='form-control large' placeholder='Distrito*' required />
						</div>
					</div>

					<div className='form-row'>
						<div className='form-group col-lg-12 col-sm-12'>
							<input type='text' name='address' className='form-control large' placeholder='Dirección*' required />
						</div>
					</div>

					<div className='form-group col-xs-12'>
						<h2 className='text-left'>IDENTIFICACIÓN DEL BIEN CONTRATADO</h2>
					</div>

					<div className='form-row'>
						<div className='form-group col-sm-4 col-lg-4'>
							<select name='contracted_good_type' className='form-control' required>
								<option value='' defaultValue=''>
									Tipo de Bien Contratado*
								</option>
								<option value='Producto'>Producto</option>
								<option value='Servicio'>Servicio</option>
							</select>
						</div>
						<div className='form-group col-sm-4 col-lg-4'>
							<input type='text' name='order_number' className='form-control large' placeholder='Nº de Pedido*' required />
						</div>
						<div className='form-group col-sm-4 col-lg-4'>
							<input type='text' name='amount' className='form-control large' placeholder='Monto*' required />
						</div>
					</div>

					<div className='form-row'>
						<div className='form-group col-lg-12 col-sm-12'>
							<input type='text' name='good_desc' className='form-control large' placeholder='Descripción*' required />
						</div>
					</div>

					<div className='form-group col-xs-12'>
						<h2 className='text-left'>DETALLE DE LA RECLAMACIÓN</h2>
					</div>

					<div className='form-row'>
						<div className='form-group col-sm-12'>
							<select name='complaint_type' className='form-control' required>
								<option value='' defaultValue=''>
									Tipo de Reclamo*
								</option>
								<option value='Reclamo'>Reclamo</option>
								<option value='Queja'>Queja</option>
							</select>
						</div>
					</div>

					<div className='form-row'>
						<div className='form-group col-sm-12'>
							<input type='text' name='complaint_desc' className='form-control large' placeholder='Descripción*' required />
						</div>
						<div className='form-group col-sm-12'>
							<input type='text' name='consumer_petiton' className='form-control large' placeholder='Pedido del Consumidor*' required />
						</div>
					</div>

					<div className='form-group col-xs-12'>
						<h2 className='text-left'>ACCIONES ADOPTADAS POR EL VENDEDOR</h2>
					</div>

					<div className='form-row'>
						<div className='form-group col-sm-12'>
							<input type='text' name='seller_action' className='form-control large' placeholder='Descripción*' required />
						</div>
					</div>

					<div className='form-group col-xs-12'>
						<div className='col-xs-12'>
							<div className='checkbox'>
								{/* <input type="checkbox" name="politicas" value="politicas aceptadas" /> */}
								<label htmlFor='politicas' className='check'>
									<label className='container'>
										<input type='checkbox' required />
										<span className='checkmark'></span>
									</label>
									<span>
										&nbsp;He leído y acepto la&nbsp;
										<a href={require('../Assets/pdf/Políticas-de-Privacidad-de-datos-Nesta.pdf')} target='_blank'>
											Política de Datos Personales
										</a>
									</span>
								</label>
							</div>
						</div>
					</div>

					<div className='form-group col-xs-12 flex-center'>
						<button type='submit' className='form-submit btnSubmitLibro'>
							Enviar
						</button>
					</div>

					<div className='block-answer col-xs-12'>
						<div className='values'>
							<div className='error-message'>
								<p></p>
							</div>
						</div>
					</div>
				</form>
			</main>
		);
	}
}
