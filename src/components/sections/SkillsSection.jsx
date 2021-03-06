import SkillsSlider from '../SkillsSlider'

const SkillsSection = () => {
	return (
		<section id='skills' className='skills'>
			<div className='container'>
				<div className='section-title'>
					<h2>Skills</h2>
					<p>
						You can see a list of frameworks and tools that I use to build full
						stack web applications.
					</p>
				</div>
				<div className='row skills-content mb-5'>
					<div className='col-md-12 col-lg-9 m-auto'>
						<SkillsSlider />
					</div>
				</div>
				<div className='row py-5'></div>
			</div>
		</section>
	)
}

export default SkillsSection
