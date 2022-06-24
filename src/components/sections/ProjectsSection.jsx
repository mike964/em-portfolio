import React from 'react'
import ProjectItem from '../ProjectItem'
import ProjectsHeader from '../ProjectsHeader'

const ProjectsSection = () => {
	const myProjects = [
		{
			title: 'Ecommerce Store',
			description:
				'Online store built with React, Redux... with many features , prodect search , filters, user login and more',
			image: '',
			url: ' ',
		},
		{
			title: 'Memory Game',
			description:
				'A Game built with React hooks , with many features , prodect search , filters, user login and more',
			image: '',
			url: ' ',
		},
		{
			title: 'Flashcards App',
			description:
				'An app with main purpose of making learning languages fun and enjoyable experience Build with React, Redux , TypeScript',
			image: '',
			url: ' ',
		},
	]
	return (
		<section id='projects' className='projects bg-light'>
			<div className='container'>
				<div className='section-title'>
					<h2>My Projects</h2>
					<p>Projects developed by Kemal</p>
				</div>

				{/* <ProjectsHeader /> */}

				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
					{myProjects.map(project => (
						<div className='col'>
							<ProjectItem project={project} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection
