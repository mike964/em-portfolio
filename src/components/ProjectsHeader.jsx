import React from 'react'

const ProjectsHeader = () => {
	return (
		<div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
			<div className='btn-toolbar mb-2 mb-md-0'>
				<div className='btn-group me-2'>
					<button type='button' className='btn btn-sm btn-outline-secondary'>
						Share
					</button>
					<button type='button' className='btn btn-sm btn-outline-secondary'>
						Export
					</button>
				</div>
				<button
					type='button'
					className='btn btn-sm btn-outline-secondary dropdown-toggle'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width={24}
						height={24}
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
						className='feather feather-calendar align-text-bottom'
						aria-hidden='true'>
						<rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
						<line x1={16} y1={2} x2={16} y2={6} />
						<line x1={8} y1={2} x2={8} y2={6} />
						<line x1={3} y1={10} x2={21} y2={10} />
					</svg>
					This week
				</button>
			</div>
		</div>
	)
}

export default ProjectsHeader
