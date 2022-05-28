import React from 'react'

const Navbar2 = () => {
	return (
		<nav className='navbar navbar-dark sticky-top' id='navbar'>
			<ul className='navbar-nav '>
				<li className='nav-item'>
					<a className='nav-link' href='/'>
						{' '}
						Home
					</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='/'>
						{' '}
						About
					</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='/'>
						{' '}
						Skills
					</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='/'>
						Projects
					</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='/'>
						Contact
					</a>
				</li>
				<li className='nav-item dropdown'>
					<a className='nav-link' href='/'>
						English
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar2
