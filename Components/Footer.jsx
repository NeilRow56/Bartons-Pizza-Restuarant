import React from 'react';

const Footer = () => {
	const today = new Date();
	return (
		<footer className=" fixed bottom-0 flex mx-auto w-full  items-center justify-center text-yellow-400 bg-red-700 ">
			<p className="text-sm">
				{' '}
				Copyright AWP Coding &copy; {today.getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;