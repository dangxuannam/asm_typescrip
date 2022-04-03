import React from 'react'
import { ProductType } from '../types/product'

type ProductPageProps = {
  products:ProductType[]
}

const ProductPage = (props: ProductPageProps) => {
  return (
   
    <div className="content">
  <div className="title">
    <h2>Gà rán</h2>
  </div>
  
  <div className="prdlist">
  {props.products.map((item, index) => { 
  return  <div className="prd" key={index}>
       <img src="./img/gr2.jpg" alt="" width="290px" />
      <h2>{item.name}</h2>
      <span>{item.price}</span>
    
    </div>
    })}

    
    
  </div>
  <div className="title">
    <h2>Salad</h2>
  </div>
  
  <div className="prdlist">
    <div className="prd">
      <img src="./img/gr2.jpg" alt="" width="290px" />
      <h2>Món gà 1</h2>
      <span>200000vnd</span>
    </div>
    <div className="prd">
    <img src="./img/gr2.jpg" alt="" width="290px" />
      <h2>Món gà 2</h2>
      <span>200000vnd</span>
    </div>
    <div className="prd">
    <img src="./img/gr2.jpg" alt="" width="290px" />
      <h2>Combo gà rán</h2>
      <span>200000vnd</span>
    </div>
    <div className="prd">
    <img src="./img/gr2.jpg" alt="" width="290px" />
      <h2>Combo gà rán</h2>
      <span>200000vnd</span>
    </div>
   
    
  </div>
  </div>
  

      
   


  )
  }
  export default ProductPage
