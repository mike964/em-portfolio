import React from 'react'
import ProjectItem from '../ProjectItem'
import ProjectsHeader from '../ProjectsHeader'

const ProjectsSection = () => {
	const username = 'Moslm'
	const myProjects = [
		{
			id: 'p-01',
			title: 'E-commerce Store',
			description:
				'Online store built with React, Redux with many features : Prodect search, filters, router, shopping cart, user login and more',
			image: 'ecommerce-store',
			url: 'https://mike964.github.io/bemart/',
		},
		{
			id: 'p-02',
			title: 'Memory Game',
			description:
				'A Game built with React hooks to challenge user memory ability and improve retention.',
			image: 'memory-game',
			url: 'https://mike964.github.io/react-memory-game/',
		},
		{
			id: 'p-03',
			title: 'Pomodoro Timer',
			description:
				'A Timer app to help users focus on any task that requires deep focus, such as study, writing, or coding.',
			/*
        An online Pomodoro Timer to boost your productivity
        What is Pomofocus? 
        Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser.
        The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding.
        his app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.
        */
			image: 'pomodoro-app',
			url: 'https://mike964.github.io/pomodoro-timer/',
		},
		// {
		// 	id: 'p-04',
		// 	title: 'Flashcards App',
		// 	description:
		// 		'An app with main purpose of making  learning a language fun and enjoyable experience. Built with React, Redux , TypeScript',
		// 	image: 'flashcards-app',
		// 	url: ' ',
		// },
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
