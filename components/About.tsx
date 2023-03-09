import React from 'react';
import { motion } from 'framer-motion';
import Headshot from '../images/Headshot.jpg';
import Head from 'next/head';

type Props = {};

function About({}: Props) {
	return (
		<div className='flex flex-xol relative h-screen text-xenter md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				About
			</h3>

			<motion.img
				src={Headshot.src}
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className='-mb-20 md:mb-0 flex-shrink-0 h-80 w-80 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
			/>
		</div>
	);
}

export default About;
