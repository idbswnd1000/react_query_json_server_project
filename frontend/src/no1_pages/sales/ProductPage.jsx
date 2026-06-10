import React from 'react'
import ProductTable from '../../no2_components/sales/ProductTable.jsx'
import { getCurrentUser } from '../../no3_store/hooks/useUser.js'
import AuthControl from '../../no2_components/layout/AuthControl.jsx';

const ProductPage = () => {
  const user = getCurrentUser();
  if(!user){
    return(
      <AuthControl
        message="로그인 후 상품 정보를 조회 및 관리할 수 있습니다."
      />
    )
  }
  return (
    <div>
      <ProductTable/>
    </div>
  )
}

export default ProductPage
