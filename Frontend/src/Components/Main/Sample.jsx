import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MainRouters from '../Routes/MainRouter';
import {ToastContainer,toast } from 'react-toastify';
import SettingsIcon from '@mui/icons-material/Settings';
const options = [
    // <DoNotDisturbIcon/>
      <SettingsIcon/>
    //  <ContentCopyIcon/>
];
const ITEM_HEIGHT = 48;
export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    toast.isActive("Setting On")
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
       <ToastContainer />
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
            <MainRouters/>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}