import React, { ReactNode, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicRoute from './components/TypeRoute/PublicRoute';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
// import { Header } from './components/helpers/header/header';
import { FrontendHeader, LandingFooter, LandingHeader } from './layout';
import { LandingPiros, WorkingProgress } from './Views';
import workData from './Views/resources/workProgress';

export default function RoutesDom(props: any): JSX.Element {
	return (
		<Router>
			<FrontendHeader />
			<Routes>
				<Route path='/' element={<PublicRoute>{PublicRoutes.Home}</PublicRoute>}></Route>
				<Route path='/landing-piros' element={<PublicRoute>{PublicRoutes.LandingPiros}</PublicRoute>} />
				<Route path='/fases/piros' element={<PublicRoute>{PublicRoutes.LandingPiros}</PublicRoute>} />
				<Route path='/fases/terra-fase-1' element={<PublicRoute>{PublicRoutes.terraFase1}</PublicRoute>} />
				<Route path='/fases/terra-fase-2' element={<PublicRoute>{PublicRoutes.terraFase2}</PublicRoute>} />
				<Route path='/post-venta' element={<PublicRoute>{PublicRoutes.postVenta}</PublicRoute>} />
				<Route path='/promociones' element={<PublicRoute>{PublicRoutes.promociones}</PublicRoute>} />
				<Route path='/gracias' element={<PublicRoute>{PublicRoutes.gracias}</PublicRoute>} />

				<Route path='/avance-de-obra' element={<PublicRoute>{PublicRoutes.working}</PublicRoute>} />
				<Route path='/avance-de-obra/piros' element={<PublicRoute>{<WorkingProgress data={workData[0]} />}</PublicRoute>} />
				<Route path='/avance-de-obra/terra' element={<PublicRoute>{<WorkingProgress data={workData[1]} />}</PublicRoute>} />

				<Route path='/landing-terra' element={<PublicRoute>{<div className='landing-intriga'>{PublicRoutes.landingterra}</div>}</PublicRoute>} />
				<Route path='/landing-piros/gracias' element={<PublicRoute>{PublicRoutes.gracias}</PublicRoute>} />
				<Route path='/landing-piros/libro-de-reclamaciones' element={<PublicRoute>{PublicRoutes.working}</PublicRoute>} />
				{/* <div className='landing-piros'>
						<LandingHeader />
						<Route path='/gracias' element={GraciasPiros} />
						<Route path='/libro-de-reclamaciones' element={ComplaintsBook} />
					</div> */}
				{/* <Route path='/promociones' element={<PublicRoute>{PublicRoutes.Home}</PublicRoute>}></Route>
				<Route path='/vive-superior' element={<PublicRoute>{PublicRoutes.Home}</PublicRoute>}></Route>
				<Route path='/nosotros' element={<PublicRoute>{PublicRoutes.Home}</PublicRoute>}></Route>
				<Route path='/post-venta' element={<PublicRoute>{PublicRoutes.Home}</PublicRoute>}></Route>
				<Route path='/fases/terra-fase-1' element={<PublicRoute>{PublicRoutes.Home}</PublicRoute>}></Route>
				<Route path='/fases/terra-fase-2' element={<PublicRoute>{PublicRoutes.Home}</PublicRoute>}></Route>
				<Route path='/avance-de-obra' element={SelectWorking} />
				<Route path='/avance-de-obra/:slug' element={({ match }) => <WorkingProgress data={workData.filter(p => p.fase === match.params.slug)[0]}></WorkingProgress>} />
				<Route path='/gracias' element={Gracias} /> */}
			</Routes>
		</Router>
	);
}
