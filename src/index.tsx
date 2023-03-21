import RoutesDom from './router';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/scss/index.scss';
import 'lightgallery.js/dist/css/lightgallery.css';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
	<HelmetProvider>
		<RoutesDom />
	</HelmetProvider>
	// <React.StrictMode>
	// </React.StrictMode>
);
