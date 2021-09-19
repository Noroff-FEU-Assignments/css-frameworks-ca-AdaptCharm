const Hamburger = ({ ...props }) => {
  return (
    <svg
      viewBox='0 0 30 23'
      width='30'
      height='23'
      stroke='currentColor'
      strokeWidth='2'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}
    >
      <defs>
        <clipPath id='clip-path'>
          <rect width='30' height='23' fill='none' />
        </clipPath>
      </defs>
      <g id='Hamburger' clipPath='url(#clip-path)'>
        <g transform='translate(-365.5 -26.5)'>
          <line
            id='Line_1'
            data-name='Line 1'
            x2='30'
            transform='translate(365.5 27.5)'
            fill='none'
            stroke='#767676'
            strokeWidth='2'
          />
        </g>
        <g transform='translate(-365.5 -19.5)'>
          <line
            id='Line_1-2'
            data-name='Line 1'
            x2='30'
            transform='translate(365.5 27.5)'
            fill='none'
            stroke='#767676'
            strokeWidth='2'
          />
        </g>
        <g transform='translate(-365.5 -12.5)'>
          <line
            id='Line_1-3'
            data-name='Line 1'
            x2='30'
            transform='translate(365.5 27.5)'
            fill='none'
            stroke='#767676'
            strokeWidth='2'
          />
        </g>
      </g>
    </svg>
  )
}

export default Hamburger
