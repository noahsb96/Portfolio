import React from 'react';
import Petes from '../images/Petes.jpg';
import { motion } from 'framer-motion';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
	experience: Experience;
};

function ExperienceCard({ experience }: Props) {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[800px] xl:w-[900px] snap-center bg-{#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center sm:h-20 sm:w-20'
				src={urlFor(experience?.companyImage).url()}
				alt=''
			/>

			<div className='px-0 md:px-10 sm:px-20'>
				<h4 className='text-4xl font-light sm:text-2xl'>
					{experience?.jobTitle}
				</h4>
				<p className='font-bold text-2xl mt-1 sm:text-xl'>{experience?.company}</p>
				<p className='uppercase py-5 text-gray-300 sm:text-sm'>
					{new Date(experience.dateStarted).toDateString()} -{' '}
					{experience.isCurrentlyWorkingHere
						? 'Present'
						: new Date(experience.dateEnded).toDateString()}
				</p>
				<ul className='list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#ba16ec]/80 sm:text-sm'>
					{experience.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
