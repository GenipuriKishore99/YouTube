import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='btn btn-secondary me-3'>{name}</button>
    </div>
  )
}

export default Button