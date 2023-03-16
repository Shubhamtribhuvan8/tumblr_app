import { useState } from "react";
import axios from "axios"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {ToastContainer,toast } from 'react-toastify';
function PostForm() {
  const [username, setusername] = useState("");
  const [people, setpeople] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('https://dull-pear-mite-tutu.cyclic.app/tumblr',{username,people});
    console.log(response.data);
    toast.success('Post Added!');
    // history.push('/');
  } catch (error) {
    console.error(error);
    toast.error('Post Failed!');
  }
};
  return (
    <div>
      <div>
      {/* <ToastContainer /> */}
      <Button variant="outlined" onClick={handleClickOpen}>
       Post Something!
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Do Post Something...!</DialogTitle>
        <DialogContent>
          <DialogContentText>
         </DialogContentText>
          <form onSubmit={handleSubmit}>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add Title For Post"
            type="text"
            fullWidth
            variant="standard"
            value={people}
            onChange={(event) => setpeople(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="HashTag"
            type="text"
            fullWidth
            variant="standard"
            value={username}
            onChange={(event) => setusername(event.target.value)}
          />
       
            <Button id="login" type="submit"size="large" variant="contained" >Submit</Button>
           </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
}

export default PostForm;
