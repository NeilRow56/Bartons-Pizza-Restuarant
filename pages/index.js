import Head from 'next/head';
import HomeSection from '../Components/HomeSection';
import LeftCard from '../Components/LeftCard';
import PizzaList from '../Components/PizzaList';
import Slider from '../Components/Slider';

export default function Home() {
	return (
		<>
			<Head>
				<title>Barton Pizza Restaurant</title>
				<meta name="description" content="Best pizzas in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-red-700 ">
				<HomeSection />
				<PizzaList />
			</div>
		</>
	);
}
