import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import type { GetStaticProps } from 'next';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';

type Props = {
	pageInfo: PageInfo[];
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
	return (
		<div className='bg-[rgb(5,5,5)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ba16ec]/80'>
			<Head>
				<title>Noah Bruce</title>
			</Head>

			<Header socials={socials} />

			<section
				id='hero'
				className='snap-start'>
				<Hero pageInfo={pageInfo} />
			</section>

			<section
				id='about'
				className='snap-center'>
				<About pageInfo={pageInfo} />
			</section>

			<section
				id='experience'
				className='snap-center'>
				<WorkExperience experiences={experiences} />
			</section>

			<section
				id='skills'
				className='snap-start'>
				<Skills skills={skills} />
			</section>

			<section
				id='projects'
				className='snap-start'>
				<Projects projects={projects} />
			</section>

			<section
				id='contact'
				className='snap-start'>
				<ContactMe />
			</section>

			<footer className='sticky bottom-5 w-full'>
				<div className='flex items-center justify-center'>
					<Link href='#hero'>
						<img
							className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTIBXDY0ex8l1WNq-DTavYQvOz8pl2te4tc-rjBfzIQ&s'
							alt=''
						/>
					</Link>
				</div>
			</footer>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo[] = await fetchPageInfo();
	const experiences: Experience[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},
		revalidate: 3600,
	};
};
