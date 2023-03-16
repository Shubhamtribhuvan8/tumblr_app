import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import RecipeReviewCard from './Card';
import "../App.css"
import "../Components/Css/List.css"
import NavBar from './Routes/Nav';
import Routers from './Routes/Routers';
import QuiltedImageList from './Footer/Footer';
export default function StandardImageList() {
  return (
    <div style={{marginTop: "4%"}}>
           <NavBar/>
           <Routers/>
          <ImageList sx={{ width: 639, height: 450,marginTop:2 }} cols={1} rowHeight={700}>
          <ImageListItem>
          <RecipeReviewCard/>
         </ImageListItem>
    </ImageList>
    </div>
  );
}