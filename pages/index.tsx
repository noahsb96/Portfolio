import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import type { NextPage } from 'next';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';

const Home: NextPage = () => {
	return (
		<div className='bg-[rgb(5,5,5)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
			<Head>
				<title>Noah Bruce</title>
			</Head>

			<Header />

			<section
				id='hero'
				className='snap-center'>
				<Hero />
			</section>

			<section
				id='about'
				className='snap-center'>
				<About />
			</section>

			<section
				id='experience'
				className='snap-center'>
				<WorkExperience />
			</section>

			<section
				id='skills'
				className='snap-start'>
				<Skills />
			</section>

			<section
				id='projects'
				className='snap-start'>
				<Projects />
			</section>

			<section>
				<ContactMe />
			</section>
		</div>
	);
};

export default Home;
