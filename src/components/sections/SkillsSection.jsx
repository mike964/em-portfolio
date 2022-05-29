// import { Carousel } from '@trendyol-js/react-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const SkillsSection = () => {
	const items = [
		<SkillItem color='#1af250' title='HTML 5'>
			<img
				src='skill-icons/html-5.png'
				className='mx-auto'
				alt='html'
				style={{ height: '120px', width: '120px' }}
			/>
		</SkillItem>,
		<SkillItem color='#1a9cf2' />,
		<SkillItem color='#f21a1a' />,
		<SkillItem color='#ffd900' />,
		<SkillItem color='#1af250' />,
		<SkillItem color='#1a9cf2' />,
		<SkillItem color='#f21a1a' />,
		<SkillItem color='#ffd900' />,
	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4.5,
		slidesToScroll: 3,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	}

	return (
		<section id='skills' className='skills'>
			<div className='container'>
				<div className='section-title'>
					<h2>Skills</h2>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
						aliquid fuga eum quidem.
					</p>
				</div>
				<div className='row skills-content'>
					<div className='col-8 m-auto'>
						{/* Skills Slider */}
						<Slider {...settings}>{items}</Slider>
					</div>
				</div>
			</div>
		</section>
	)
}

const SkillItem = ({ children, color, title }) => {
	return (
		<div
			className='text-center'
			style={{ background: color, height: '150px', width: '150px' }}>
			<span className='title white'>{title}</span>
			{children}
		</div>
	)
}

function SampleNextArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'skyblue' }}
			onClick={onClick}
		/>
	)
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'skyblue' }}
			onClick={onClick}
		/>
	)
}

export default SkillsSection
