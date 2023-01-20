import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
 


  const Auth = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://127.0.0.1:5000/login', {
          email: email,
          password: password,
          
        });
        navigate('/dashboard');
    } catch (error) {
      if(error.response){
       setMsg(error.response.data.msg);
      }
    }
  }


  


  return (
    <section className='hero is-fullheight is-fullwidth' style={{ backgroundColor: '#eb1414' }}>
      <div className='hero-body'>
        <div className='container'>
         <div className='columns is-centered'>
          <div className='column is-4-desktop'>
            <div className="columns is-centered">

            <img src="./logo.jpeg" width={120} alt="" className='has-text-centered'/>
            </div>
            <form className='box' onSubmit={Auth}>
               
               
               
                 <p className='has-text-centered has-text-danger'>
                  <strong className='has-text-danger'>{msg}</strong>
                  </p> 
              
              <div className='field mt-5'>
                <label className='label'>
                    Email
                </label>
                <div className='controls'>
                    <input autoComplete='on' type="email" className='input' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
              </div>

              <div className='field mt-5'>
                <label className='label'>
                    Password
                </label>
                <div className='controls'>
                    <input type="password" className='input' placeholder="******"  value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>

              <div className='field mt-5'>
                <button className='button is-fullwidth has-text-white' style={{ backgroundColor: '#eb1414' }}>LOGIN</button>
              </div>
            </form>
          </div>
         </div>
        </div> 
      </div>
    </section>
  )
}

export default Login