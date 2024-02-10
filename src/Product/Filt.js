import React,{useState,useEffect} from 'react'
import { useFiltContext } from '../Context/filtContext'
// import { all } from 'axios';
import { TiTickOutline } from "react-icons/ti";
import PriceFormat from '../PriceFormat/PriceFormat';

function Filt({}) {
  const {filters:{text,category,color,maxPrice,price,minPrice},updateFilterValue,allProduct,filtBtn} = useFiltContext();
  const uniqData = (data,property) => {
    let newDta = data.map((e) => {
      return e[property];
    })
    if(property === 'colors'){
      newDta = newDta.flat();
    }
    return newDta = ['all',...new Set(newDta)];
    // console.log(newDta)
  }
  const onlyUniq = uniqData(allProduct,'category');
  const onlyComp = uniqData(allProduct,'company');
  const onlyColor = uniqData(allProduct,'colors');
  // const [tick,upTick] = useState(onlyColor[0]);

    console.log(onlyColor)
    // const onClorClick = (e) => {
    //   upTick(e)
    //   updateFilterValue();
    // }
    // useEffect(() => {
    //   upTick(onlyColor[0])
    // },[onlyColor])
  return (
    <div className='filter'>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="text" id="" placeholder='Search Here...' value={text} onChange={updateFilterValue} />
      </form>
      <div className="categ">
        <h2>Category:</h2>
        <div className="buttnList">
          {onlyUniq.map((e,i) => {
            return (
              <button key={i} name='category' value={e} onClick={updateFilterValue}>{e}</button>
            );
          })}
        </div>
        <div className="company">
        <h2>Company</h2>
          <select name="company" id=""  onClick={updateFilterValue}>
            {onlyComp.map((e,i) => {
              return <option key={i} name='company' value={e} >{e}</option>
            })}
          </select>
        </div>
        <div className="color">
          <h2>Color</h2>
          <div className="colrList">
            {onlyColor.map((e,i) => {
              if(e==='all'){
                  return(
                    <button key={i} name='color' value={e} className='allColr' onClick={updateFilterValue}  >
                   all
                </button>
                  );
                }
              return (
                <button key={i} name='color' value={e}  onClick={updateFilterValue} style={{backgroundColor:e}} >
                   {color === e ? <TiTickOutline className='tick'/> : null} 
                </button>
                
              )
            })}
          </div>
        </div>
        <div className="price">
          <h2>Price</h2>
          <PriceFormat price={price}/>
          <input type="range" name="price" id="" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
        </div>
        <button className='filtBtn' onClick={filtBtn}>Filter</button>
      </div>
    </div>
  )
}

export default Filt;
