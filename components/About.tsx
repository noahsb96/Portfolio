import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
	pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl :'>
				About
			</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src={urlFor(pageInfo?.profilePic).url()}
				className='-mb-20 md:mb-0 flex-shrink-0 w-60 h-60 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
			/>

			<div className='space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
					background
				</h4>
				<p className='text-base'>
					I am a software engineer and a musician. I've put my heart and soul
					into my two passions. Music and technology. Whether it be playing the
					drums across the US or learning HTML, CSS and JavaScript, I've taken
					the ability to find creative solutions to difficult problems,
					flexibility, time management and working with a team. I'm dedicated,
					motivated and passionate and whether it be playing drums in front of
					hundreds or writing web applications for thousands I know that I can
					deliver the best product possible.
				</p>
			</div>
		</motion.div>
	);
}

export default About;
