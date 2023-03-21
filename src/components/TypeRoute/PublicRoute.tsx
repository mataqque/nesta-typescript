import { Helmet } from 'react-helmet-async';
import Footer from '../UI/Page/Footer/footer';
import { useEffect } from 'react';

export default function PublicRoute(props: any) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [props]);

	return <>{props.children}</>;
}
