import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
function Star({str,rate}) {
    const starRate = Array.from({length:5},(e,i) => {
        let num = i + 1;
        return(
            <span key={i}>
                {
                    str>=i+1 ? <FaStar className='icn'/> : str>=num ? <FaStarHalfAlt className='icn'/> : <FaRegStar className='icn'/>
                }
            </span>
        );
    })
  return (
    <div className='str'>
    {starRate}
   <p>{rate} Customer Review</p>
    </div>
  )
}

export default Star
