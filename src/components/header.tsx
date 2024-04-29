function Header() {
	return <nav className='sticky flex items-center px-5 py-3 border-b md:border-none h-20'>
		<div className='flex justify-center md:justify-start items-center gap-6 p-0 h-14 font-semibold text-secondary-fg text-sm md:text-base container'>
			{/* <h5 className='md:block hidden font-bold text-xl'>
				Aquarius Driving
			</h5>
			<div className='md:block hidden bg-black opacity-25 w-[1px] h-4' /> */}
			<div className='flex gap-6'>
				<a className='hover:text-primary-fg animate-underline' href='#home'>Home</a>
				<a className='hover:text-primary-fg animate-underline' href='#about'>About</a>
				<a className='hover:text-primary-fg animate-underline' href='#contact'>Contact</a>
			</div>
		</div>
	</nav>;
}

export default Header;