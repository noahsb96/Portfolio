import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
	skill: Skill;
};

function Skill({ skill }: Props) {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img
				initial={{
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				src={urlFor(skill?.image).url()}
				className='rounded-full border border-gray-500 object-cover w-15 h-15 md:w-24 md:h-24 xl:w-26 xl:h-26 filter group-hover:grayscale transition duration-300 ease-in-out'
			/>
			<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-15 h-15 sm:h-10 sm:w-10 md:w-24 md:h-24 xl:w-26 xl:h-26 rounded-full z-0'>
				<div className='flex items-center justify-center h-full'>
					<p className='text-3xl font-bold text-black opacity-100 sm:text-lg'>
						{skill.progress}%
					</p>
				</div>
			</div>
		</div>
	);
}

export default Skill;
