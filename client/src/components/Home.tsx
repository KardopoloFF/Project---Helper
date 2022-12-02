import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { Container } from '@mui/system';

export default function Home() {
  return (
    <Container>
    <Stack
    component="form"
    sx={{
      width: '50ch',
    }}
    spacing={2}
    noValidate
    autoComplete="off"
  >
    <TextField
      style={{ marginTop: '15px', backgroundColor: 'white'}}
      hiddenLabel
      id="filled-hidden-label-normal"
      label="Напишите, чем вам помочь"
      variant="outlined"
    />
  </Stack>
      <Button variant="contained" color="success" style={{marginTop: '10px'}}>Заказать услугу</Button>
  </Container>
  );
}