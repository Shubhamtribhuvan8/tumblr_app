import './App.css';
import { Box } from '@mui/material';
import PrimarySearchAppBar from './Components/Appwala';
import StandardImageList from './Components/List';
import MultiActionAreaCard from './Components/VideoCompo';
import MultiActionAreaCardvideo from './Components/VideoCompoleft';
import { useEffect,useState } from 'react';
import LabelBottomNavigation from './Components/Footer/Footer';
function App() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 1360px)").matches);
  useEffect(() => {
  const handler = e => setMatches(e.matches);
  window.matchMedia("(min-width: 1360px)").addListener(handler);
  return () => {
  window.matchMedia("(min-width: 1360px)").removeListener(handler);
  };
  }, []);

  const [loginMatch, setloginMatch] = useState(window.matchMedia("(min-width: 768px)").matches);
 useEffect(() => {
 const handler = e => setloginMatch(e.matches);
 window.matchMedia("(min-width: 768px)").addListener(handler);
 return () => {
 window.matchMedia("(min-width: 768px)").removeListener(handler);
 };
 }, []);

  return (
    <div className="App">
        <PrimarySearchAppBar/>
       
        <div style={{display:"flex",justifyContent:"end",gap:"35px",backgroundColor:"currentColor"}}> 
        {loginMatch &&
        <Box marginTop="5%" >
        < MultiActionAreaCardvideo/>
        </Box>
        }

        <Box display="flex" marginTop="4%" justifyContent="center">
        <StandardImageList />
        </Box>

        {matches &&
        <Box marginTop="5%" >
        < MultiActionAreaCard/>
        </Box>
      }
         </div> 
         <LabelBottomNavigation/>
    </div>
  );
}

export default App;
