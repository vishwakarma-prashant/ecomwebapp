import { Button, Container, Grid, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import {React ,useEffect,useState} from 'react'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm.jsx'
import { commerce } from '../../lib/commerce'

import "./Checkout.css"
import { Link } from 'react-router-dom'

const steps =["Shipping Address" , "Payment Details"]

const Checkout = ({cart ,handelRefresh}) => {

  
  const Confirmation =() =>{
    
      handelRefresh()

    

    return(<div>

 <h1>Thank you for purchase</h1>   
      <Button component={Link} to="/" variant='contained'>Home</Button>
   



    </div>)
  }
  
  const [activeStep ,setActiveStep]=useState(0);
  const [checkoutToken ,setCheckoutToken] =useState({})

  const [  shippingData , setShippingData] = useState({})

  

  useEffect(() => {

    const genrateToken =async() =>{
 
      try {
          const token = await commerce.checkout.generateToken(cart.id ,{type :"cart"})
          console.log ("checkout token in genrate token ", token)
          setCheckoutToken(token)


          
        
      } catch (error) {
        console.log("error in se effect")
        
      }

    }
    genrateToken();
  
    
  }, [cart])
  

  console.log("the checkout token in checkout.jsx",checkoutToken)
  console.log("the checkout token id in checkout.jsx  checkoutToken.id ",checkoutToken.id)

  const nextStep = ()=> setActiveStep((priviousStep)=>(priviousStep + 1 ))
  const backStep = ()=>  setActiveStep((priviousStep)=>(priviousStep - 1))

  const next= (data)=>{
    console.log(data)
    setShippingData(data)
    nextStep();

 console.log( activeStep)

  }

  

  


  const Form =()=> { return (activeStep ===0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm handelRefresh={handelRefresh} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} /> )}






  return (

    <div className='content'>
      <div className='toolbar'/>

      <Container className='layout'  >

        <Paper className='paper' elevation={16} > 

          <Typography variant='h4' align='center' >Checkout</Typography>
          <div className="stepperclass">
          <Stepper activeStep={activeStep}  align="center" >
            {
              steps.map((st)=>(
                <Step key={st}  >
                  <StepLabel ><Typography variant='body1' align='center' >{st}</Typography> </StepLabel>

                </Step>
              ))
            }

          </Stepper>
          </div>
          <div className='form'>

          {activeStep === steps.length  ? <Confirmation/> :  <Form/>}
          </div>

         
        </Paper>
       </Container>

    </div>
  )
}

export default Checkout



/**
 * import { Container, Grid, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import {React ,useEffect,useState} from 'react'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm.jsx'
import { commerce } from '../../lib/commerce'

import "./Checkout.css"

const steps =["Shipping Address" , "Payment Details"]

const Checkout = ({cart}) => {
  const Confirmation =() =>{
    return(<div>Confrim</div>)
  }
  
  const [activeStep ,setActiveStep]=useState(0);
  const [  shippingData , setShippingData] = useState({})
  const [checkoutToken ,setCheckoutToken] =useState("")
  
  console.log("cart in checkout ",cart)

  useEffect(() => {

    const genrateToken =async() =>{
 
      try {
          const token = await commerce.checkout.generateToken(cart.id ,{type :"cart"})
        
          setCheckoutToken(token)
          console.log ("the cart id ", cart.id)

          console.log ("the token is ", token)


          
        
      } catch (error) {
        console.log("error in se effect")
        
      }

    }
    genrateToken();
  
    
  }, [cart])

  console.log("the checkout token",checkoutToken)
  console.log("the checkout token id ",checkoutToken.id)


  const nextStep = setActiveStep((priviousStep)=>(priviousStep + 1))
  const backStep = setActiveStep((priviousStep)=>(priviousStep - 1))

  const next= (data)=>{
    console.log(data)
    setShippingData(data)

  }

  const Form =()=> { return (activeStep ===0 ? <AddressForm checkoutToken={checkoutToken} next={ next } nextStep={nextStep} backStep={backStep}/> : <PaymentForm/> )}






  return (

    <div className='content'>
      <div className='toolbar'/>

      <Container className='layout'  >

        <Paper className='paper' elevation={16} > 

          <Typography variant='h4' align='center' >Checkout</Typography>
          <div className="stepperclass">
          <Stepper activeStep={activeStep}  align="center" >
            {
              steps.map((st)=>(
                <Step key={st}  >
                  <StepLabel ><Typography variant='body1' align='center' >{st}</Typography> </StepLabel>

                </Step>
              ))
            }

          </Stepper>
          </div>
          <div className='form'>

          {activeStep === steps.length  ? <Confirmation/> :  <Form/>}
          </div>

         
        </Paper>
       </Container>

    </div>
  )
}

export default Checkout
 */