import { useEffect } from 'react'

const Nav3 = () => {
	useEffect(() => {
		var header = document.getElementById('header')

		const navLinks = document.querySelectorAll('.nav-link')
		console.log(navLinks)

		// Get the offset position of the navbar
		// var sticky = navbar.offsetTop
		var sticky = header.offsetTop

		// When the user scrolls the page, execute myFunction
		window.onscroll = function () {
			myFunction()
			navbarlinksActive()

			// addActiveClass()
		}

		// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
		function myFunction() {
			if (window.pageYOffset > sticky) {
				header.classList.add('header-scrolled')
				// console.log(sticky)
				// console.log(window.pageYOffset)
			} else {
				header.classList.remove('header-scrolled')
			}
		}

		/**
		 * Easy on scroll event listener
		 */
		const select = (el, all = false) => {
			el = el.trim()
			if (all) {
				return [...document.querySelectorAll(el)]
			} else {
				return document.querySelector(el)
			}
		}

		/**
		 * Navbar links active state on scroll
		 */
		// let navbarlinks = select('#navbar .scrollto', true)
		const navbarlinksActive = () => {
			console.log('navbarlinksActive()')
			let position = window.scrollY + 200
			navLinks.forEach(navbarlink => {
				// console.log(navbarlink)
				console.log(navbarlink.hash)
				if (!navbarlink.hash) return
				let section = select(navbarlink.hash)
				console.log(section)
				if (!section) return
				if (
					position >= section.offsetTop &&
					position <= section.offsetTop + section.offsetHeight
				) {
					navbarlink.classList.add('active')
				} else {
					navbarlink.classList.remove('active')
				}
			})
		}
		window.addEventListener('load', navbarlinksActive)
	}, [])

	return (
		<header id='header' className='fixed-top header-transparent'>
			<nav id='navbar' className='navbar  '>
				<ul>
					<li className='nav-li'>
						<a className='nav-link scrollto active' href='#hero'>
							Home
						</a>
					</li>
					<li className='nav-li'>
						<a className='nav-link scrollto' href='#about'>
							About
						</a>
					</li>
					<li className='nav-li'>
						<a className='nav-link scrollto' href='#skills'>
							Skills
						</a>
					</li>
					<li className='nav-li'>
						<a className='nav-link scrollto' href='#projects'>
							Projects
						</a>
					</li>
					<li className='nav-li'>
						<a className='nav-link scrollto' href='#contact'>
							Contact
						</a>
					</li>
					{/* <li className='nav-li dropdown '>
						<a className='nav-link' href='/'>
							<span>English</span> <i className='bi bi-chevron-down' />{' '}
						</a>
					</li> */}
				</ul>
			</nav>
		</header>
	)
}

export default Nav3
