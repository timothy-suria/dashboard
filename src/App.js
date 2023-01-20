import logo from "./logo.svg";
import "./App.css";

import Dasboard from "./scenes/Dasboard";
import "assets/css/bootstrap-datetimepicker.min.css";
import "assets/css/theme.css";
import "assets/css/font-face.css";
import "assets/vendor/mdi-font/css/material-design-iconic-font.css";
import "assets/vendor/mdi-font/css/material-design-iconic-font.min.css";
import "assets/vendor/perfect-scrollbar/perfect-scrollbar.css";
import "assets/vendor/bootstrap-4.1/bootstrap.min.css";


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <div className="page-wrapper">
      <Dasboard></Dasboard>

      
    </div>
  );
}

export default App;
