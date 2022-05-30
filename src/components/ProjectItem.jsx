import React from 'react'

const ProjectItem = ({ project: { title, description } }) => {
	return (
		<div className='card shadow-sm'>
			<svg
				className='bd-placeholder-img card-img-top'
				width='100%'
				height='{225}'
				xmlns='http://www.w3.org/2000/svg'
				role='img'
				aria-label='Placeholder: Thumbnail'
				preserveAspectRatio='xMidYMid slice'
				focusable='false'>
				<title>Placeholder</title>
				<rect width='100%' height='100%' fill='#55595c' />
				<text x='50%' y='50%' fill='#eceeef' dy='.3em'>
					Thumbnail
				</text>
			</svg>
			<div className='card-body'>
				<h5 class='card-title'>{title}</h5>
				<p className='card-text'>{description}</p>
				<div className='text-center'>
					<div className='btn-group  ds-flex   '>
						<a type='button' className='card-link'>
							<i className='fas fa-desktop' /> Live demo
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectItem
