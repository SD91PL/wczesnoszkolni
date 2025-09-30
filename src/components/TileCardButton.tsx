import Image from 'next/image'

interface TileCardButtonProps {
	bgColor?: string
	hoverWidth?: string
	iconSrc: string
	label: string
}

export default function TileCardButton({
	bgColor,
	hoverWidth,
	iconSrc,
	label,
}: TileCardButtonProps) {
	return (
		<div
			className={`relative inline-flex justify-start items-center p-[0.9375rem] gap-5 group cursor-pointer ${hoverWidth}`}>
			<div
				className={`absolute top-0 left-0 w-[3.75rem] h-[3.75rem] rounded-full transition-[width] duration-300 ${bgColor} group-hover:w-[var(--hover-width)]`}
				style={{ ['--hover-width' as string]: hoverWidth }}></div>
			<Image
				src={iconSrc}
				width={30}
				height={30}
				alt=''
			/>
			<p className='ml-4 text-[#202020] text-xl font-medium'>{label}</p>
		</div>
	)
}
