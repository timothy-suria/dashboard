import React, {useState}from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  
  const Register = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://127.0.0.1:7000/register-admin', {
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        });
        navigate('/login');
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
            
            <form className='box' onSubmit={Register}>
              <p className='has-text-centered has-text-danger'>{msg}</p>
              <div className='field mt-5'>
                <label className='label'>
                    Name
                </label>
                <div className='controls'>
                    <input type="text" className='input' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
              </div>


              <div className='field mt-5'>
                <label className='label'>
                    Email
                </label>
                <div className='controls'>
                    <input type="email" className='input' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>

              <div className='field mt-5'>
                <label className='label'>
                    Password
                </label>
                <div className='controls'>
                    <input type="password" className='input' placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>

              <div className='field mt-5'>
                <label className='label'>
                   Confirm Password
                </label>
                <div className='controls'>
                    <input type="password" className='input' placeholder="******" value={confirmPassword} onChange={(e) => setconfPassword(e.target.value)} />
                </div>
              </div>



              <div className='field mt-5'>
                <button className='button is-fullwidth has-text-white' style={{ backgroundColor: '#eb1414' }}>REGISTER</button>
              </div>
            </form>
          </div>
         </div>
        </div> 
      </div>
    </section>
  )
}

export default Register