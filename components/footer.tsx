import { Logo } from './logo';

export const Footer = () => {
	return (
		<footer className='bg-background-offset px-2 py-12 mt-24 text-center w-full'>
			<div className='container'>
				<div className='inline-flex items-center p-2 space-x-2 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'>
					<Logo className='h-8 w-8' />
					<span className='text-lg font-semibold'>Anil Yadav</span>
				</div>
				<ul className='flex flex-wrap gap-4 md:gap-6 justify-center items-center text-sm md:text-base font-semibold mt-4'>
					<a
						href='https://github.com/devWithAnil'
						className='link'
						target='_blank'
						rel='noopener noreferrer'
					>
						Github
					</a>
					<a
						href='https://topmate.io/anil_yadav/'
						className='link'
						target='_blank'
						rel='noopener noreferrer'
					>
						Topmate
					</a>
					<a
						href='https://www.linkedin.com/in/anil-yadav-1bb430187/'
						className='link'
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</a>
					<a
						href='https://www.behance.net/Sibasish19'
						className='link'
						target='_blank'
						rel='noopener noreferrer'
					>
						Behance
					</a>
					<a
						href='https://twitter.com/iamanilky'
						className='link'
						target='_blank'
						rel='noopener noreferrer'
					>
						Twitter
					</a>
				</ul>
				<p className='text-sm md:text-base mt-10'>
					&copy; 2024-present. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};