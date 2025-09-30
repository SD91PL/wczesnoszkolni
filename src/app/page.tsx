import TopSection from '@/components/TopSection'
import TileSection from '@/components/TileSection'

export default function Home() {
	return (
		<>
			<div className='flex flex-col gap-7.5'>
				<TopSection title='Materiały edukacyjne' />
				<TileSection />
			</div>
		</>
	)
}
