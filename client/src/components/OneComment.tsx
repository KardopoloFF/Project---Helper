import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IComment } from '../types/comment';
import Rating from '@mui/material/Rating';
import axios from 'axios';

interface CommProps {
  comm: IComment;
}
export default function OneComment({comm}:CommProps) {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Автор: {comm.author}
        </Typography>
      <Typography variant="body2">
         {comm.text}
      </Typography>
      </CardContent>
      <Rating name="read-only" value={comm.rating} readOnly />
    </Card>
  );
}