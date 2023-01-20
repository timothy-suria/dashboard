import React from 'react';
import Navbar from "./Navbar";
// import axios from "axios";
// import jwt_decode from "jwt-decode";



const Dashboard = () => {
  // const [name, setName] = useState('');
  // const [token, setToken] = useState('');

  // useEffect(() => {
  //   refreshToken();
  // }, []);

  // const refreshToken = async()=> {
  //   try {
  //     const response = await axios.get('http://localhost:5000/');
  //     setToken(response.data.accessToken);
  //     const decoded = jwt_decode(response.data.accessToken);
  //     console.log(decoded);
  //   } catch (error) {
      
  //   }
  // }
  return (
    <div >
       <Navbar/>
       <div className='container mt-5'>
      <h2>Welcome back : </h2>
       </div>
    </div>
  )
}

export default Dashboard