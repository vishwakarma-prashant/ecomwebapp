import { Grid } from "@mui/material";
import React from "react";
import Product from "../Product/Product";
import "./Products.css";



const Products = ({ products ,onAddToCart ,           handelUpdateCartQuant,
  handelRemovefromCart   ,
  handelEmptyCart          }) => {

  
  console.log("in products");


   
return(

  <main className="content">
     <div className="toolbar" />
    <Grid container justify="center" spacing={4}>
       {products.map((prod) => (
        
        <Grid key={prod.id} item xs={12} sm={6} md={4} lg={3}>
          <Product prod={prod}  onAddToCart={onAddToCart} />
         
        </Grid>
      ))} 
    </Grid> 
  </main>
)


  

}
export default Products;










/**
 
 
 */