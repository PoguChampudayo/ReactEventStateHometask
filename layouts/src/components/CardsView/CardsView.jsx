import React from 'react'

export const CardsView = ({cards}) => {

  return (
    

<ul className="cardsView">
{cards.map((product) => (
  <li key={product.img}>
    <div className='item'>
      <div>{product.name}</div>
      <div>{product.color}</div>
      <img src={product.img} alt="Product image" width='200' height='200'/>
      <div>{product.price}</div>
    </div>
  </li>
))}
</ul>
  );
}
