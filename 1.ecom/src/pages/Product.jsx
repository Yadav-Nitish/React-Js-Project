import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/productdisplay/ProductDisplay';
import BreadCrum from '../Components/Breadcrum/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import Description from '../Components/Description/Description';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const{productId} = useParams();
  const product = all_products.find((e)=>e.id === Number(productId))
  return (
    <div>
       <BreadCrum product={product}/>
      <ProductDisplay  product={product} />
      <Description/>
      <RelatedProduct/>
    </div>
  )
}

export default Product