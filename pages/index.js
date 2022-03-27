import Head from 'next/head';
import HomePage from '../Components/HomePage';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Barton Pizza Restaurant</title>
				<meta name="description" content="Best pizzas in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HomePage />
		</div>
	);
}
