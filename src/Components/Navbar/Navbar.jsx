import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import logo from "../assest/logoimg.png";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import {Link ,useLocation} from "react-router-dom"
import "./styles.css"

const Navbar = ({totalItem}) => {
  const location =useLocation();
  return (
    <>
      <AppBar position="fixed" color="inherit" className="appbar">
        <Toolbar className="toolbar">
          <Typography variant="h6" color="inherit" className="title" component={Link} to="/" >
       

            <img src={logo} height="30px" alt=""  className="imgLogo"/>
             E commerce
           
          </Typography>
          <div className="grow"/>
          <div className="button">
            { location.pathname ==="/" ?  (
            <Link to="/cart">
            <IconButton>
              <Badge badgeContent={totalItem} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            </Link>) : null}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
