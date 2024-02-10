import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context/prodContext';
import PriceFormat from '../PriceFormat/PriceFormat';
import '../BuyProduct/BuyProduct.css';
import Images from './Images';
import Star from './Star';
import AddCart from './AddCart';

const ourApi = `https://api.pujakaitem.com/api/products`;
function BuyProduct() {
  const {id} = useParams();
  const {getCardData,ourCardProduct,pgCardLoad} = useGlobalContext();
  console.log(ourCardProduct);
  const {id:idenCard,name,company,price,description,category,stock,stars,reviews,image} = ourCardProduct;
  useEffect(() => {
    getCardData(`${ourApi}?id=${id}`);
  },[]);
  return (
    <section className='buyContainer'>
      <Images imgs={image}/>
        <div className="details">
          <h3>{name}</h3>
          <h4>{stars}</h4>
          <Star str={stars} rate={reviews} />
          <h5>{reviews} <span>reviews</span></h5>
          <p>Deal of the Month: <strong><PriceFormat price={price}/></strong></p>
          <p className='descp'>{description}</p>
          <p>Available: <strong>{stock>0?'In Stock':'Out of Stock'}</strong></p>
          <p>brand: <strong>{category}</strong></p>
          <hr />
          {stock>0?<AddCart prod={ourCardProduct}/>:null}
        </div>
            </section>
  )
}

export default BuyProduct
