import * as React from 'react';
import "../App.css"
import { styled, alpha } from '@mui/material/styles';
import { FiHome } from "react-icons/fi";
import AppBar from '@mui/material/AppBar';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import Box from '@mui/material/Box';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import axios from "axios";
import Example from './Chat/Chatbox';
import TemporaryDrawer from './ChatMan/Drawer';
import NestedModal from './Chat/ChildModal';
import Login from './Login/Login';
import { Button } from '@mui/material';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
   zIndex:"1",
  alignItems: 'center',

  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const[loginname,SetLoginname]=useState("");
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(query)
    try {
      const res = await axios.get(`https://dull-pear-mite-tutu.cyclic.app/tumblr/people/${query}`);
      const data = res.data;
      console.log(data);
      setAlbums(data);
      if (!Array.isArray(data.albums)) {
        throw new Error("Response data is not an array of albums");
      }
     
    } catch (error) {
      console.error(error);
    }
  }

  async function handleverify() {
    let papa=localStorage.getItem("papa");
    const data1 = {
      token: papa
      };
          try {
           let tokens= await axios.post('https://dull-pear-mite-tutu.cyclic.app/tumbler/verify', data1);
            console.log(tokens.data.user.name)
             SetLoginname(tokens.data.user.name);
           } catch (error) {
            console.log("error")
          }
        }
        React.useEffect(()=>{
          handleverify()
        })
        function handlleLogout(event){
          event.preventDefault();
          SetLoginname("");
          localStorage.removeItem("papa");
        }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}><Button> &nbsp; &nbsp; &nbsp;<Login/></Button></MenuItem>
      <MenuItem onClick={handleMenuClose}> &nbsp; {" "}{loginname}</MenuItem>
      <MenuItem onClick={handleMenuClose}> &nbsp; My account</MenuItem>
      <MenuItem > &nbsp; &nbsp; <Button onClick={handlleLogout} >Logout</Button></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <FiHome/>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
          {/* <Login/> */}
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
          tumblr
          </Typography>
          <Search>
       <form onChange={handleSubmit}>
        <SearchIconWrapper>
       
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Tumblr"
          inputProps={{ 'aria-label': 'search' }}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
    </Search>
    <Box id="debounce">
        {albums.length >= 0 ? albums.map((e)=>{
          return (
            <p>{e.username}</p>
            )
        }):<p>No Data Found </p>
      }
      </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge color="error">
                <HomeSharpIcon/>
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge  color="error">
                <ExploreRoundedIcon/>
              </Badge>
            </IconButton>




            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge  color="error">
                <StorefrontIcon/>
              </Badge>
            </IconButton>

{/* AddReactionSharpIcon */}
       
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge  color="error">
                {/* <AddReactionSharpIcon/> */}
                <Example/>
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge  color="error">
                <TemporaryDrawer/>
              </Badge>
            </IconButton>

  
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge  color="error">
                <NestedModal/>
              </Badge>
            </IconButton>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            

            {/* CreateTwoToneIcon */}
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

    
    </Box>
  );
}