import Input from '~/components/input';
import { cn } from '~/utils';

function Contact(props: React.ComponentProps<'div'>) {
	return <div {...props} id='contact' className={cn('flex flex-col w-full gap-4 h-full items-center', props.className)}>
		<h1 className='mb-6 font-semibold text-4xl text-center lg:text-5xl'>
			Get in Contact.
		</h1>
		<div className='flex flex-col items-center gap-4 w-full lg:max-w-[66.67%] h-full'>
			<div className='flex gap-4 w-full'>
				<Input type='text' placeholder='First Name' />
				<Input type='text' placeholder='Last Name' />
			</div>
			<div className='flex gap-4 w-full'>
				<Input type='text' placeholder='Email' />
				<Input type='text' placeholder='Phone Number' />
			</div>
			<textarea className='p-3 border rounded-md w-full transition-all outline-none focus:ring' placeholder='Message' />
			<button className='hover:bg-secondary px-12 py-2 border rounded-md w-full transition-colors duration-200 ease-in'>
				Submit
			</button>
		</div>
	</div>;
}

// TODO:
{/* <div className='flex flex-col justify-center gap-8'>
				<div className='flex flex-row items-center gap-4'>
					<div className='bg-brand p-4 rounded-full w-fit text-white'>
						<FaPhone size={24} />
					</div>
					<a className='hover:text-primary-fg animate-underline' href='phone:+447940484023'>
						+44 7940484023
					</a>
				</div>
				<div className='flex flex-row items-center gap-4'>
					<div className='bg-brand p-4 rounded-full w-fit text-white'>
						<FaEnvelope size={24} />
					</div>
					<a className='hover:text-primary-fg animate-underline' href='phone:+447940484023'>
						aquariusdrivingtuition@hotmail.com
					</a>
				</div>
			</div> */}

export default Contact;