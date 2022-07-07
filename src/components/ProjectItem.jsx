import React from 'react'

const ProjectItem = ({ project: { id, title, description } }) => {
	return (
		<div className='solution_cards_box'>
			<div className='card solution_card'>
				<a href='#' className='mx-auto'>
					<div className='p-2'>
						<img
							// src={process.env.PUBLIC_URL + `/assets/img/projects/project-1.png`}
							src={process.env.PUBLIC_URL + `/assets/img/projects/${id}.png`}
							alt={title}
							style={{ height: '200px', width: 'auto' }}
						/>
					</div>
				</a>
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
		</div>
	)
}

export default ProjectItem
