import "./App.css";
import { Products, Navbar ,Cart } from "./Components";
import { useState } from "react";
import { commerce } from "./lib/commerce";
import { useEffect } from "react";
import Product from "./Components/Product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function MainApp() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProduct = async () => {
    const data = await commerce.products.list();

    //   setProducts(data.data)
    setProducts((data && data.data) || []);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());

  };
  
  const handelAddToCart= async(productId,quantity)=>{
    const item =await commerce.cart.add(productId ,quantity);
    setCart(item.cart)
  }
  const handelUpdateCartQuant = async(productId, quantity) =>{
    const {item}= await commerce.cart.update(productId, quantity);
    setCart(item)
  }
  const handelRemovefromCart = async(productId) =>{
    const {item}= await commerce.cart.remove(productId);
    setCart(item)
  }

  const handelEmptyCart = async() =>{
    const {item}= await commerce.cart.empty();
    setCart(item)
  }


  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, []);

  console.log(products);
  console.log(cart)

  return (
    <BrowserRouter>


    
      <Navbar totalItem={cart.total_items}/>
        <Routes>

        <Route path="/"  element={
        <Products products={products} onAddToCart={handelAddToCart} 
        handelUpdateCartQuant ={handelUpdateCartQuant}
         handelRemovefromCart ={ handelRemovefromCart} 
             handelEmptyCart  ={     handelEmptyCart }
        
        
        /> 

        }/>

       
          <Route path="/cart" element={<Cart cart={cart} 
            handelUpdateCartQuant    ={handelUpdateCartQuant}
            handelRemovefromCart      ={ handelRemovefromCart} 
            handelEmptyCart             ={     handelEmptyCart } />}/>
          
      
          

        </Routes>

    
        
    
    
    </BrowserRouter>
  );
}

export default MainApp;
