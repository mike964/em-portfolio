import MainSection from './components/sections/MainSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import AboutSection from './components/sections/AboutSection'
import Nav3 from './components/Nav3'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/Footer'

function App() {
	return (
		<div id='abcc'>
			<Nav3 />
			<MainSection />
			<main id='main'>
				<AboutSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
			</main>
			<Footer />
		</div>
	)
}

export default App
