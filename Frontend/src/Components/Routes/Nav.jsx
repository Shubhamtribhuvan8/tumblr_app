import React from 'react'
import { Link } from 'react-router-dom'
import { FcPicture } from 'react-icons/fc';
import {FaQuoteLeft} from 'react-icons/fa';
import {BsFillChatSquareDotsFill} from 'react-icons/bs';
import {ImVideoCamera} from 'react-icons/im';
import {FiLink} from 'react-icons/fi';
import {IoText} from 'react-icons/io5';
function NavBar(props) {

    var divStyle = {
    padding: "20px",
    backgroundColor: "white",
    display: "flex",
    gap: "22px",
    boxShadow: "1px 1px 1px 1px black"
  };
  var aStyle = {
    marginRight: "40px",
    textDecoration: "none",
  };

  const iconNameStyle = {
    fontSize: 15,
    color: "black",
    marginTop: 5,
    textAlign: 'center',
  };
  
  return (
    <>
    
    <div style={divStyle}>
  <Link style={aStyle} to="/text">
    <IoText size={40}/>
    <div style={iconNameStyle}>Text</div>
  </Link>

  <Link style={aStyle} to="/text">
    <FaQuoteLeft size={40}/>
    <div style={iconNameStyle}>Quote</div>
  </Link>

  <Link style={aStyle} to="/text">
    <FiLink size={40}/>
    <div style={iconNameStyle}>Link</div>
  </Link>

  <Link style={aStyle} to="/text">
    <BsFillChatSquareDotsFill size={40}/>
    <div style={iconNameStyle}>Chat</div>
  </Link>

  <Link style={aStyle} to="/photo">
    <FcPicture size={40}/>
    <div style={iconNameStyle}>Photo</div>
  </Link>

  <Link style={aStyle} to="/video">
    <ImVideoCamera size={40}/>
    <div style={iconNameStyle}>Video</div>
  </Link>
</div>

    </>
  )
}

export default NavBar
