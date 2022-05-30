import React from 'react'
import ContactForm from './ContactForm'

const ContactSection = () => {
	return (
		<section id='contact' className='contact'>
			<div className='container'>
				<div className='section-title'>
					<h2>Contact Me</h2>
					<p>
						Sit sint consectetur velit quisquam cupiditate impedit suscipit
						alias
					</p>
					<div className='row'>
						<div className='col-md-8 m-auto'>
							<div className='info-box'>
								<i className='bx bx-share-alt' />
								<h3>Social Profiles</h3>
								<div className='social-links'>
									<a href='#' className='twitter'>
										<i className='bi bi-twitter' />
									</a>
									<a href='#' className='facebook'>
										<i className='bi bi-facebook' />
									</a>
									<a href='#' className='google-plus'>
										<i className='bi bi-skype' />
									</a>
									<a href='#' className='linkedin'>
										<i className='bi bi-linkedin' />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-8 m-auto'>
							<div className='info-box my-4'>
								<div className=' '>
									<i className='bx bx-envelope' />
									<h3>Email Me</h3>
									<p>contact@example.com</p>
								</div>
								<ContactForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
