import React from 'react'

const MainSection = () => {
	return (
		<section id='hero' className='hero'>
			<div className='hero-container'>
				<div className='mx-auto text-center' style={{ paddingTop: '220px' }}>
					<h1 className='fw-light' style={{ color: '#7dff56' }}>
						WELCOME
					</h1>
					<p className='lead  fs-3' style={{ color: '#c5c5c5' }}>
						Kemal Emin, <span className='gold'>Web Developer</span>
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

export default MainSection
