import React from 'react'
import "../styles/StarProduct.css"

const StarProduct = ({starProduct}) => {
  return (
    <div className="star-product">
        <div>
            <a href={starProduct[0].url}></a>
            <img src={starProduct[0].image} alt="1st product" />
        </div>
        <div>
            <a href={starProduct[1].url}></a>
            <img src={starProduct[1].image} alt="1st product" />

            <a href={starProduct[2].url}></a>
            <img src={starProduct[2].image} alt="1st product" />

            <a href={starProduct[3].url}></a>
            <img src={starProduct[3].image} alt="1st product" />
        </div>
    </div>
  )
}

export default StarProduct