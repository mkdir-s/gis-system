import React from 'react'

const SubmitButton = ({onClick}: {onClick: () => void}) => {
  return (
    <button className='hero__button' onClick={onClick}>Отправить</button>
  )
}

export default SubmitButton