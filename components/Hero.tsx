import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Headshot from '../images/Headshot.jpg';
import Image from 'next/image';

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: ["Hi, My Name's Noah", 'Developer', 'Designer', 'Creator'],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<Image
				className='relative rounded-full h-32 w-32 mx-auto object-cover'
				src={Headshot}
				alt=''
			/>
			<div>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
					Software Engineer
				</h2>
				<h1 className='text-5xl lg:text-6xl font-semibold px-10'>
					<span className='mr-3'>{text}</span>
					<Cursor cursorColor='#F7AB0A' />
				</h1>

				<div>
					<button className='heroButton'>Experience</button>
					<button className='heroButton'>Skills</button>
					<button className='heroButton'>Projects</button>
					<button className='heroButton'>About</button>
				</div>
			</div>
		</div>
	);
}
