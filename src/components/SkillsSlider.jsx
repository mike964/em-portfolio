import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const SkillsSlider = () => {
	const mySkills = [
		{ id: 101, name: 'html', title: 'HTML 5', level: 'proficient' },
		{
			id: 102,
			name: 'css',
			title: 'CSS 3',
			// color: '#1a9cf2',
			level: 'proficient',
		},
		{
			id: 103,
			name: 'js',
			title: 'JavaScript',
			// color: '#13e436',
			level: 'proficient',
		},
		{
			id: 104,
			name: 'sass',
			title: 'Sass',
			color: '#700a8a',
			level: 'competent',
		},
		{
			id: 105,
			name: 'git',
			title: 'Git',
			color: '#232a8f',
			level: 'competent',
		},
		{ id: 106, name: 'react', title: 'React JS', level: 'proficient' },
		{
			id: 107,
			name: 'redux',
			title: 'Redux JS',
			color: '#23ffcf',
			level: 'proficient',
		},
		{ id: 108, name: 'ts', title: 'TypeScript', level: 'competent' },
		{
			id: 109,
			name: 'nodejs',
			title: 'Node JS',
			color: '#0a8a35',
			level: 'competent',
		},
		{ id: 110, name: 'mongodb', title: 'MongoDB', level: 'competent' },
		// {id : 103 , name : 'mysql' , title : 'MySQL' , level : 'competent'},
		// {id : 103 , name : 'postgresql' , title : 'PostgreSQL' , level : 'competent'},
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
		<Slider {...settings}>
			{mySkills.map(item => (
				<SkillItem key={item.id} skill={item} color={item.color} />
			))}
		</Slider>
	)
}

const SkillItem = ({ color = '#0d8fe6', skill }) => {
	return (
		<div
			className='text-center'
			style={{ background: color, height: '150px', width: '150px' }}>
			<span className='title white fs-5'>{skill.title}</span>
			<img
				src={`skill-icons/${skill.name}.png`}
				className='mx-auto'
				alt='html'
				style={{ height: '115px', width: 'auto' }}
			/>
		</div>
	)
}

function SampleNextArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		/>
	)
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block' }}
			onClick={onClick}>
			{/* <i class='bi bi-caret-left-fill'></i> */}
		</div>
	)
}

export default SkillsSlider
