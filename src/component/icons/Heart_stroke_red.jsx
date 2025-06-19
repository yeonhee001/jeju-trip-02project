import React from 'react'

function Heart_stroke_red({className}) {
  return (
    <div
      className={className}
      style={{
        width: '21px',
        height: '21px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <img
        src="/imgs/_icons/Heart_stroke_red.svg"
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain', 
          display: 'block',
        }}
      />
    </div>
  );
}

export default Heart_stroke_red