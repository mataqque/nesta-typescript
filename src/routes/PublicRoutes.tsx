import React, { Suspense } from 'react';
import Boundary, { ErrorBoundary } from './Boundary';
import { Fases, Gracias, GraciasPiros, LandingPiros, LandingTerra, PostVenta, Promotions, SelectWorking } from '../Views';
import { fase1, fase2 } from '../properties/properties';
import { LandingFooter } from '../layout';

const Home = React.lazy(
	async () =>
		await import(/* webpackChunkName:"account" */ '../pages/Home/home').then(module => {
			return { default: module.Home };
		})
);

function Component(props: any) {
	return <Suspense fallback={<></>}>{props.children}</Suspense>;
}
export const PublicRoutes = {
	Home: (
		<Component>
			<Home />
		</Component>
	),
	LandingPiros: (
		<Component>
			<LandingPiros />
			<LandingFooter />
		</Component>
	),
	terraFase1: (
		<Component>
			<Fases data={fase1} />
			<LandingFooter />
		</Component>
	),
	terraFase2: (
		<Component>
			<Fases data={fase2} />
			<LandingFooter />
		</Component>
	),
	postVenta: (
		<Component>
			<PostVenta />
			<LandingFooter />
		</Component>
	),
	promociones: (
		<Component>
			<Promotions />
			<LandingFooter />
		</Component>
	),
	gracias: (
		<Component>
			<Gracias />
			<LandingFooter />
		</Component>
	),
	working: (
		<Component>
			<SelectWorking />
			<LandingFooter />
		</Component>
	),
	GraciasPiros: (
		<Component>
			<GraciasPiros />
			<LandingFooter />
		</Component>
	),
	landingterra: (
		<Component>
			<LandingTerra />
		</Component>
	),
	// LandingTerra: (
	// 	<Component>
	// 		<LandingTerra />
	// 	</Component>
	// ),
	// LandingTerra: (
	// 	<Component>
	// 		<div className='landing-piros'>
	// 			<LandingHeader />
	// 			<Route path='/landing-piros' exact component={LandingPiros} />
	// 			<Route path='/landing-piros/gracias' exact component={GraciasPiros} />
	// 			<Route path='/landing-piros/libro-de-reclamaciones' exact component={ComplaintsBook} />
	// 		</div>
	// 	</Component>
	// ),
};
