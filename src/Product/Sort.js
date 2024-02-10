import React from 'react'
import { IoMdList } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useFiltContext } from '../Context/filtContext';
function Sort() {
    const {flexView,flexBx,listBx,sorting} = useFiltContext();
  return (
    <div className='sort'>
      <div className="togg">
        <button className= {flexView ? 'grid activeflex' : 'grid'} onClick={() => flexBx()}><BsFillGrid3X3GapFill /></button>
        <button className={flexView ? 'grid' : 'grid activeflex'} onClick={() => listBx()}><IoMdList /></button>
      </div>
      <div className="total">
        <p>total product</p>
      </div>
      <div className="sort">
        <form action="">
          <select name="" id="" onClick={sorting}>
            <option value="low">lowest</option>
            <option value="high">highest</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>

          </select>
        </form>
      </div>
    </div>
  )
}

export default Sort
