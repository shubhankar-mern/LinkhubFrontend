import React, {useState, useEffect} from 'react'
import redder from '../images/pxfuel.jpg'
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const baseUrl = config.baseUrl;
    const handleClick = () => {
        let data = {
            email,
            password
        }
        console.log('data: ',data);
        axios.post(`${baseUrl}/login`, data)
        .then((res)=>{
            if(res.data.status==='success'){
                console.log('res: ',res);
                storeJwtToken(res.data.jwtkn);
            }
            else if(res.data.status==="fail"){
                console.log('err: ',res.data);
            }
         
        }).catch((err)=>{
            console.log('err: ',err);
        })
    }
    function storeJwtToken(token) {
        localStorage.setItem('jwtToken', token);
        console.log('JWT token stored in localStorage.');
        navigate('/dashboard');
      }
      const checkJWTExistorNot = () => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken &&jwtToken!==undefined) {
          navigate('/dashboard');
        }
      }
      useEffect(() => {
          checkJWTExistorNot()
      },[])
  return (
    <div className='h-full w-full  backdrop-blur' style={{backgroundImage:`url(${redder})`,backgroundSize:'contain'}}>
        <div className='flex flex-row h-auto'>
            <div className='w-full border border-red-400 h-auto'>


        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Login</h1>
                    

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        onChange={(e)=> setEmail(e.target.value)} />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        onChange={(e)=> setPassword(e.target.value)} />
                    

                    <button
                        type="button"
                        className="w-full text-center py-3 rounded-2xl bg-red-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    onClick={() =>handleClick()}>Login</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        &nbsp; Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        &nbsp; Privacy Policy
                        </a>
                    </div>
                    <div className="text-gray-400 mt-6 w-fit mx-auto text-sm">
                    Don't have an account? 
                    <Link to="/signup" className="no-underline text-sm font-bold border-b border-blue text-blue-500" >
                    &nbsp;Sign Up
                    </Link>.
                </div>
                </div>

                
            </div>
        </div>

            </div>
            
        </div>
        
    </div>
  )
}

export default Login