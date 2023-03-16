import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import InputGroup from 'react-bootstrap/InputGroup';
import AddReactionSharpIcon from '@mui/icons-material/AddReactionSharp';
function Example() {
    const [show, setShow] = useState(false);
    const[chat,SetChat]=useState("");
  return (
    <>
      <Button variant="dark" onClick={() => setShow(true)}>
      <AddReactionSharpIcon/>
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            ChatBox
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Stack direction="row" spacing={1} alignContent="center">
            <Avatar src="/broken-image.jpg">T</Avatar>  
             <p>Hello!</p>
             </Stack>
             <br />
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={chat}
          onChange={(event) => SetChat(event.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Chat
        </Button>
      </InputGroup>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example