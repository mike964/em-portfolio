// Get the navbar
// var navbar = document.getElementById('navbar')
var header = document.getElementById('header')

// Get the offset position of the navbar
// var sticky = navbar.offsetTop
var sticky = header ? header.offsetTop : ''

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
	if (header) {
		myFunction()
	}
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		// navbar.classList.add('sticky')
		header.classList.add('header-scrolled')
		// console.log(sticky)
		// console.log(window.pageYOffset)
	} else {
		// navbar.classList.remove('sticky')
		header.classList.remove('header-scrolled')
	}
}
