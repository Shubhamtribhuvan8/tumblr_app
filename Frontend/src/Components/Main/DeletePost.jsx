import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import {ToastContainer,toast } from 'react-toastify';
import { useParams } from "react-router-dom";
export default function DeleteButton() {
  const { id } = useParams();
  console.log(id)

  const Delete = async (id) => {
    try {
      const response = await axios.delete(`https://dull-pear-mite-tutu.cyclic.app/tumblr/${id}`);
      console.log("Data deleted successfully!", response.data);
      toast.error("Post Deleted!");
    } catch (error) {
      console.log(error);
    } 
  }
  
function handleDelete(event){
  event.preventDefault();
  Delete(id);
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
