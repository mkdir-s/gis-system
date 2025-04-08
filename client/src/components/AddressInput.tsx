import React from 'react'

const AddressInput = ({value, onChange}: {value: string, onChange: (value: string) => void}) => {
  return (
    <input className='hero__address' type="text" placeholder='Введите адрес' value={value} onChange={(e) => onChange(e.target.value)} />
  )
}

export default AddressInput