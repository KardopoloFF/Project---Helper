import React, { FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import {ITask} from '../types/task'
interface TaskProps {
    el: ITask
}
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// export default function OneTask({ el }:TaskProps) {
//   return (
//     <div>
//         <div>{el.title}</div>
//         <div>{el.text}</div>
//         <div>{el.date.toDateString()}</div>
//         <div>{el.price.toString()}</div>
//     </div>

    
    export default function OneTask({ el }:TaskProps) {
      return (
        <Card sx={{ maxWidth: 600 }} style={{ display: 'flex', flexDirection: 'column', margin: 'auto', marginTop: "25px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {el.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            {el.date}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            {el.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {el.text}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      );
    }
    
