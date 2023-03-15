
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Input = (props)=> {
  
  return (
    // <input type="text" className='h-6 w-24 mr-3 border ' placeholder=" enter your name" id="inputName" required/>
    <Box className="w-28 mr-5" sx={{ display: "flex", alignItems: "flex-end" }}>
      <TextField
        id="input-with-sx"
        onChange={props.onChange}
        label="your name"
        variant="standard"
      />
    </Box>
  );
}

// export default Input
