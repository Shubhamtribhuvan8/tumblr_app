import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function Signup() {
    const [show, setShow] = useState(false);

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[gender,setGender]=useState("");
    const[password,setPassword]=useState("");

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handlemeailchange = (event) => {
      setEmail(event.target.value);
    };

    const handlegenderchange = (event) => {
      setGender(event.target.value);
    };


    const handlepasswordchange = (event) => {
      setPassword(event.target.value);
    };


    async function handleSubmit(event) {
      event.preventDefault();
             const data = {
              name: name,
              email: email,
              gender:gender,
              password:password,
            };
            try {
              await axios.post('https://dull-pear-mite-tutu.cyclic.app/tumbler/register', data);
              toast.success("Registered!")
              const successs = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3');
              successs.play();
             } catch (error) {
              toast.error("Wrong Credentials!");
              const warningSound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a');
              warningSound.play();
            }
          }
  return (
    <>
    {/* <ToastContainer/> */}
      <Button variant="white" onClick={() => setShow(true)}>
       <AddCircleOutlineIcon size="small"/>
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" style={{textAlign:"center"}}>
            Create a Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
      <TextField required type="text" value={name} onChange={handleNameChange} placeholder="Name" style={{width:"345px"}} />
      <br />  <br/>
      <TextField required type="text" value={email} onChange={handlemeailchange} placeholder="Email" style={{width:"345px"}} />
      <br />  <br/>
      <TextField required type="text" value={gender} onChange={handlegenderchange} placeholder="Gender" style={{width:"345px"}} />
      <br />  <br/>
       <TextField required type="text" value={password} onChange={handlepasswordchange} placeholder="Password" style={{width:"345px"}} />
       <br />  <br/>
      <Button variant="outline-secondary" id="button-addon2" type='submit'>
          Signup
        </Button>
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup