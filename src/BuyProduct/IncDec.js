import React from 'react'
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";


function IncDec({amon,inca,deca}) {
  return (
    <div className='add'>
      <FiMinus className='inc' onClick={() => deca()}/>
      <h4>{amon}</h4>
      <GoPlus className='dec' onClick={() => inca()}/>
    </div>
  )
}

export default IncDec
