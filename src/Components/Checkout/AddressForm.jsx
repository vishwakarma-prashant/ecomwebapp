import { Button, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import { commerce } from "../../lib/commerce";
import {Link} from "react-router-dom"
const AddressForm = ({ checkoutToken ,next,nextStep ,backStep}) => {
  const methods = useForm();





  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingcountry, sethSippingCountry] = useState(" ");

  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");

  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivision = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );
    
  const opition = shippingOptions.map((so)=>({id: so.id ,label: `${so.description} - (${so.price.formatted_with_symbol})`}));

  //console.log("vhecking array", countries);

  const fetchShippingCountries = async (checkoutTokens) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokens
    );
    console.log("the check out token in fetchShipping",checkoutTokens, countries);
    setShippingCountries(countries);
    sethSippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisons = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    //console.log(countryCode, subdivisions);
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };
  const fetchShippingoption = async (checkoutToken , country ,region =null) => {
    const options  = await commerce.checkout.getShippingOptions(checkoutToken , { country ,region})
    //console.log(options);
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken ? checkoutToken.id : "null");
  }, []);

  useEffect(() => {
    if (shippingcountry) fetchSubdivisons(shippingcountry);
  }, [shippingcountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingoption(checkoutToken ? checkoutToken.id : "null" ,shippingcountry ,shippingSubdivision);
  }, [shippingSubdivision]);


  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data)=>( next({...data ,shippingcountry,shippingSubdivision,shippingOption}) ))}>
          <Grid container spacing={2}>
            <FormInput required name="first Name" label="First Name" />
            <FormInput required name="last Name" label="Last Name" />

            <FormInput required name="Address" label="Address" />
            <FormInput required name="email" label="email" />
            <FormInput required name="city" label="City" />

            <FormInput required name="zip" label="Zip" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingcountry}
                onChange={(e) => sethSippingCountry(e.target.value)}
                fullWidth
                variant="standard"
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivison</InputLabel>
              <Select
                value={shippingSubdivision}
                onChange={(e) => setShippingSubdivision(e.target.value)}
                fullWidth
                variant="standard"
              >
                {subdivision.map((subdivion) => (
                  <MenuItem key={subdivion.id} value={subdivion.id}>
                    {subdivion.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} onChange={(e)=>(setShippingOption(e.target.value))} fullWidth variant="standard">
              {opition.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            
          </Grid>
          <div style={{display :"flex" , justifyContent:"space-between" 
    , marginTop: "5px"
  }}>
            <Button component={Link}  to="/cart"variant="contained">Back to cart</Button>
            <Button type="onSubmit" variant="contained">Next</Button>


          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
