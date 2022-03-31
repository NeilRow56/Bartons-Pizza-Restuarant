import Head from 'next/head';

import HomeSection from '../Components/HomeSection';
import axios from 'axios';
import PizzaList from '../Components/PizzaList';

export default function Home({ pizzaList }) {
	return (
		<>
			<Head>
				<title>Barton Pizza Restaurant</title>
				<meta name="description" content="Best pizzas in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-red-700 ">
				<HomeSection />
				<PizzaList pizzaList={pizzaList} />
			</div>
		</>
	);
}
export const getServerSideProps = async () => {
	const res = await axios.get('http://localhost:3000/api/products');
	return {
		props: {
			pizzaList: res.data,
		},
	};
};
