import React from 'react'
import ContactForm from './ContactForm'

const ContactSection = () => {
	return (
		<section id='contact' className='contact'>
			<div className='container'>
				<div className='section-title'>
					<h2>Contact Me</h2>
					<p>Send me and email or contact me on my social media accounts</p>
					<div className='row'>
						<div className='col-md-8 m-auto'>
							<div className='info-box'>
								<i className='bx bx-share-alt' />

								<h3>Find me on</h3>
								<div className='social-links mb-5'>
									<a
										href='https://facebook.com/em964'
										className='facebook'
										target='_blank'
										rel='noreferrer'>
										<i className='bi bi-facebook' />
									</a>
									<a
										href='https://www.linkedin.com/in/em964'
										className='linkedin'
										target='_blank'
										rel='noreferrer'>
										<i className='bi bi-linkedin' />
									</a>
									<a
										href='https://github.com/mike964'
										target='_blank'
										rel='noreferrer'
										className='github'>
										<i className='bi bi-github' />
									</a>

									{/* <a href='#' className='twitter'>
										<i className='bi bi-twitter' />
									</a> */}
								</div>
								<div className=' my-4'>
									<div className=' '>
										<i className='bx bx-envelope' />
										<h3>Email me at</h3>
										<p>moslm9647@gmail.com</p>
									</div>
									{/* <ContactForm /> */}
								</div>
							</div>
						</div>
					</div>
					<div className='row'></div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
