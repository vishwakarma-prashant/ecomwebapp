import React from "react"
import Container from '@mui/material/Container';
import { Button, Grid, Stack, Typography } from "@mui/material";
import "./Cart.css"
import CartItem from "./CartItem/CartItem";
import {Link} from "react-router-dom"

const Cart =({cart    ,onAddToCart ,      handelRefresh   ,  handelUpdateCartQuant,
    handelRemovefromCart   ,
    handelEmptyCart     })=>{


    const isEmpty= cart ? (cart.total_items ===0) : false ;



    console.log(cart.line_items)
    const EmptyCart=()=>{
        return(<div> 
           

            <Typography variant="subtitle2" component={Link} to="/">Cart is empty</Typography>


        </div>
        )
        

    }

    const subtotal=cart.subtotal ? cart.subtotal.formatted_with_symbol : "$ 0" ;
    const FilledCart=()=>{
        return(
            <>
            <Grid container spacing={3}>
                {cart.line_items?.map((item)=>(
                    <Grid item xs={12} sm={4}  key={item.id}>
                        <CartItem   item={item}   
                         handelUpdateCartQuant ={  handelUpdateCartQuant} 
                         handelRemovefromCart  ={  handelRemovefromCart }
                         handelRefresh={handelRefresh} />
                    </Grid>
                )
                
                )}

                 </Grid>
                 <div className="cartDetails">
                    <Typography variant="h5">
                        Subtotal :{subtotal}
                    </Typography>
                    <div>

                    <Stack direction="row" spacing={2} >
                   

                    <Button className="emptycart btnbtn" size="large" type="button" variant="contained" color="secondary" onClick={ handelEmptyCart  } >Empty cart</Button>
                    
                  

                    <Button className="checkout btnbtn" size="large" type="button" variant="contained" color="primary" >Checkout</Button>
                 
                    </Stack>
                    </div>
                 </div>
                </>
        ) 

    }
    if(!cart.line_items){return "loading"}

    return(
        <Container className="container">
            <div className="toolbar"/>
            <Typography className="title" variant="h3" gutterBottom > Your Shoping Cart</Typography>
            {isEmpty ? <EmptyCart/> : <FilledCart/>}

        </Container>
        
    )



}

export default Cart;