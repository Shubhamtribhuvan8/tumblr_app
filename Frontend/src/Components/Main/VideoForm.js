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
function VideoForms() {
  const [name, setusername] = useState("");
  const [author, setAuthor] = useState("");
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
    const response = await axios.post('https://dull-pear-mite-tutu.cyclic.app/tumblrpost/post',{name ,author });
    console.log(response.data);
    toast.success('Video added!');
  } catch (error) {
    console.error(error);
    toast.error('Video Failed to add!');
  }
};
  return (
    <div>
      <div>
      <ToastContainer />
      <Button variant="outlined" onClick={handleClickOpen}>
       Post Videos!
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
            label="Title"
            required={true}
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(event) => setusername(event.target.value)}
          />
              <TextField
              required={true}
              autoFocus
              margin="dense"
              id="name"
              label="Video URL"
              type="url"
              fullWidth
              variant="standard"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}/>
            <Button id="login" type="submit" size="large" variant="contained">Submit</Button>
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

export default VideoForms;
