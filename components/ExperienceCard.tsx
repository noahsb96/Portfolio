import React from 'react';
import Petes from '../images/Petes.jpg';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

function ExperienceCard({}: Props) {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]'>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
				src={Petes.src}
				alt=''
			/>

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>
					Front Line / Back of House / Shift Supervisor / Bartender
				</h4>
				<p className='font-bold text-2xl mt-1'>Illegal Pete's</p>
				<p className='uppercase py-5 text-gray-300'>
					Started work... - Ended...
				</p>
				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>Summary Points</li>
					<li>Summary Points</li>
					<li>Summary Points</li>
					<li>Summary Points</li>
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
