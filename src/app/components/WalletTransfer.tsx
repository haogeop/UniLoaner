import React from "react";
import { Box, TextField, Typography, Grid, Button } from '@material-ui/core'
import { Stack } from "@mui/material";

export default function FormPropsTextFields() {
    const handleSubmit = (e) => { 
      e.preventDefault()
      alert('submitted')
    };
  
    return (
      <div style={{marginTop: '25px',marginLeft:'600px'}}>
      <Box sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
        <Grid item xs={12} md={6}>
        <form onSubmit={handleSubmit}>
          <Stack direction="column" spacing={2}>
          <Typography color="text.secondary" variant="body2">
          Please enter the required fields
          </Typography>
            
            <TextField
              required
              id="wallet id"
              label="wallet id"
              defaultValue=""
            />
            <TextField
              required
              id="wallet password"
              label="wallet Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField required id="outlined-password-input" label="recipient " />
            <TextField
              required
              id="outlined-password-input"
              label="Amount transferred"
            />
            <Button variant="outlined" type='submit'> Submit </Button>
          </Stack>
          </ form>
        </Grid>
      </Box>
      </div>
    );
  }