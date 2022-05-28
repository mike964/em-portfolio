import React from 'react'
import ProjectsHeader from '../ProjectsHeader'

const ProjectsSection = () => {
	return (
		<section id='projects' className='projects'>
			<div className='album py-5 bg-light'>
				<div className='container'>
					<div className='section-title'>
						<h2>My Projects</h2>
						<p>
							Sit sint consectetur velit quisquam cupiditate impedit suscipit
							alias
						</p>
					</div>

					<ProjectsHeader />
					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
						<div className='col'>
							<div className='card shadow-sm'>
								<svg
									className='bd-placeholder-img card-img-top'
									width='100%'
									height={225}
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
									<p className='card-text'>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div className='d-flex justify-content-between align-items-center'>
										<button
											type='button'
											className='btn btn-sm btn-outline-secondary'>
											View
										</button>
										<small className='text-muted'>9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='card shadow-sm'>
								<svg
									className='bd-placeholder-img card-img-top'
									width='100%'
									height={225}
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
									<p className='card-text'>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div className='d-flex justify-content-between align-items-center'>
										<div className='btn-group'>
											<button
												type='button'
												className='btn btn-sm btn-outline-secondary'>
												View
											</button>
											<button
												type='button'
												className='btn btn-sm btn-outline-secondary'>
												Edit
											</button>
										</div>
										<small className='text-muted'>9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='card shadow-sm'>
								<svg
									className='bd-placeholder-img card-img-top'
									width='100%'
									height={225}
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
									<p className='card-text'>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div className='d-flex justify-content-between align-items-center'>
										<div className='btn-group'>
											<button
												type='button'
												className='btn btn-sm btn-outline-secondary'>
												View
											</button>
											<button
												type='button'
												className='btn btn-sm btn-outline-secondary'>
												Edit
											</button>
										</div>
										<small className='text-muted'>9 mins</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection
