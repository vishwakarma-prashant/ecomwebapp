import React from "react";
import "./Product.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = ({ prod}) => {


  
return (

  <Card className="rootcard" >

    
    <CardMedia
    className="mediaimg"
    component="img"
    height={"300px"}
      image= { prod.image? prod.image.url :"https://img.freepik.com/free-vector/red-prohibited-sign_1284-42862.jpg?t=st=1655923915~exp=1655924515~hmac=62c0ca717fa98284c5d5f9fc28ad7bfd5935ad8f6d747782d7639a9d7ecc517e&w=360"   } />
    <CardContent>
    <div className="cardContent">
      <Typography variant="h5" gutterBottom>
          {prod.name}
      </Typography>
      <Typography variant="h5">
          {prod.price.formatted_with_symbol} 
      </Typography>

    </div>
    <Typography dangerouslySetInnerHTML={{ __html:prod.description}} component="elemetType" variant="body2" color="textSecondary"/>


    </CardContent>
    <CardActions className="cardAction">
      <IconButton aria-label="Add to cart">
          <AddShoppingCart/>
      </IconButton>

    </CardActions>
  </Card>
);
};

export default Product;
