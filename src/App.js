import "./App.css";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./scenes/Dasboard";
import "assets/css/bootstrap-datetimepicker.min.css";
import "assets/css/theme.css";
import "assets/css/font-face.css";
import "assets/vendor/mdi-font/css/material-design-iconic-font.css";
import "assets/vendor/mdi-font/css/material-design-iconic-font.min.css";
import "assets/vendor/perfect-scrollbar/perfect-scrollbar.css";
import "assets/vendor/bootstrap-4.1/bootstrap.min.css";


function App() {


  return (
    <BrowserRouter>
   
      <Routes>
        
      <Route path="/" element={<Login/>}/>  
      {/* <Route path="/chatbot" element={<ChatBot/>}/> */}

      <Route path="/register" element={<Register/>}/>

      <Route path="/dashboard" element={<Dashboard/>}>
        
      </Route>
      

      </Routes>
     

    </BrowserRouter>
  
  );
}

export default App;
