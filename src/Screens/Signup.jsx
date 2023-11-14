import React, {useState, useEffect} from 'react'
import bg11 from '../images/bg11.jpg';
import redder from '../images/pxfuel2.jpg'
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';
import config from '../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_pass, setConfirmPass] = useState('');
    const baseUrl = config.baseUrl;
    

    const notify = (msg) => toast(msg);
    const handleSubmit = (e) => {

        e.preventDefault();

        if(password === confirm_pass){
            let data = {
                name,
                email,
                password
            }
            //
            console.log('data: ',data);
            axios.post(`${baseUrl}/register`,  data)
            .then((res)=>{
              console.log('res: ',res.data.msg);
              
              
              if(res.data.msg){
                notify(res.data.msg);
              }
              
            }).catch((err)=>{
                console.log('err: ',err);
              
            })
        }
        else{
            setEmail('');
              setName('');
              setPassword('');
            // alert('Passwords do not match')
            notify("Passwords don't match");
        }
    }

  return (
    
    <div className='h-full w-full' style={{backgroundImage:`url(${redder})`, backgroundSize:'cover',position:'relative'}}>
         <ToastContainer />
        <div className='flex flex-row h-auto'>
            <div className='w-full border border-red-400 h-auto'>

            {/* , filter:'blur(4px)' */}
            {/* login div */}
        <div className="bg-grey-lighter min-h-screen flex flex-col " style={{ position: 'relative',backdropFilter: 'none' }}>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2" style={{ backdropFilter: 'none' }}>
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full" style={{ backdropFilter: 'none' }}>
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)} />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPass(e.target.value)} />

                    <button
                        type = "button"
                        id = "signup-btn"
                        className = "w-full text-center py-3 rounded bg-green-400  text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={handleSubmit}
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        &nbsp;Privacy Policy
                        </a>
                    </div>
                    <div className="text-gray-400 mt-6 text-sm mx-auto w-fit">
                    Already have an account? 
                    <Link to="/login" className="no-underline border-b border-blue font-bold text-blue-500 text-sm" style={{textDecoration:'none'}}>
                       &nbsp; Log in
                    </Link>.
                </div>
                </div>

                
            </div>
        </div>
        {/* login div */}
            </div>
            
        </div>
        
    </div>
    
  )
}

export default Signup