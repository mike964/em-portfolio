import React from 'react'

const Footer = () => {
	return (
		<footer id='footer'>
			<div className='container'>
				<p>
					Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
					eligendi fuga maxime saepe commodi placeat.
				</p>

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
