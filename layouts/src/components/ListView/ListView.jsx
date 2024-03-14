import React from 'react'

export const ListView = ({items}) => {
  return (
    <ul className='listView'>
      {items.map((product) => (
        <li key={product.img}>
            <div className='item'>
                <img src={product.img} alt='Product image' width='200' height='200'/>
                <div>{product.name}</div>
                <div>{product.color}</div>
                <div>${product.price}</div>
            </div>
        </li>
      ))}
    </ul>
  )
}
