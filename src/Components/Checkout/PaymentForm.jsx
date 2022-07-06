import { Button, Divider, Typography } from '@mui/material'
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import Review from "./Review"

const stripePromise =loadStripe("....");




const PaymentForm = ({checkoutToken ,backStep ,handelRefresh,nextStep}) => {


    return (
    <div>
      <Review  checkoutToken={checkoutToken}/>
      <Divider/>
      <Typography variant='h6' gutterBottom >Payment Method</Typography>
      <Elements stripe={stripePromise }>
        <ElementsConsumer>
          {( elements ,Stripe)=>(
            <form>
              <CardElement/>
              <br/><br/>
              <div style ={{display:"flex" , justifyContent:"space-between"}}>
                <Button variant="outlined" onClick={()=>(backStep()) }>
                  Back
                </Button>
                < Button variant="contained"  onClick={()=>{return(
                  <>{
                    nextStep()
                  }
                  </>
                )}} >
                Pay 
                </Button>

               
              </div>
              

            </form>

          )}
        </ElementsConsumer>

      </Elements>

    </div>
  )
}

export default PaymentForm