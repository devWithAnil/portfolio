'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { LINKS } from '@/constants/links';

import { Logo } from '@/components/logo';
import SVGProvider from '@/components/svg-provider';

export const Navbar = () => {
	const [mounted, setMounted] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { theme, setTheme } = useTheme();

	function handleToggleTheme() {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	}

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<header className='fixed w-full z-50 bg-[var(--color-background)] transition-all duration-200'>
			<div className='container'>
				<div className='relative flex justify-between items-center h-16 md:h-20'>
					<div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
						<button
							className='inline-flex items-center p-2 rounded-md hover:shadow-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
							aria-label='Main menu'
							aria-expanded={isMenuOpen}
							type='button'
							onClick={() => setIsMenuOpen(prev => !prev)}
						>
							<SVGProvider name={isMenuOpen ? 'menu-open' : 'menu-closed'} />
						</button>
					</div>
					<div className='flex-1 flex items-center justify-center md:justify-start'>
						<div className='flex shrink-0 items-center'>
							<Link
								href='/'
								aria-label='Anil Yadav'
								className='inline-flex items-center p-2 space-x-2 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
							>
								<Logo className='h-8 w-8'/>
								<span className='hidden sm:block text-lg font-semibold text-[var(--color-text)]'>
									Anil Yadav
								</span>
							</Link>
						</div>
						<nav className='hidden md:flex md:ml-4'>
							{LINKS.map(({ name, href }) => (
								<Link key={name} href={href} className='ml-4 px-3 py-2 link underlined'>
									{name}
								</Link>
							))}
						</nav>
					</div>
					<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
						<button
							className='inline-flex items-center p-2 rounded-md hover:shadow-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out cursor-pointer'
							onClick={handleToggleTheme}
							type='button'
							aria-label='Theme Toggle'
						>
							<SVGProvider name={theme === 'light' ? 'sun' : 'moon'} />
							<span className='hidden lg:inline ml-2'>{`${
								theme === 'light' ? 'Light' : 'Dark'
							} Mode`}</span>
						</button>
					</div>
				</div>

				{/* Mobile menu dropdown */}
				{isMenuOpen && (
					<nav className='md:hidden bg-[var(--color-background)] border-t border-[var(--color-border)] px-4 py-3'>
						<ol className='flex flex-col gap-1'>
							{LINKS.map(({ name, href }) => (
								<li key={name}>
									<Link
										href={href}
										onClick={() => setIsMenuOpen(false)}
										className='block px-4 py-3 rounded-xl font-medium text-[var(--color-text-offset)] hover:text-[var(--color-text)] hover:bg-[var(--color-background-offset)] transition-all duration-150'
									>
										{name}
									</Link>
								</li>
							))}
						</ol>
					</nav>
				)}
			</div>
		</header>
	);
};
