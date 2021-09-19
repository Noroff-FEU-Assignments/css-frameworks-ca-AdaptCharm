const MapMarker = ({ ...props }) => {
  return (
    <svg
      viewBox='0 0 25.5 34'
      width='25.5'
      height='34'
      fill='currentColor'
      shapeRendering='geometricPrecision'
      {...props}
    >
      <path d='M11.44,33.314C1.791,19.326,0,17.891,0,12.75a12.75,12.75,0,0,1,25.5,0c0,5.141-1.791,6.576-11.44,20.564a1.594,1.594,0,0,1-2.621,0Zm1.31-15.252A5.312,5.312,0,1,0,7.437,12.75,5.312,5.312,0,0,0,12.75,18.062Z' />
    </svg>
  )
}

export default MapMarker
