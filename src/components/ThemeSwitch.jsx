import React, { useState } from 'react'

const ThemeSwitch = () => {
	const [isChecked, setIsChecked] = useState(false)

	let trans = () => {
		document.body.classList.add('transition')
		window.setTimeout(() => {
			document.body.classList.remove('transition')
		}, 400)
	}

	const handleCheckbox = e => {
		setIsChecked(!isChecked)
		// console.log('checkbox changed.')
		if (isChecked) {
			trans()
			document.body.setAttribute('data-theme', 'dark')
		} else {
			trans()
			document.body.setAttribute('data-theme', 'light')
		}
	}

	return (
		<div className='toggle-container'>
			<input
				type='checkbox'
				className='theme-switch'
				name='theme'
				id='darkSwitch'
				checked={isChecked}
				// onChange={e => {   console.log(e.target) 	}}
				onChange={handleCheckbox}
			/>
			<label htmlFor='darkSwitch'>Dark Mode</label>
		</div>
	)
}

export default ThemeSwitch
