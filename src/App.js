import { Box, Stack } from '@mui/material';
import './App.css';
import Feed from './components/Feed'
import RightBar from './components/Rightbar'
import SideBar from './components/Sidebar'
import Navbar from './components/Navbar';

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent={"center"}>
      <SideBar />
      <Feed />
      <RightBar/>
      </Stack>
    </Box>
  );
}

export default App;
