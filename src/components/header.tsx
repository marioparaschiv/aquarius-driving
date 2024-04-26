function Header() {
	return <nav className='sticky h-18 flex px-5 py-3 items-center'>
		<div className='container flex h-14 items-center gap-4 p-0'>
			<div className='flex gap-6 font-semibold'>
				<a className='animate-underline' href='#home'>Home</a>
				<a className='animate-underline' href='#contact'>Contact Us</a>
			</div>
		</div>
	</nav>;
}

export default Header;