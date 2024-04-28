function Header() {
	return <nav className='sticky h-18 flex px-5 py-3 items-center border-b md:border-none'>
		<div className='container flex h-14 items-center justify-center md:justify-start gap-6 p-0 font-semibold text-secondary-fg text-sm md:text-base'>
			{/* <h5 className='hidden md:block text-xl font-bold'>
				Aquarius Driving
			</h5>
			<div className='hidden md:block w-[1px] h-4 opacity-25 bg-black' /> */}
			<div className='flex gap-6'>
				<a className='animate-underline hover:text-primary-fg' href='#home'>Home</a>
				<a className='animate-underline hover:text-primary-fg' href='#about'>About</a>
				<a className='animate-underline hover:text-primary-fg' href='#contact'>Contact</a>
			</div>
		</div>
	</nav>;
}

export default Header;