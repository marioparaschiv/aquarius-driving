import { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import Badge from '~/components/badge';
import Header from '~/components/header';
import HueSlider from '~/components/hue-slider';

function App() {
	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'F7') {

			}
		}

		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, []);

	return <div className='flex flex-col'>
		<Header />
		<div className='container flex flex-col md:align-middle w-full gap-12 mt-20'>
			<div className='flex items-stretch justify-between'>
				<div className='flex flex-col gap-12 '>
					<h5 className='text-5xl font-bold'>
						Getting you in gear.
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
							Mock Tests
						</span>
					</div>
				</div>
				<img
					width='500em'
					src='/img/car.png'
					className='hue-rotate-[var(--hue)]'
				/>
			</div>
			<div>
				<HueSlider />
			</div>
		</div>
	</div>;
}

export default App;