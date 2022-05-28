import React from 'react'
import ThemeSwitch from './ThemeSwitch'

// Header slide toolbar
const Toolbar = () => {
	return (
		<div className='header-slidebar d-flex p-2'>
			Dark mode
			<ThemeSwitch />
		</div>
	)
}

export default Toolbar
