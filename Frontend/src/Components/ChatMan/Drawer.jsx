import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import "./Drawer.css";
import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const [inputValue, setInputValue] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });

    // Close the drawer when the user submits any text
    if (!open && inputValue !== '') {
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Close the drawer when the user submits any text
    if (inputValue !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
      setState({ ...state, bottom: false });
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
        {messages.map((message, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={message} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Type Something !!!" id="fullWidth" value={inputValue} onChange={handleInputChange} />
          </Box>
        </form>
      </List>
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ElectricBoltIcon color="black" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
