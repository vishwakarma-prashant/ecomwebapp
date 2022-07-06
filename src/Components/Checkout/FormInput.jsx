import { Grid, TextField } from "@mui/material";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    
      <Grid item xs={12} sm={6} lg={6} >
        <Controller
          control={control}
          name={name}
          fullWidth
          render={({ field: { name ,variant } }) => (
            <TextField
              fullWidth
            
              name={name}
              label={label}
              required={required}
              variant="standard"
            />
          )}
        />
      </Grid>
    
  );
};

export default FormInput;

/**
                    as ={TextField}
                    control={control}
                    fullWidth
                    name={name}
                    label={label}
                    required={required} */
