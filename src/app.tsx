import { FaMountainSun, FaCheck, FaArrowsLeftRight, FaAddressCard } from 'react-icons/fa6';
import { FaPoundSign } from 'react-icons/fa';
import Contact from '~/components/contact';
import Header from '~/components/header';
import Badge from '~/components/badge';
import { cn } from '~/utils';

function App() {
	return <div id='home' className='flex flex-col mb-10'>
		<Header />
		<div className='flex flex-col gap-12 mt-10 md:mt-20 w-full container md:align-middle'>
			<div className='flex md:flex-row flex-col-reverse justify-center md:justify-between items-center md:items-stretch gap-6'>
				<div className='flex flex-col justify-center gap-2 md:hidden w-full text-sm'>
					<Benefit name='DVSA Approved Female Instructor' />
					<Benefit name='DBS Checked' />
					<Benefit name='Competitive Prices' />
					<Benefit name='Manual Car' />
					<Benefit name='Discounted Block Bookings' />
					<Benefit name='Mock Tests' />
				</div>
				<div className='flex flex-col gap-12'>
					<div className='flex flex-col gap-2 text-center md:text-start'>
						<h1 className='flex items-center gap-4 font-semibold text-4xl sm:text-5xl'>
							Aquarius Driving Tuition
						</h1>
						<h2 className='font-semibold text-2xl text-secondary-fg sm:text-3xl'>
							Getting you in gear.
						</h2>
					</div>
					<div className='md:flex flex-col justify-center gap-2 hidden w-full'>
						<Benefit name='DVSA Approved Female Instructor' />
						<Benefit name='DBS Checked' />
						<Benefit name='Competitive Prices' />
						<Benefit name='Manual Car' />
						<Benefit name='Discounted Block Bookings' />
						<Benefit name='Mock Tests' />
					</div>
				</div>
				<img
					src='/img/car.png'
					loading='lazy'
					decoding='sync'
					className='md:w-[500px] lg:w-[700px] select-none hue-rotate-[var(--hue)] object-contain'
				/>
			</div>
			<div className='bg-secondary mx-auto w-11/12 h-[1px]' />
			<div id='about' className='flex md:flex-row flex-col gap-6 h-full text-center text-secondary-fg'>
				<div className='flex flex-col justify-start items-center gap-4 p-6 w-full min-w-64 h-full min-h-64'>
					<FaMountainSun className='text-brand' size={64} />
					<h2 className='font-semibold text-3xl text-primary-fg sm:text-4xl'>
						Wide Coverage
					</h2>
					<span className='text-pretty md:text-lg'>
						We offer manual lessons across multiple locations, including but not limited to <b>Enfield, Lower Edmonton, Palmers Green, Winchmore Hill, Oakwood, Southgate, and Barnet.</b> We provide door-to-door service, with options to pick you up from school or work for maximum convenience.
					</span>
				</div>
				<div className='flex flex-col justify-start items-center gap-4 p-6 w-full min-w-64 h-full min-h-64'>
					<div className='pound-icon'>
						<FaPoundSign className='text-brand' size={64} />
					</div>
					<h2 className='font-semibold text-3xl text-primary-fg sm:text-4xl'>
						Affordable
					</h2>
					<span className='text-pretty md:text-lg'>
						Our manual lessons are competitively priced to suit most budgets. We offer flexible lesson durations and packages, whether you're a beginner or need refresher courses. Quality instruction without breaking the bank.
					</span>
				</div>
				<div className='flex flex-col justify-start items-center gap-4 p-6 w-full min-w-64 h-full min-h-64'>
					<FaArrowsLeftRight className='text-brand' size={64} />
					<h2 className='font-semibold text-3xl text-primary-fg sm:text-4xl'>
						Flexible
					</h2>
					<span className='text-pretty md:text-lg'>
						Learn at your own pace with flexible scheduling and personalized instruction. Choose from 1-hour, 1.5-hour, or 2-hour sessions. We are patient and understanding and create a calm environment to build your driving confidence & skills.
					</span>
				</div>
			</div>
			<div className='mx-auto bg-border w-11/12 h-[1px]' />
			<Contact />
			<div className='mx-auto bg-border w-11/12 h-[1px]' />
			<div className='flex flex-col justify-center items-center gap-2'>
				<div className='flex flex-col justify-center items-center gap-4'>
					<div className='flex flex-col justify-between items-center gap-4'>
						<div className='bg-brand p-4 rounded-full w-fit text-white'>
							<FaAddressCard size={24} />
						</div>
						<a className='font-semibold text-secondary-fg hover:text-primary-fg animate-underline' href='tel:+447940484023'>
							+44 7940484023
						</a>
						<a className='font-semibold text-secondary-fg text-sm hover:text-primary-fg animate-underline' href='mailto:aquariusdrivingtuition@hotmail.com'>
							aquariusdrivingtuition@hotmail.com
						</a>
					</div>
				</div>
				<span className='my-4 bg-border w-24 h-[1px]' />
				<a className='animate-underline' href='https://marioparaschiv.com'>Valentin-Mario Paraschiv</a>
				© {new Date().getFullYear()} | All Rights Reserved.
			</div>
		</div>
	</div>;
}

function Benefit({ name, ...props }: { name: string; } & React.ComponentProps<'span'>) {
	return <span {...props} className={cn(props.className, 'flex items-center gap-2 text-lg font-medium')}>
		<Badge>
			<FaCheck size={14} />
		</Badge>
		{name}
	</span>;
}

export default App;