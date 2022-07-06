import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Review = ({checkoutToken}) => {
  return (
    <div>
        <List disablePadding sx={{bgcolor: ' white' }}>{

            checkoutToken.live.line_items.map((product)=>(
                <ListItem key={product.name}>
                    <ListItemText primary={product.name} secondary={ `Quantity ${product.quantity}`}/>
                    <Typography>{product.line_total.formatted_with_symbol}</Typography>
        
               </ListItem>
            
            
            ))}<ListItem>
                <ListItemText secondary="Total"/>
                 <Typography variant='h4'>
                 {checkoutToken.live.subtotal.formatted_with_symbol}
                 </Typography>

           


 
            </ListItem>
                      
            
        


        </List>
    </div>
  )
}

export default Review