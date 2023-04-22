import React, { useState, useRef, useEffect } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';

type Props = {};

function ContactMe({}: Props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [confirmationMessage, setConfirmationMessage] = useState('');
	const form = useRef<HTMLFormElement>(null);

	useEffect(() => {
		setConfirmationMessage('');
	}, []);

	const handleInput = ({
		target,
	}: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = target;
		if (name === 'name') {
			setName(value);
		}
		if (name === 'email') {
			setEmail(value);
		}
		if (name === 'message') {
			setMessage(value);
		}
	};

	const checkInput = ({
		target,
	}: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = target;

		if (name === 'name') {
			if (value === '') {
				setErrorMessage('Name is required');
			}
		}
		if (name === 'email') {
			if (value === '') {
				setErrorMessage('Email is required');
			} else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value)) {
				setErrorMessage('You must enter a valid email');
			}
		}
		if (name === 'message') {
			if (value === '') {
				setErrorMessage('Message is required');
			}
		}
	};

	const sentEmail = () => {
		setName('');
		setEmail('');
		setMessage('');
		setConfirmationMessage(
			"Message sent. Thank you and I'll be in touch soon!"
		);
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)) {
			setErrorMessage('Invalid Email');
			return;
		}
		const formInfo = form.current ? form.current : '';

		emailjs
			.sendForm(
				'service_wu6mj7b',
				'template_hxo8y4h',
				formInfo,
				'6occcHkFY0IHAKc14'
			)
			.then(
				(result) => {
					sentEmail();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Contact
			</h3>

			<div className='flex flex-col space-y-10'>
				<h4 className='text-4xl font-semibold text-center'>
					I have got just what you need.{' '}
					<span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
				</h4>

				<div className='space-y-10'>
					<div className='flex items-center space-x-5 justify-center'>
						<PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>+1 (720) 338-4155</p>
					</div>

					<div className='flex items-center space-x-5 justify-center'>
						<EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>noahsb96@yahoo.com</p>
					</div>

					<div className='flex items-center space-x-5 justify-center'>
						<MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>Denver, CO</p>
					</div>
				</div>

				<form
					ref={form}
					onSubmit={sendEmail}
					className='flex flex-col space-y-2 w-fit mx-auto'>
					<div className='flex space-x-2'>
						<input
							name='name'
							type='text'
							value={name}
							onBlur={checkInput}
							onChange={handleInput}
							onClick={() => setErrorMessage('')}
							placeholder='Name'
							required
							className='contactInput'
						/>
						<input
							name='email'
							type='email'
							value={email}
							onChange={handleInput}
							onBlur={checkInput}
							onClick={() => setErrorMessage('')}
							placeholder='Email'
							required
							className='contactInput'
						/>
					</div>
					<textarea
						name='message'
						value={message}
						onBlur={checkInput}
						onClick={() => setErrorMessage('')}
						onChange={handleInput}
						className='contactInput'
					/>
					<button
						type='submit'
						className='bg-[#ba16ec] py-5 px-10 rounded-md text-black font-bold text-lg'>
						Submit
					</button>
					<div className='text-center text-2xl'>{errorMessage}</div>
					<div className='text-center text-2xl'>{confirmationMessage}</div>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
