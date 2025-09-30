import { ReactNode } from 'react'
import Image from 'next/image'

type TileCardProps = {
	children?: ReactNode
}

export default function TileCard({ children }: TileCardProps) {
	return (
		<div className='relative flex flex-col gap-15 mb-20 max-w-[23.125rem] min-h-[25rem]'>
			<div className='relative h-[17.5rem] rounded-[1.3125rem] overflow-hidden group'>
				<Image
					src='/Ins_BG.png'
					width={370}
					height={280}
					quality={100}
					alt=''
					className='transition-transform duration-500 ease-in-out group-hover:scale-105 object-cover h-[17.5rem]'
				/>
			</div>
			<div className='absolute top-9 left-0 flex justify-center w-full pointer-events-none'>
				<h2 className='font-medium text-white text-[1.375rem]'>
					Inspiracje plastyczne
				</h2>
			</div>
			<div className='absolute top-21 left-0 pointer-events-none'>
				<div className='flex justify-center items-center w-[23.125rem]'>
					<Image
						src='/owl.png'
						width={220}
						height={206}
						quality={100}
						alt=''
						className='object-cover h-[12.875rem]'
					/>
				</div>
			</div>
			{children}
		</div>
	)
}
