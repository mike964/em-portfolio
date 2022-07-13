import React from 'react'

const Footer = () => {
	const quotes = [
		'Strive not to be a success, but rather to be a man of value.',
		'A person who never made a mistakes never tried anything new.',
		'Life is like riding a bicycle. To keep your balance, you must keep moving.',
		"It's not that I'm so smart, it's just that I stay with problems longer.",
		// "If you can't explain it simply, you don't understand it well enough."
	]
	const author = 'Albert Einstein'

	// var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

	return (
		<footer id='footer'>
			<div className='container'>
				<div className='mb-5'>
					<figure style={{ color: '#6c6c6c' }}>
						<blockquote class='blockquote'>
							<p>{randomQuote}</p>
						</blockquote>
						<figcaption class='blockquote-footer'>{author}</figcaption>
					</figure>
				</div>

				<div className='copyright'>© Copyright . All Rights Reserved</div>
				<div className='credits'>
					{/* All the links in the footer should remain intact. */}
					{/* You can delete the links only if you purchased the pro version. */}
					{/* Licensing information: https://bootstrapmade.com/license/ */}
					{/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/ */}
					Designed by{' '}
					<a
						href='https://github.com/mike964'
						target='_blank'
						rel='noreferrer'
						className='github'>
						@mike964
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
