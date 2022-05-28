import React from 'react'

const AboutSection = () => {
	return (
		<section id='about' className='about '>
			<div className='container py-5'>
				<div className='section-title'>
					<h2>My Story</h2>
				</div>
				<div className=' col-md-8 mx-auto '>
					<p className='lead fs-4' style={{ color: '#888888' }}>
						Kemal Emin is a self-taught web developer. He started coding at
						2018. Once he learned JavaScript He fell in love with Coding and
						he's been coding almost eveyday since then. So far he has built many
						projects for practice. you can see few of them here.
					</p>
					{/* <p>
    <a href='#' className='btn btn-secondary my-2'>
      Main call to action
    </a>
  </p> */}
				</div>
			</div>
		</section>
	)
}

export default AboutSection
