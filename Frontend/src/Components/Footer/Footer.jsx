import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('camera');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation  value={value} onChange={handleChange}>

      <BottomNavigationAction
        label="Camera"
        value="camera"
        icon={<CameraAltIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />

     <BottomNavigationAction
        label="Apps"
        value="Apps"
        icon={<DarkModeIcon/>}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />

      <BottomNavigationAction
        label="Shubham Tribhuvan"
        title='Shubham Tribhuvan'
      />
    </BottomNavigation>
  );
}