import React from 'react'
import Down_black from '../icons/Down_black'
import Up_black from '../icons/Up_black'


function Toggle({title, isOpen, setIsOpen}) {

  function toggleIcon() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <div className='toggle' onClick={toggleIcon}>
        <b>{title}</b>
        <span>{ isOpen ? <Down_black className={'toggle-icon'}/> : <Up_black className={'toggle-icon'}/>}</span>
      </div>
    </div>
  )
}

export default Toggle 