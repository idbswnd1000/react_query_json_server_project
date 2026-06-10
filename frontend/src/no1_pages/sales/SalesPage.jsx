import React from 'react'
import SalesTable from '../../no2_components/sales/SalesTable.jsx'
import { getCurrentUser } from '../../no3_store/hooks/useUser.js';
import AuthControl from '../../no2_components/layout/AuthControl.jsx';

const SalesPage = () => {
  const user = getCurrentUser();
  if(!user){
    return(
      <AuthControl
        message="로그인 후 판매 정보를 조회할 수 있습니다."
      />
    )
  }
  return (
    <div>
        <SalesTable/>
    </div>
  )
}

export default SalesPage
