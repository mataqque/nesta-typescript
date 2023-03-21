import { flats, flatsFase2 } from '../Views/resources/flat_types';
import respaldoexitoso from '../Assets/images/landing/intriga/atributos/respaldo-exitoso.svg?url';
import dobleacceso from '../Assets/images/landing/intriga/atributos/doble-acceso.svg?url';
import exclusivas from '../Assets/images/landing/intriga/atributos/exclusivas.svg?url';
import vigilancia from '../Assets/images/landing/intriga/atributos/vigilancia.svg?url';
import acabadosdecalidad from '../Assets/images/landing/intriga/atributos/acabados-calidad.svg?url';
import respaldointernacional from '../Assets/images/landing/intriga/atributos/respaldo-internacional.svg?url';
import ubicacioncentrica from '../Assets/images/landing/intriga/atributos/ubicacion-centrica.svg?url';
import vistaespectacular from '../Assets/images/landing/intriga/atributos/vista-espectacular.svg?url';

export const fase1 = {
	class: 'fase-1',
	title: 'Disfruta de<br /> la mejor <span class="geomanist-bold">vista espectacular,</span><br/> vive en <span class="geomanist-bold">Jesús María</span>',
	subtitle: 'Depas de <span class="geomanist-bold">&nbsp;1, 2 y 3 Dorms&nbsp;</span> de hasta <span class="geomanist-bold"> &nbsp;83m<sup>2</sup></span>',
	estado: require('../Assets/images/fases/piros/estado.png'),
	imagenVista: require('../Assets/images/fases/piros/headerPiros.png'),
	imagenVistaMovil: require('../Assets/images/fases/piros/headerPiros-movil.png'),
	render: require('../Assets/images/fases/piros/render.png'),
	fases: flats,
	atributos: [
		{
			icon: respaldoexitoso,
			title: 'Respaldo exitoso Fase1, Fase 2 y Fase 3',
		},
		{
			icon: dobleacceso,
			title: 'Doble acceso',
		},
		{
			icon: exclusivas,
			title: 'Exclusivas áreas comunes',
		},
		{
			icon: vigilancia,
			title: 'Vigilancia 24 horas',
		},
		{
			icon: acabadosdecalidad,
			title: 'Acabados de calidad',
		},
		{
			icon: respaldointernacional,
			title: 'Respaldo internacional de inmobiliarias',
		},
		{
			icon: ubicacioncentrica,
			title: 'Ubicación céntrica',
		},
		{
			icon: vistaespectacular,
			title: 'Vista Espectacular',
		},
	],
	banco: require('../Assets/images/fases/financiado.png'),
	intersection: require('../Assets/images/landing/intriga/intersection.png'),
};

export const fase2 = {
	class: 'fase-2',
	title: 'Disfruta de vivir frente al <br/> <span class="geomanist-bold">Campo de Marte, </span><br/>en Jesús Maria</span>',
	subtitle: 'Depas de <span class="geomanist-bold">&nbsp; 2 y 3 Dorms&nbsp;</span> de hasta <span class="geomanist-bold"> &nbsp;83m<sup>2</sup></span>',
	estado: require('../Assets/images/fases/piros/estado.png'),
	imagenVista: require('../Assets/images/fases/terra/vista.png'),
	imagenVistaMovil: require('../Assets/images/fases/terra/vista.png'),
	render: require('../Assets/images/fases/render-fase-2.png'),
	fases: flatsFase2,
	atributos: [
		{
			icon: require('../Assets/images/fases/iconos/like.png'),
			title: 'Respaldo exitoso en 4 fases',
		},
		{
			icon: require('../Assets/images/fases/iconos/key.png'),
			title: 'Doble acceso',
		},
		{
			icon: require('../Assets/images/fases/iconos/piscina.png'),
			title: 'Exclusivas áreas comunes',
		},
		{
			icon: require('../Assets/images/fases/iconos/perro.png'),
			title: 'Pet friendly',
		},
		{
			icon: require('../Assets/images/fases/iconos/estrella.png'),
			title: 'Acabados de calidad',
		},
		{
			icon: require('../Assets/images/fases/iconos/medidor.png'),
			title: 'Gas de natural',
		},
		{
			icon: require('../Assets/images/fases/iconos/place.png'),
			title: 'Ubicación céntrica',
		},
		{
			icon: require('../Assets/images/fases/iconos/vista.png'),
			title: 'Vista espectacular',
		},
	],
	banco: require('../Assets/images/fases/iconos/banco.png'),
	intersection: require('../Assets/images/fases/background-separe.png'),
};
