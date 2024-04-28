import Input from '~/components/input';
import { cn } from '~/utils';

function Contact(props: React.ComponentProps<'div'>) {
	return <div {...props} id='contact' className={cn('flex flex-col w-full gap-4 h-full items-center', props.className)}>
		<h1 className='text-4xl lg:text-5xl text-center font-semibold mb-6'>
			Get in Contact.
		</h1>
		<div className='flex flex-col w-full gap-4 h-full items-center lg:max-w-[66.67%]'>
			<div className='flex gap-4 w-full'>
				<Input type='text' placeholder='First Name' />
				<Input type='text' placeholder='Last Name' />
			</div>
			<div className='flex gap-4 w-full'>
				<Input type='text' placeholder='Email' />
				<Input type='text' placeholder='Phone Number' />
			</div>
			<textarea className='w-full rounded-md p-3 border outline-none transition- focus:ring' placeholder='Message' />
			<button className='rounded-md border px-12 py-2 duration-200 ease-in transition-colors w-full hover:bg-secondary'>
				Submit
			</button>
		</div>
	</div>;
}

// TODO:
{/* <div className='flex flex-col gap-8 justify-center'>
				<div className='flex flex-row gap-4 items-center'>
					<div className='bg-brand w-fit text-white rounded-full p-4'>
						<FaPhone size={24} />
					</div>
					<a className='animate-underline hover:text-primary-fg' href='phone:+447940484023'>
						+44 7940484023
					</a>
				</div>
				<div className='flex flex-row gap-4 items-center'>
					<div className='bg-brand w-fit text-white rounded-full p-4'>
						<FaEnvelope size={24} />
					</div>
					<a className='animate-underline hover:text-primary-fg' href='phone:+447940484023'>
						aquariusdrivingtuition@hotmail.com
					</a>
				</div>
			</div> */}

export default Contact;