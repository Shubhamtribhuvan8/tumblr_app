import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import {ToastContainer,toast } from 'react-toastify';
import { useParams } from "react-router-dom";
export default function DeleteVideo() {
  const { idx } = useParams();
  console.log(idx)
  
function handleDelete(event){
  event.preventDefault();
  Deletewala(idx);
}
  const Deletewala = async (idx) => {
    try {
      const response = await axios.delete(`https://dull-pear-mite-tutu.cyclic.app/${idx}`);
      console.log("Data deleted successfully!", response.data);
      toast.error("Post Deleted!");
    } catch (error) {
      console.log(error);
    } 
  }
  return (
    <Stack direction="row" spacing={2}>
       <ToastContainer />
      <Button onClick={handleDelete} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Stack>
  );
}
