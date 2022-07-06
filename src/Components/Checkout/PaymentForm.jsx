import { Divider } from '@mui/material'
import React from 'react'
import Review from "./Review"

const PaymentForm = ({checkoutToken}) => {
  return (
    <div>
      <Review  checkoutToken={checkoutToken}/>
      <Divider/>

    </div>
  )
}

export default PaymentForm