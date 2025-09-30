interface TopSectionProps {
	title: string
}

export default function TopSection({ title }: TopSectionProps) {
	return (
		<section
			id='topSection'
			className='container flex flex-col gap-5'>
			<div
				id='headingSearcher'
				className='flex justify-between flex-wrap gap-3'>
				<div className='flex items-start gap-2.5'>
					<h1 className='w-auto font-medium text-[1.625rem]'>{title}</h1>
					<p className='pt-0.5 font-nunito text-[#919191]'>(456)</p>
				</div>
				<form className='flex w-full md:w-[16.875rem]'>
					<input
						type='text'
						className={`pl-2.5 pr-8.5 py-[0.5625rem] w-full h-10 bg-white rounded-[0.3125rem] font-nunito text-[#585656] placeholder-[#585656] shadow-[0px_3px_20px_0px_#062D5E1A] bg-[url('/icons/search.png')] bg-no-repeat bg-position-[top_0.5625rem_right_0.625rem] focus:outline outline-[#062D5E2A]`}
						placeholder='Szukaj'
					/>
				</form>
			</div>
			<h2 className='font-nunito'>Wczesnoszkolni.pl - {title}</h2>
		</section>
	)
}
