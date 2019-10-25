import React from 'react'

const SelectDepArr = () => {
  return (
    <div>
      <select className='selectDepArr' name='selectDepArr' id='selectDepArr'>
        <option value='departure'>
          Départ à
        </option>
        <option value='arrival'>
          Arrivée à
        </option>
      </select>
    </div>
  )
}

export default SelectDepArr
