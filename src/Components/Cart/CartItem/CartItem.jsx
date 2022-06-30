import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import "./CartItem.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

const CartItem = ({
  item,
  handelUpdateCartQuant,
  handelRefresh,
  handelRemovefromCart,
}) => {


  const img = item.image
    ? item.image.url
    : "https://cdn.chec.io/merchants/43597/assets/l5GXlTOxFwIGPGU1|closeup-black-keyboard-table.jpg";
  const price = item.price ? item.price.formatted_with_symbol : "00";

  return (
    <div>
      <Card>
        <CardMedia image={img} className="cardmedia" />
        <CardContent className="cardContent">
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="h4">{price}</Typography>
        </CardContent>
        <CardActions className="cardAction">
          <div className="button">
            <IconButton
              onClick={() => {
                handelUpdateCartQuant(item.id,  item.quantity +1 );
                console.log("click add")
              }}
            >
              <AddOutlinedIcon />
            </IconButton>
            <div className="quantity">
              <Typography variant="h6">{item.quantity} </Typography>
            </div>

            <IconButton
              onClick={() => {
                handelUpdateCartQuant(item.id, item.quantity -1);
              }}
            >
              <RemoveOutlinedIcon />
            </IconButton>
          </div>
          <Button
            size="medium"
            type="button"
            variant="contained"
            color="error"
            onClick={() => {
              handelRemovefromCart(item.id);
            }}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CartItem;
