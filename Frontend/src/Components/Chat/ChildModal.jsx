import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {IoText} from 'react-icons/io5';
import Tilt from 'react-parallax-tilt'
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import { FcPicture } from 'react-icons/fc';
import {FaQuoteLeft} from 'react-icons/fa';
import {BsFillChatSquareDotsFill} from 'react-icons/bs';
import {ImVideoCamera} from 'react-icons/im';
import {FiLink} from 'react-icons/fi';
const style = {
  position: 'absolute',
  top: '50%',
  left: '48%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'green',
  border: '0.5px solid white',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  paddingTop:" 47px",
  paddingLeft: "31px",
  paddingRight:"41px",
  paddingBottom: "40px",
};
const style1={
      backgroundColor:"#ffc0c0",
        padding:"30px",
       borderRadius:" 50%",
       margin:"1"
    }
export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}><CreateTwoToneIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style,display: 'flex', width: 700 ,gap:"4px"}} >
            <h1></h1>
            <Tilt><span style={style1}><IoText size={40}/></span></Tilt>
            <Tilt><span style={style1}><FaQuoteLeft size={40}/></span></Tilt>
            <Tilt><span style={style1}><FiLink size={40}/></span></Tilt>
            <Tilt><span style={style1}><BsFillChatSquareDotsFill size={40}/></span></Tilt>
            <Tilt><span style={style1}><FcPicture size={40}/></span></Tilt>
            <Tilt> <span style={style1}><ImVideoCamera size={40}/></span></Tilt>
        </Box>
      </Modal>
    </div>
  );
}