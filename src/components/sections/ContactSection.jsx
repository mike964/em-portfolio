import React from 'react'

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
								<form
									action='forms/contact.php'
									method='post'
									role='form'
									className='php-email-form'>
									<div className='row'>
										<div className='col-md-6 form-group'>
											<input
												type='text'
												name='name'
												className='form-control'
												id='name'
												placeholder='Your Name'
												required
											/>
										</div>
										<div className='col-md-6 form-group mt-3 mt-md-0'>
											<input
												type='email'
												className='form-control'
												name='email'
												id='email'
												placeholder='Your Email'
												required
											/>
										</div>
									</div>
									<div className='form-group mt-3'>
										<input
											type='text'
											className='form-control'
											name='subject'
											id='subject'
											placeholder='Subject'
											required
										/>
									</div>
									<div className='form-group mt-3'>
										<textarea
											className='form-control'
											name='message'
											rows={6}
											placeholder='Message'
											required
											defaultValue={''}
										/>
									</div>
									<div className='my-3'>
										<div className='loading'>Loading</div>
										<div className='error-message' />
										<div className='sent-message'>
											Your message has been sent. Thank you!
										</div>
									</div>
									<div className='text-center'>
										<button type='submit'>Send Message</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
