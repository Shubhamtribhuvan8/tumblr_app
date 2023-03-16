import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MultiActionAreaCard from './VideoCompo';
import StandardImageList from './List';
import ImageUpload from './Multer/Imagesupload';
import FixedBottomNavigation from './Footer/Footer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
        <Item>
        <Box display="flex" marginTop="5%" justifyContent="center">
        <StandardImageList />
        </Box>
        </Item>
        </Grid>

        
        <Grid item xs={8}>
          <Item>
        <Box marginTop="5%" >
        < MultiActionAreaCard/>
        </Box>
        </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
