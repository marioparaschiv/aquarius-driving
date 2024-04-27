import { FaMountainSun, FaCheck, FaArrowsLeftRight } from 'react-icons/fa6';
import { FaPoundSign } from 'react-icons/fa';
import Contact from '~/components/contact';
import Header from '~/components/header';
import Badge from '~/components/badge';

function App() {
	return <div id='home' className='flex flex-col mb-10'>
		<Header />
		<div className='container flex flex-col md:align-middle w-full gap-12 mt-10 md:mt-20'>
			<div className='flex items-center md:items-stretch gap-6 justify-center md:justify-between flex-col-reverse md:flex-row'>
				<div className='flex flex-col gap-12'>
					<div className='flex flex-col gap-2 text-center md:text-start'>
						<h1 className='text-4xl sm:text-5xl font-semibold flex items-center gap-4'>
							Aquarius Driving School
						</h1>
						<h2 className='text-2xl sm:text-3xl text-secondary-fg font-semibold'>
							Getting you in gear.
						</h2>
					</div>
					<div className='hidden md:flex w-full flex-col gap-2 justify-center'>
						<Benefit name='DVSA Approved' />
						<Benefit name='DBS Checked' />
						<Benefit name='Competitive Prices' />
						<Benefit name='Discounted Block Bookings' />
						<Benefit name='Mock Tests' />
					</div>
				</div>
				<img
					src='/img/car.png'
					loading='eager'
					decoding='async'
					className='select-none w-[500px] lg:w-[700px] object-contain hue-rotate-[var(--hue)]'
				/>
			</div>
			<div className='h-[1px] w-11/12 bg-background-secondary mx-auto' />
			<div id='our-offer' className='flex flex-col md:flex-row gap-6 text-secondary-fg text-center h-full'>
				<div className='flex-col gap-4 min-w-64 p-6 min-h-64  flex items-center w-full h-full justify-start'>
					<FaMountainSun className='text-brand' size={64} />
					<h2 className='text-3xl sm:text-4xl text-primary-fg font-semibold'>
						Wide Coverage
					</h2>
					<span className='text-pretty'>
						We offer lessons across multiple locations, including but not limited to <b>Enfield, Lower Edmonton, Palmers Green, Winchmore Hill, Oakwood, Southgate, and Barnet.</b> We provide door-to-door service, with options to pick you up from school or work for maximum convenience.
					</span>
				</div>
				<div className='flex-col gap-4 min-w-64 p-6 min-h-64 flex items-center w-full h-full justify-start'>
					<FaPoundSign className='pound-icon text-brand' size={64} />
					<h2 className='text-3xl sm:text-4xl text-primary-fg font-semibold'>
						Affordable
					</h2>
					<span className='text-pretty'>
						Our lessons are competitively priced to suit any budget. We offer flexible lesson durations and packages, whether you're a beginner or need refresher courses. Quality instruction without breaking the bank.
					</span>
				</div>
				<div className='flex-col gap-4 min-w-64 p-6 min-h-64  flex items-center w-full h-full justify-start'>
					<FaArrowsLeftRight className='text-brand' size={64} />
					<h2 className='text-3xl sm:text-4xl text-primary-fg font-semibold'>
						Flexible
					</h2>
					<span className='text-pretty'>
						Learn at your own pace with flexible scheduling and personalized instruction. Choose from 1-hour, 1.5-hour, or 2-hour sessions. We are patient and understanding and create a calm environment to build your driving confidence.
					</span>
				</div>
			</div>
			<div className='h-[1px] w-11/12 bg-background-secondary mx-auto' />
			<Contact />
			<div className='h-[1px] w-11/12 bg-background-secondary mx-auto' />
			<div className='flex items-center justify-center gap-2 flex-col'>
				© {new Date().getFullYear()}
				<a className='animate-underline' href='https://marioparaschiv.com'>Valentin-Mario Paraschiv</a>
				All Rights Reserved.
			</div>
		</div>
	</div>;
}

function Benefit({ name }: { name: string; }) {
	return <span className='flex items-center gap-2 text-lg font-medium'>
		<Badge>
			<FaCheck size={14} />
		</Badge>
		{name}
	</span>;
}

export default App;