import React from 'react'

function WeatherTemp({tmn, tmx}) {
  return (
    <div className='weathertemp'>
      {/* porps할때 보내줄 값 tmn = 최저 기온 / tmx = 최고 기온 */}
      <span>{tmn}</span> 
      <span>{tmx}</span>
    </div>
  )
}

export default WeatherTemp