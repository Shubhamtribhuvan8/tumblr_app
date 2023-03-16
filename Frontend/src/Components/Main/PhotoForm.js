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
import {Input, InputLabel} from '@mui/material';
import {ToastContainer,toast } from 'react-toastify';
function PhotoForm() {
  const [username, setusername] = useState("");
  const [open, setOpen] = React.useState(false);
  const [image, setImageUrl]=useState("");
  const[dataimage,setdata]=useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function handleimage(e){
    const data = new FormData();
    let image = e.target.files[0];
    data.append("file", image);
    data.append("upload_preset", "Tumblr");
    data.append("cloud_name", "dgqt5ockx");
    setdata(data)
  }
    async function Cloudynary(data){
      try {
        let raw = await axios.post(
          "https://api.cloudinary.com/v1_1/dgqt5ockx/image/upload",
          data
        );
         setImageUrl(raw.data.url);
      } catch (error) {
        console.log(error);
      }
    }

const handleSubmit = async (e) => {
  e.preventDefault();
  if(!dataimage){
    toast.error("upload again!");
    return;
  }
  const data = {
    username: username,
    image:image
     }  
     console.log(data,image);  
  try {
    await Cloudynary(dataimage);
    const response = await axios.post('https://dull-pear-mite-tutu.cyclic.app/tumblr',data);
    console.log(response.data);
    toast.success('Post added!');
  } catch (error) {
    console.error(error);
    toast.error('Post Failed to add!');
  }
};
  return (
    <div>
      <div>
      <ToastContainer />
      <Button variant="outlined" onClick={handleClickOpen}>
       Post Images!
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
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={username}
            onChange={(event) => setusername(event.target.value)}
          /><InputLabel>
          Select an image to upload:
        <Button><Input type="file" accept="image/*" onChange={handleimage}/></Button>
        </InputLabel>
            <Button id="login" type="submit" size="large" variant="contained">Submit</Button>
            {/*  */}
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

export default PhotoForm;
