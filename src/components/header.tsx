function Header() {
	return <nav className='sticky h-18 flex px-5 py-3 items-center'>
		<div className='container flex h-14 items-center gap-6 p-0'>
			<h5 className='hidden md:block text-xl font-bold'>
				Aquarius Driving
			</h5>
			<div className='hidden md:block w-[1px] h-4 opacity-25 bg-black' />
			<div className='flex gap-6 font-semibold'>
				<a className='animate-underline' href='#home'>Home</a>
				<a className='animate-underline' href='#contact'>Contact Us</a>
			</div>
		</div>
	</nav>;
}

export default Header;