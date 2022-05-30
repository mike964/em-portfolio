import React from 'react'
import { useState } from 'react'

const MoreAboutMe = () => {
	const [moreIsOpen, setMoreIsOpen] = useState(false)

	return (
		<div className='row' style={{ background: '#e8ecec' }}>
			<div className='col-md-8 col-lg-6 m-auto py-3'>
				<p className='text-center fs-4'>
					<a
						className='text-secondary  '
						data-bs-toggle='collapse'
						onClick={() => setMoreIsOpen(!moreIsOpen)}
						href='#collapseExample'
						role='button'
						aria-expanded='false'
						aria-controls='collapseExample'>
						More about Kemal
						<i class={`fas fa-angle-${moreIsOpen ? 'up' : 'down'} mx-2`}></i>
					</a>
				</p>
				<div className='collapse' id='collapseExample'>
					<div className='card card-body '>
						<div className='row'>
							<p>Full name : Moslım Shlaka &#40;Kemal&#41;</p>
							<p>Location : Turkey,Istanbul</p>
							<p>Nationality : Iraq</p>
							<p>Date of birth : 1998</p>
							<p>Languages: English , Arabic , Persian , Turkish </p>
							<p>Certificates : IELTS &#40;Egnlish Language&#41;</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MoreAboutMe
