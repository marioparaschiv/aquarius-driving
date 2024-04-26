import { FaCheck } from 'react-icons/fa';
import Badge from '~/components/badge';
import Header from '~/components/header';

function App() {
	return <div className='flex flex-col'>
		<Header />
		<div className='container flex flex-col w-auto'>
			<h5 className='text-5xl font-bold'>
				Aquarius Driving
			</h5>
			<div className='flex w-full flex-col gap-2 justify-center'>
				<span className='flex items-center gap-2 text-lg font-semibold'>
					<Badge>
						<FaCheck size={14} />
					</Badge>
					DVSA Approved
				</span>
				<span className='flex items-center gap-2 text-lg font-semibold'>
					<Badge>
						<FaCheck size={14} />
					</Badge>
					DBS Checked
				</span>
				<span className='flex items-center gap-2 text-lg font-semibold'>
					<Badge>
						<FaCheck size={14} />
					</Badge>
					Competitive Prices
				</span>
				<span className='flex items-center gap-2 text-lg font-semibold'>
					<Badge>
						<FaCheck size={14} />
					</Badge>
					Discounted Block Bookings
				</span>
				<span className='flex items-center gap-2 text-lg font-semibold'>
					<Badge>
						<FaCheck size={14} />
					</Badge>
					Mock tests
				</span>
			</div>
			<div className='w-full overflow-visible'>
				<div id='hero' />
				<img width='500em' src='/img/car.png' />
			</div>
		</div>
	</div>;
}

export default App;