import Image from 'next/image'
import Link from 'next/link'

interface ProfileMenuItemProps {
	src: string
	label: string
	link: string
	isActive?: boolean
	onClick?: () => void
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({
	src,
	label,
	link,
	isActive = false,
	onClick,
}) => {
	const imageSrc = isActive
		? src.replace(/\/([^/]+)\.png$/, '/selected-$1.png')
		: src

	return (
		<Link
			href={link}
			passHref>
			<li
				className={`flex justify-start items-center px-2.5 py-[0.6875rem] gap-2.5 rounded-md hover:bg-[#F4F5F8] focus-visible:bg-white ${
					isActive ? 'bg-white hover:bg-white text-[#FF7700] font-bold' : ''
				}`}
				onClick={onClick}>
				<Image
					src={imageSrc}
					width={20}
					height={20}
					alt=''
					className='block max-w-5 max-h-5'
				/>
				{label}
			</li>
		</Link>
	)
}

export default ProfileMenuItem
