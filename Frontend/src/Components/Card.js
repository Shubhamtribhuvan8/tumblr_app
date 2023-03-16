import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {ToastContainer,toast } from 'react-toastify';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState ,useEffect} from 'react';
import axios from "axios";
import "../App.css"
import { useParams } from "react-router-dom";
import LongMenu from './Main/Sample';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
    const [display, setDisplay] = useState([]);
    const [Likesss, setLikesss] = useState(true);
      const fetchTumblrData = async () => {
        try {
          const response = await axios.get("https://dull-pear-mite-tutu.cyclic.app/tumblr");
          setDisplay(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(()=>{
    fetchTumblrData();
  })
  
  

  const PatchingDislike = async (item) => {
    let data = { ...item,DisLikes:item.DisLikes+1};
    try {
      await axios.patch(`https://dull-pear-mite-tutu.cyclic.app/${item._id}`, data);
      toast.success("DisLiked!");
    } catch (error) {
      console.log(error);
    }
}
  const Patching = async (item) => {
    if( Likesss==true){
      let data ={ ...item,Likes:item.Likes+1};
       try {
        await axios.patch(`https://dull-pear-mite-tutu.cyclic.app/${item._id}`, data);
        toast.success("Liked!");
        setLikesss(false)
      }
      catch (error) {
        console.log(error);
    }
   } 
  };
  
  return (
    <div style={{textAlign:"center"}}>
      {/* <ToastContainer/> */}

    {display.reverse().map((item,_id) => (
    <Card sx={{ maxWidth: 700 }}  key={_id+1} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item.avatar}
          </Avatar>
        }

        action={
          <IconButton aria-label="settings">
              <Link to={`/products/${item._id}`}><LongMenu/></Link>
          </IconButton> }
          
          title={<Typography sx={{ fontSize: 20 }}>{item.people}</Typography>}
        />

       <Typography  color="text.primary"gutterBottom variant="h6" component="div" style={{ fontSize: '14px'}} >
            {item.username}
            </Typography>

        <CardMedia
          key={item.id}
          component="img"
          image={item.image}
          alt={item.title}
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"   onClick={()=>{Patching(item)}}>
         <FavoriteIcon style={{ color:"blue" }} />
          {item.Likes} 
        </IconButton>
        <IconButton aria-label="add to dislike" onClick={()=>{PatchingDislike(item)}}>
         <ThumbDownIcon style={{ color:"black"}}/>
          {item.DisLikes} 
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{item.createdAt}</Typography>
        </CardContent>
      </Collapse>
      </CardActions>
    </Card>
      ))}
    </div>
  );
}