import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Header1 = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0'>
			<a className='navbar-brand p-0'>
				<h1 className='m-0'>Welcome</h1>
				{/* <img src="img/logo.png" alt="Logo"> */}
			</a>

			<button
				className='navbar-toggler'
				type='button'
				data-bs-toggle='collapse'
				data-bs-target='#navbarCollapse'>
				<span className='fa fa-bars' />
			</button>
			<div className='collapse navbar-collapse' id='navbarCollapse'>
				<div className='navbar-nav mx-auto py-0'>
					<a href='#home' className='nav-item nav-link active'>
						Home
					</a>
					<a href='#about' className='nav-item nav-link'>
						About
					</a>
					<a href='#feature' className='nav-item nav-link'>
						Feature
					</a>
					<a href='#pricing' className='nav-item nav-link'>
						Pricing
					</a>
					<a href='#review' className='nav-item nav-link'>
						Review
					</a>
					<a href='#contact' className='nav-item nav-link'>
						Contact
					</a>
				</div>
			</div>
			<ThemeSwitch />
		</nav>
	)
}

export default Header1
