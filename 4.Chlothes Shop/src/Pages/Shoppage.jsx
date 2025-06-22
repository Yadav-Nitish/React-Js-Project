import React from 'react'

import Features from '../Components/Features/Features'
import Newsletter from '../Components/Newsletter/Newsletter'
import ShopHeader from '../Components/Header/ShopHeader'
import Allproduct from '../Components/AllProduct/Allproduct'
const Shoppage = () => {
  return (
    <div>
      <ShopHeader/>
      <Allproduct/>
      <Features/>
      <Newsletter/>
    </div>
  )
}

export default Shoppage