import React from 'react'
import ProjectItem from '../ProjectItem'
import ProjectsHeader from '../ProjectsHeader'

const ProjectsSection = () => {
	const username = 'Moslm'
	const myProjects = [
		{
			id: 'p01',
			title: 'E-commerce Store',
			description:
				'Online store built with React, Redux... with many features , prodect search , filters, user login and more',
			image: 'ecommerce-store',
			url: ' ',
		},
		{
			id: 'p02',
			title: 'Memory Game',
			description:
				'A Game built with React hooks , with features such as prodect search , filters, user login and more',
			image: 'memory-game',
			url: ' ',
		},
		{
			id: 'p03',
			title: 'Flashcards App',
			description:
				'An app with main purpose of making  learning a language fun and enjoyable experience. Built with React, Redux , TypeScript',
			image: 'flashcards-app',
			url: ' ',
		},
	]
	return (
		<section id='projects' className='projects bg-light'>
			<div className='container'>
				<div className='section-title'>
					<h2>My Projects</h2>
					<p>Projects developed by {username}</p>
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
