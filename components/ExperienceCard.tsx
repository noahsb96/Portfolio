import React from 'react';
import Petes from '../images/Petes.jpg';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

function ExperienceCard({}: Props) {
	return (
		<article>
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
		</article>
	);
}

export default ExperienceCard;
