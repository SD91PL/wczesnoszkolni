import TileCard from './TileCard'
import TileCardButton from './TileCardButton'

export default function TileSection() {
	return (
		<div className='container overflow-x-hidden'>
			<div className='flex flex-col justify-center items-center lg:flex-row lg:justify-around xl:justify-between flex-wrap'>
				<TileCard>
					<TileCardButton
						bgColor='bg-[#AD4EEC1A]'
						hoverWidth='14.4375rem'
						iconSrc='/pencil.png'
						label='Karty pracy'
					/>
				</TileCard>
				<TileCard>
					<TileCardButton
						bgColor='bg-[#4EA2EC1A]'
						hoverWidth='20.3125rem'
						iconSrc='/brush.png'
						label='Inspiracje plastyczne'
					/>
				</TileCard>
				<TileCard>
					<TileCardButton
						bgColor='bg-[#FF77001A]'
						hoverWidth='22.5625rem'
						iconSrc='/award.png'
						label='Dyplomy i podziękowania'
					/>
				</TileCard>
			</div>
		</div>
	)
}
