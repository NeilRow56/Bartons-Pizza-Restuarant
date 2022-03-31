import React from 'react';
import Footer1 from './Footer1'

const Footer = () => {
	const today = new Date();
	return (

		<div className=''>
		<Footer1 />
		<footer className=" fixed bottom-0 flex mx-auto w-full  items-center justify-center text-yellow-400 bg-red-700 ">
			<p className="text-sm">
				{' '}
				Copyright AWP Coding &copy; {today.getFullYear()}
			</p>
		</footer>
		</div>
	);
};

export default Footer;