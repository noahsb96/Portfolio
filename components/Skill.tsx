import React from 'react';
import { motion } from 'framer-motion';
import ReactIcon from '../images/ReactIcon.png';

type Props = {
	directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img
				initial={{
					x: directionLeft ? -200 : 200,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				src={ReactIcon.src}
				className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 sl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
			/>
			<div>
				<div>
					<p>100%</p>
				</div>
			</div>
		</div>
	);
}

export default Skill;
