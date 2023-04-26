import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircles({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
				borderRadius: ['20%', '20%', '50%', '80%', '20%'],
			}}
			transition={{ duration: 2.5 }}
			className='relative flex justify-center items-center'>
			<div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
			<div className='rounded-full border border-[#333333] h-[300px] w-[300px] opacity-40 absolute mt-52 sm:h-[100px] sm:w-[100px]' />
			<div className='rounded-full border border-[#333333] opacity-40 h-[500px] w-[500px] absolute mt-52 sm:h-[200px] sm:w-[200px]' />
			<div className='rounded-full border border-[#ba16ec] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse sm:h-[300px] sm:w-[300px]' />
			<div className='rounded-full border border-[#333333] opacity-40 h-[800px] w-[800px] absolute mt-52 sm:h-[400px] sm:w-[400px]' />
		</motion.div>
	);
}

export default BackgroundCircles;
