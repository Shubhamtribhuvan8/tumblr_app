import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState ,useEffect} from 'react';
import axios from "axios";
export default function MultiActionAreaCard() {
  const [display, setDisplay] = useState([]);

  const fetchTumblrData = async () => {
    try {
      const response = await axios.get("https://dull-pear-mite-tutu.cyclic.app/tumblrpost/post");
      setDisplay(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect((event)=>{
    fetchTumblrData()
  },[])

  return (
    <div>
    {display.map((item,_id) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <video
        style={{ transform: "rotate(0deg)", width: "100%", height: "100%", objectFit: "cover" }}
        src={item.author}
        // controls
        muted
         autoPlay={"autoplay"}
        preLoad="auto"
        loop
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '14px'}}>
            {item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        </Button>
      </CardActions>
    </Card>
      ))}
      </div>
  );
}