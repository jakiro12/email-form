import {  BrowserRouter,Routes,Route,} from "react-router-dom";
import './App.css';
import Form from './Login';
import Dashboard from "./loginResults/Dashboard";
import WrongData from "./loginResults/WrongData";
import UserInformation from "./ProfileData/UserInformation";
import UserProfile from "./ProfileData/UserProfile";

//si envuelvo los Route con html se rompe, por ejemplo un div

function App() {
  
      



  return (
    <BrowserRouter>
    <Routes>   
     <Route path="/" element={<Form/>} /> 
     <Route path="/wrong" element={<WrongData/>} /> 
     <Route path="/page" element={<Dashboard/>}/>  
     <Route path="/profile" element={<UserProfile/>}/>
     <Route path="/info" element={<UserInformation/>}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
