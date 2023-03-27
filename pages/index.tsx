import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import type { NextPage } from 'next';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<div className='bg-[rgb(5,5,5)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
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

			<section
				id='contact'
				className='snap-start'>
				<ContactMe />
			</section>

			<Link href='#hero'>
				<footer>
					<div>
						<img
							src='https://i.imgur.com/e2yvD6A.png'
							alt=''
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
};

export default Home;
