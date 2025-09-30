'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import ProfileMenuItem from '@/UI/ProfileMenuItem'

export default function TopBar() {
	const [activeItem, setActiveItem] = useState<string>('')
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false)

	useEffect(() => {
		setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)

		const handleClickOrTouchOutside = (event: MouseEvent | TouchEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOrTouchOutside)
		document.addEventListener('touchstart', handleClickOrTouchOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOrTouchOutside)
			document.removeEventListener('touchstart', handleClickOrTouchOutside)
		}
	}, [])

	const toggleMenuMobile = () => {
		if (isTouchDevice) setIsMenuOpen(prev => !prev)
	}

	const toggleMenu = () => {
		setIsMenuOpen(prev => !prev)
	}

	const openMenuDesktop = () => {
		if (!isTouchDevice) setIsMenuOpen(true)
	}

	const closeMenuDesktop = () => {
		if (!isTouchDevice) setIsMenuOpen(false)
	}

	return (
		<header className='sticky top-0 flex justify-between py-[0.5625rem] px-5 bg-white shadow-[0px_2px_4px_0px_#062D5E1A] font-nunito font-normal z-50'>
			<Link href='/'>
				<Image
					src='/Logo.png'
					width={190}
					height={46}
					quality={100}
					alt='WczesnoSzkolni.pl'
					className='block min-w-[11.875rem]'
				/>
			</Link>
			<nav
				ref={menuRef}
				id='profile'
				onMouseEnter={openMenuDesktop}
				className='absolute top-[0.5625rem] right-5 flex flex-col gap-[1.875rem] w-[6.625rem] sm:w-[19.375rem]'>
				<button
					id='profileAvatar'
					onClick={toggleMenuMobile}
					onKeyDown={e => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault()
							toggleMenu()
						}
					}}
					className='flex justify-end items-center py-1 gap-2'>
					<Image
						src='/avatar.png'
						width={39}
						height={39}
						alt='avatar'
						className='block max-h-10 max-w-10'
					/>
					<p className='hidden sm:block'>Basia</p>
					<Image
						src='/Arrow.png'
						width={8}
						height={6}
						alt='avatar'
						className='block max-h-1.5 max-w-2'
					/>
				</button>
				<div
					id='profileMenu'
					onMouseLeave={closeMenuDesktop}
					className={`fixed top-[5.25rem] right-[1.25rem] p-5 w-[19.375rem] bg-white rounded-md shadow-[0px_20px_50px_0px_#062D5E1A] transition-opacity duration-200 ${
						isMenuOpen
							? 'opacity-100 pointer-events-auto'
							: 'opacity-0 pointer-events-none'
					}`}>
					<ul className='flex flex-col text-[#686868]'>
						{[
							{
								src: '/menu/moje-kolekcje.png',
								label: 'Moje kolekcje',
								link: '/',
							},
							{ src: '/menu/pobrania.png', label: 'Pobrania', link: '/' },
							{ src: '/menu/edytuj-dane.png', label: 'Edytuj dane', link: '/' },
							{
								src: '/menu/historia-platnosci.png',
								label: 'Historia płatności',
								link: '/',
							},
							{ src: '/menu/zmien-haslo.png', label: 'Zmień hasło', link: '/' },
						].map(item => (
							<ProfileMenuItem
								key={item.label}
								src={item.src}
								label={item.label}
								link={item.link}
								isActive={activeItem === item.label}
								onClick={() => setActiveItem(item.label)}
							/>
						))}
						<hr className='my-2.5 border-[#E3E3E3]' />
						<ProfileMenuItem
							src='/menu/wyloguj-sie.png'
							label='Wyloguj się'
							link='/'
							isActive={activeItem === 'Wyloguj się'}
							onClick={() => setActiveItem('Wyloguj się')}
						/>
					</ul>
				</div>
			</nav>
		</header>
	)
}
