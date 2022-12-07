import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import './Home.css'

export default function Home() {
  return (
    <Container style={{ margin: '10px' }}>
      <Stack
        component="form"
        sx={{
          width: '55ch'
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <h1 className="homeGreet">Освободим вас от забот</h1>
        <p className="homeGreet">Поможем найти надёжного исполнителя для любых задач</p>
        <TextField
          style={{ marginTop: '15px', backgroundColor: 'white' }}
          hiddenLabel
          id="filled-hidden-label-normal"
          label="Напишите, чем вам помочь"
          variant="outlined"
        />
      </Stack>
      <Button variant="contained" color="success" style={{ marginTop: '10px' }}>Заказать услугу</Button>
    </Container>
  );
}