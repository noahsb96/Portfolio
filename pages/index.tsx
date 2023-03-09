import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import type { NextPage } from 'next';
import About from '@/components/About';

const Home: NextPage = () => {
	return (
		<div className='bg-[rgb(5,5,5)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
			<Head>
				<title>Noah Bruce</title>
			</Head>

			<Header />

			{/* Hero */}
			<section
				id='hero'
				className='snap-center'>
				<Hero />
			</section>

			{/* About */}
			<section
				id='about'
				className='snap-center'>
				<About />
			</section>

			{/* Experience */}

			{/* Skills */}

			{/* Projects */}

			{/* Contact Me */}
		</div>
	);
};

export default Home;
