import React, {useState, useEffect,useRef} from 'react'
import axios from 'axios';
import Footers from '../Components/Footer';
import wallpaper from '../images/wallpaper.png';
import backlink from '../images/backlink.png';
import edit from '../images/edit.png';
import socialmedia from '../images/socialmedia.png';
import userxxx from '../images/userxxx.png';
import { useNavigate } from 'react-router-dom';
import copy from 'copy-text-to-clipboard';
import config from '../config';
const Dashboard = () => {
  const navigate = useNavigate();
    const [isdashboard, setdashboard] = useState(true);
    const [issettings, setsettings] = useState(false);
    const [linkSetPane, setlinkSetPane] = useState(true);
    const [socialLinkPane, setsocialLinkPane] = useState(false);
    const [profileExists, setprofileExists] = useState(false);
    
    const [linkcards, setlinkcards] = useState([{heading:'', link:''}]);
    const [file, setFile] = useState();
    const [display_url, setDisplayUrl] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [facebook, setFacebook] = useState('');
    const [youtube, setYoutube] = useState('');
    const [shortbio, setshortbio] = useState('');
    const [mylink, setmyLink] = useState('');
    const [linkPlaceholder, setlinkPlaceholder] = useState('');
    const [profileExistsUpdate, setprofileExistsUpdate] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userUpdated,setuserUpdated] = useState(false);
    
    const { v4: uuidv4 } = require('uuid');
    const baseUrl = config.baseUrl;
    
 const generateUUID = () => {
  let uuid = uuidv4();
  let sliced =  uuid.slice(2,8);
  console.log(sliced);
  setlinkPlaceholder(sliced);
 }

// use radixui

    const fileInputRef = useRef(null);
        /**
     * Handles the click event on the image.
     *
     * @return {undefined} No return value.
     */
    const handleImageClick = () => {
      if(profileExists===false && profileExistsUpdate===false){
      fileInputRef.current.click();
      }else if (profileExists===true && profileExistsUpdate===true){
        fileInputRef.current.click();
      }
      else if(profileExists===false && profileExistsUpdate===true){
        //maybe exixts==false
        fileInputRef.current.click();
      }
    };
    const handleAccountDelete = () => {
      if(profileExists===true){
        axios.delete(`${baseUrl}/delete?email=${userEmail}`)
        .then((res)=>{
          if(res.data.status==="success"){
            localStorage.removeItem('jwtToken');
            navigate('/');
          }
            //something  
        })
        .catch((err)=>{
          console.log('err: ',err);
        })
      }
    }
    const handleChangeImage = async (e) => {
        const ImgData = new FileReader();
        ImgData.addEventListener('load', () => {
          setFile(ImgData.result);
        });
        ImgData.readAsDataURL(e.target.files[0]);
      };

      const copyToClipboard = () => {
        const copyButton = document.getElementById('linkhubidbtn');
        const copyText = document.getElementById('linkhubidinput');

          // Add a click event listener to the copy button
          
            // Select the text within the input element
            copy(copyText.value);

         
      }
    const checkUserAndFetchData = () => {
      let emailUser = extractEmailFromJWT();
      console.log(emailUser);
      axios.get(`${baseUrl}/linkfetch?email=${emailUser}`)
      .then((res)=>{
         console.log('checkUserAndFetchData res: ',res.data);
         if(res.data.data.linkhub_id===null){
          setprofileExists(false);
          return;
         }
         if(res.data.data){
          setlinkcards(res.data.data.linkcards);
          setprofileExists(true);
          setFacebook(res.data.data.facebook_url);
          setInstagram(res.data.data.instagram_url);
          setLinkedin(res.data.data.linkedin_url);
          setTwitter(res.data.data.twitter_url);
          setYoutube(res.data.data.youtube_url);
          setshortbio(res.data.data.shortbio);
          setmyLink(res.data.data.linkhub_id);
          setDisplayUrl(res.data.data.image_url);
          setUserEmail(res.data.data.email);
          setprofileExists(true);
          setuserUpdated(false);
          setprofileExistsUpdate(false);
         }
        

      })
      .catch((err)=>{
        console.log('err: ',err);
      })
    }


    // const checkUserAndFetchData = async () => {
    //   try {
    //     let emailUser = extractEmailFromJWT();
    //     console.log(emailUser);
    
    //     const res = await axios.get(`${baseUrl}/linkfetch?email=${emailUser}`);
    //     console.log('checkUserAndFetchData res:', res.data);
    
    //     if (res.data) {
    //       console.log('Linkcards found in the response:', res.data.id);
    //     } else {
    //       console.log('No linkcards found in the response.');
    //     }
    //   } catch (err) {
    //     console.error('Error fetching data:', err);
    //   }
    // };

      useEffect(() => {
        //see if profile exists and update flag
       // setprofileExists(true);
       //generateUUID()
       checkUserAndFetchData();
      }, [userUpdated]);

    useEffect(() => {
        if (file) {
          uploadImageData();
        }
      }, [file]);

      const uploadImageData = () => {
        const form = new FormData();
        console.log('form', file.slice(23));
        form.append('image', file.slice(23));
        form.set('key', 'afc4ea18db790b9f3ab9406360857bd1');
        axios
          .post('https://api.imgbb.com/1/upload', form, {
            'Content-Type': 'multipart/form-data',
          })
          .then((res) => {
            console.log('ddcd', res);
            setDisplayUrl(res.data.data.display_url);
          })
    
          .catch((err) => {
            console.log(err);
          });
      };
    const handleClick=()=>{
      if (linkSetPane){
        if(profileExists===false){
          setlinkcards([...linkcards,{heading:"",link:""}])
        }
        else if(profileExists===true&&profileExistsUpdate===true){
          setlinkcards([...linkcards,{heading:"",link:""}])
        }
        else{
          if(profileExistsUpdate===true){
            setlinkcards([...linkcards,{heading:"",link:""}])
          }
        }
        
      }else{
        setlinkSetPane(true)
        setsocialLinkPane(false)
      }
        
    }
    const handleChange=(e,i)=>{
        const {name,value}=e.target
        const onchangeVal = [...linkcards]
        onchangeVal[i][name]=value
        setlinkcards(onchangeVal)
    }
    const handleDelete=(i)=>{
        const deleteVal = [...linkcards]
        deleteVal.splice(i,1)
        setlinkcards(deleteVal)
    }
    
    function extractEmailFromJWT() {
      const jwtToken = localStorage.getItem('jwtToken');
      
      if (jwtToken) {
        // Split the token into its three parts: header, payload, and signature
        const tokenParts = jwtToken.split('.');
        
        // The payload is the second part (index 1)
        const payload = JSON.parse(atob(tokenParts[1]));
        
        // Check if the payload contains an email field (adjust this according to your JWT structure)
        if (payload.email) {
          setUserEmail(payload.email);
          return payload.email;
        }else{
          return 'NULL';
        }
      }
    }
    // handle logout
    const handleLogout = () => {
      localStorage.removeItem('jwtToken');
      navigate('/login');
    };

    const submission=async ()=>{
      try{
        const newObj = {
        email: extractEmailFromJWT(),
        allLinks: linkcards,
        image_url: display_url,
        linkedin_url: linkedin,
        instagram_url: instagram,
        twitter_url: twitter,
        facebook_url: facebook,
        youtube_url: youtube,
        shortbio: shortbio,
        linkhub_id: mylink,
      }
              console.log('newObj', newObj)
            
                  await axios.post(`${baseUrl}/postlink`, newObj)
                    .then((res)=>{
                      console.log('res: ',res.data.msg);
                      if (res.data.msg === "Links created successfully."){
                        setprofileExists(true);
                      }else{
                        setprofileExists(false);
                      }
                    }).catch((err)=>{
                        console.log('err: ',err);
                    })

          } catch (error) {
            console.error('Error:', error);
            
          }
    }
    //final submit
    const handleFinalSubmit = async(val) => {
      if(val==='create'){
        await submission();
      }else{
        await submission();
        setuserUpdated(true);
      }
      
    }
        const myPage = (linkset) => {
          console.log('linkset: ',linkset);
         
        }

        const cursorStyle = profileExists ? { marginTop: '20px', marginLeft: '40px', cursor: 'default' } : { marginTop: '20px', marginLeft: '40px', cursor: 'pointer' };
  return (
    <div className='w-full h-full flex  flex-col bg-slate-300'>
        <div className=' h-14 bg-slate-700 flex  flex-row justify-between lg:w-10/12 w-full rounded-xl mt-4 mx-auto ' style={{position:'sticky', top:'0', zIndex:'50'}}>
                {/* logo */}
                <div className='flex flex-row md:text-base text-xs'>
                <p className='text-white w-fit font-semibold mb-3 my-2 pl-10 leading-10 hover:scale-110 transition-all duration-300 inline-block cursor-pointer  ' onClick={()=>{setdashboard(true);setsettings(false)}}> DashBoard</p>
                <p className='text-gray-200 font-semibold my-2 pl-10 leading-10 hover:scale-110 transition-all duration-300 inline-block cursor-pointer'> Analytics <i class="fa-solid fa-lock fa-2xs"></i></p>
                <p className='text-gray-200 font-semibold my-2 pl-10 leading-10 hover:scale-110 transition-all duration-300 inline-block cursor-pointer'> Go Pro <i class="fa-solid fa-lock fa-2xs"></i></p>
                <p className='text-white font-semibold my-2 pl-10 leading-10 hover:scale-110 transition-all duration-300 inline-block cursor-pointer' onClick={()=>{setdashboard(false);setsettings(true)}}> Settings</p>
                </div>
                <div className='flex flex-row md:text-base text-xs'>
                
                <p className='text-white font-semibold my-2 mr-5 pl-10 leading-10 hover:scale-110 transition-all duration-300 inline-block cursor-pointer' onClick={()=>{handleLogout()}}> Logout</p>
                </div>
        </div>

        {/* sidepane */}
        
          {isdashboard&&(
            <div className=' w-full h-full border border-red-800 flex lg:flex-row flex-col justify-between mt-15 mb-20'>


          {/* <input type="file"  placeholder='💾 Upload' id="images" accept="image/*" onChange={handleChange} required/> */}
        
                {/* addition view */}
                <div className='border border-green-500 bg-slate-100 mt-20 lg:w-6/12 w-full flex flex-col justify-center' style={{height: '80vh'}}>
                    
                    

                <div className='flex flex-row justify-evenly my-8'>
                <p className='text-gray-400 text-sm font-semibold hover:translate-x-2' onClick={handleClick}><img src={backlink} className='w-5 h-5' /></p>
                <p className='text-gray-400 text-sm font-semibold hover:translate-x-2'><img src={socialmedia} className='w-5 h-5 cursor-pointer' onClick={()=>{setlinkSetPane(false);setsocialLinkPane(true)}} /></p>
                <p className='text-gray-400 text-sm font-semibold hover:translate-x-2'><img src={userxxx} className='w-5 h-5 cursor-pointer' onClick={handleImageClick} /><input ref={fileInputRef} className='text-xs hidden' type="file"  placeholder={'💾 Upload'} id="images" accept="image/*" onChange={handleChangeImage} required/></p>
                {profileExists &&(<p className='text-gray-400 text-sm font-semibold hover:translate-x-2' onClick={()=>{setprofileExistsUpdate(!profileExistsUpdate)}}><img src={edit} className='w-5 h-5' /></p>)}
                </div>
                 {/* yaha will be list of cards */}
                 {linkSetPane&&
                        (<div className='border border-red-400' style={{height: '80vh', overflowY: 'scroll'}}>
                        {linkcards &&(
                                    linkcards.map((card, index)=>(
                                        <div key={index} className='flex flex-col mx-auto mt-5 w-11/12 h-30 leading-10  text-black text-xs text-center font-bold bg-white shadow-2xl rounded-xl'>
                            <input
                                className='rounded-xl w-5/6 py-0.5 px-3 ml-1 my-1 border text-sm border-gray-300 placeholder-gray-400 '
                                name="heading"
                                value={card.heading}
                                onChange={(e) => handleChange(e, index)}
                                placeholder="Heading"
                                disabled={profileExists&&!profileExistsUpdate}
                                style={{ outline: 'none' }}
                            />
                            <div className='flex flex-row  ml-1 my-1 '>
                            <input
                                className='rounded-xl w-5/6 py-0.5 px-3 border mt-3 text-sm border-gray-300 placeholder-gray-400'
                                name="link"
                                value={card.link}
                                onChange={(e) => handleChange(e, index)}
                                placeholder="Link"
                                disabled={profileExists&&!profileExistsUpdate}
                                style={{ outline: 'none' }}
                            />
                            
                            <i class="fa-solid fa-trash" onClick={() => {if(!profileExists||profileExistsUpdate){handleDelete(index)}}} style={cursorStyle}></i>
                            
                            </div>
                            
                            </div>
                                    ))
                        )}
                        </div>)
                    }
                 {/* yaha will be list of cards */}
                 {/* set social link */}
               {
                  !linkSetPane&& socialLinkPane && (
                    <div className='border border-red-400' style={{height: '80vh'}}>
                       <div className=' my-1 flex flex-col justify-between'>
                         {/* linktree linker */}
                         <div className='flex flex-row  ml-1 my-1 '>
                           <i class="fa-solid fa-link  mx-1"  style={{marginTop:'20px',color:'blue', marginLeft:'40px',cursor:'pointer'}}></i>
                            <input
                                className='rounded-xl w-5/6 py-0.5 px-3 border mt-3 text-sm border-gray-300 placeholder-gray-400'
                                name="link"    
                                placeholder="Your LinkHub ID goes here"
                                style={{ outline: 'none' }}
                                value={mylink}
                                disabled={profileExists}
                                onChange={(e)=> {
                                  let text = e.target.value 
                                  setmyLink(text)
                                }}
                            />
                            
                           
                            
                            </div>
                            {/* linktree linker */}
                         {/* facebook linker */}
                           <div className='flex flex-row  ml-1 my-1 '>
                           <i class="fa-brands fa-facebook  mx-1"  style={{marginTop:'20px',color:'blue', marginLeft:'40px',cursor:'pointer'}}></i>
                            <input
                                className='rounded-xl w-5/6 py-0.5 px-3 border mt-3 text-sm border-gray-300 placeholder-gray-400'
                                name="link"    
                                placeholder="Link"
                                style={{ outline: 'none' }}
                                value={facebook}
                                disabled={profileExists&&!profileExistsUpdate}
                                onChange={(e)=>setFacebook(e.target.value)}
                            />
                            
                           
                            
                            </div>
                            {/* facebook linker */}
                            {/* twitter linker */}
                            <div className='flex flex-row  ml-1 my-1 '>
                            <i class="fa-brands fa-x-twitter  mx-1"  style={{marginTop:'20px',color:'black', marginLeft:'40px',cursor:'pointer'}}></i>
                            <input
                                className='rounded-xl w-5/6 py-0.5 px-3 border mt-3 text-sm border-gray-300 placeholder-gray-400'
                                name="link"    
                                placeholder="Link"
                                style={{ outline: 'none' }}
                                value={twitter}
                                disabled={profileExists&&!profileExistsUpdate}
                                onChange={(e)=>setTwitter(e.target.value)}
                            />
                            
                            
                            
                            </div>

                            {/* twitter linker */}
                             {/* linkedin linker */}
                             <div className='flex flex-row  ml-1 my-1 '>
                             <i class="fa-brands fa-linkedin  mx-1"  style={{marginTop:'20px',color:'blue', marginLeft:'40px',cursor:'pointer'}}></i>
                            <input
                                className='rounded-xl w-5/6 py-0.5 px-3 border mt-3 text-sm border-gray-300 placeholder-gray-400'
                                name="link"    
                                placeholder="enter linkedin"
                                style={{ outline: 'none' }}
                                value={linkedin}
                                disabled={profileExists&&!profileExistsUpdate}
                                onChange={(e)=>setLinkedin(e.target.value)}
                            />
                            
                            
                            
                            </div>
                             
                             {/* linkedin linker */}
                              {/* instagram linker */}
                              <div className=' flex flex-row  ml-1 my-1 '>
                              <i class="fa-brands fa-instagram   mx-1"  style={{marginTop:'20px',color:'red', marginLeft:'40px',cursor:'pointer'}}></i>
                            <input
                                className='rounded-xl w-5/6 py-0.5 px-3 border mt-3 text-sm border-gray-300 placeholder-gray-400'
                                name="link"    
                                placeholder="Link"
                                style={{ outline: 'none' }}
                                value={instagram}
                                disabled={profileExists&&!profileExistsUpdate}
                                onChange={(e)=>setInstagram(e.target.value)}
                            />
                            
                            
                            
                            </div>
                              {/* instagram linker */}  

                              {/* youtube linker */}
                              <div className=' flex flex-row  ml-1 my-1 '>
                              <i class="fa-brands fa-youtube   mx-1"  style={{marginTop:'20px',color:'red', marginLeft:'40px',cursor:'pointer'}}></i>
                            <input
                                className='rounded-xl w-5/6 py-0.5 px-3 border mt-3 text-sm border-gray-300 placeholder-gray-400'
                                name="link"    
                                placeholder="Link"
                                style={{ outline: 'none' }}
                                value={youtube}
                                disabled={profileExists&&!profileExistsUpdate}
                                onChange={(e)=>setYoutube(e.target.value)}
                            />
                            
                            
                            
                            </div>
                              {/* youtube linker */}

                              {/* shortbio linker */}
                              <div className=' flex flex-row  ml-1 my-1 '>
                              <i class="fa-regular fa-user   mx-1"  style={{marginTop:'20px',color:'blue', marginLeft:'40px',cursor:'pointer'}}></i>
                            <input
                                className='rounded-xl w-5/6 py-0.5 px-3 border mt-3 text-sm border-gray-300 placeholder-gray-400'
                                name="link"    
                                placeholder="Short Bio"
                                style={{ outline: 'none' }}
                                value={shortbio}
                                disabled={profileExists&&!profileExistsUpdate}
                                onChange={(e)=>setshortbio(e.target.value)}
                            /> 
                            
                            </div>
                              {/* shortbio linker */}
                            
                         </div>
                      </div>
                  )
                 }
                 {/* set social link */}
                </div>
                {/* addition view */}


                 {/* mobile view */}
                <div className='border border-black h-auto mt-20 lg:w-6/12 w-full flex justify-center bg-slate-100'>
                   <div className='w-7/12  rounded-3xl border-8 border-black bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 backdrop-blur-lg flex flex-col' style={{height: '80vh'}}>
                    <img src={wallpaper} className='h-full w-full absolute -z-10'/>
                         <div className='bg-gray-400 w-28 h-28 rounded-full mx-auto mt-8'>
                            {/* image will be here */}
                            <img src={display_url} className='w-28 h-28 rounded-full'/>
                         </div>
                         <p className='mx-auto mt-3 text-gray-300 text-sm text-center font-bold'>@{mylink}</p>
                         <p className='mx-auto mb-1  text-gray-300 text-xs text-center font-light'>{shortbio}</p>
                         <div className=' my-1 flex flex-row justify-center'>
                         {facebook && (<i class="fa-brands fa-facebook fa-2xs mx-1" style={{color:'white'}}></i>)}
                         {twitter && (<i class="fa-brands fa-x-twitter fa-2xs mx-1" style={{color:'white'}}></i>)}
                         {linkedin && (<i class="fa-brands fa-linkedin fa-2xs mx-1" style={{color:'white'}}></i>)}
                         {instagram && (<i class="fa-brands fa-instagram fa-2xs mx-1" style={{color:'white'}}></i>)}
                         {youtube && (<i class="fa-brands fa-youtube fa-2xs mx-1" style={{color:'white'}}></i>)}
                         </div>
                         <div className='border border-red-300 mt-2'  style={{height: '40vh', overflowY: 'scroll'}}>
                        
                         <style>
                                {`
                                /* Hide the scrollbar for both Webkit and Firefox */
                                ::-webkit-scrollbar {
                                    width: 0.5em;
                                }

                                ::-webkit-scrollbar-thumb {
                                    background-color: transparent;
                                }

                                /* Hide the scrollbar for Internet Explorer and Edge */
                                * {
                                    scrollbar-width: none;
                                    -ms-overflow-style: none;
                                }
                                `}
                            </style>

                         {linkcards &&(
                            linkcards.map((card)=>(
                                <div className='mx-auto my-2 w-11/12 leading-10 text-white text-xs text-center font-mono bg-black rounded-lg cursor-pointer'>
                                    {card.heading}
                                </div>
                            ))
                         )}
                         </div>

                    </div>
                </div>
                  {/* mobile view */}
               
            </div>
          )}

          {
            issettings&&(
                <div className='md:w-6/12 w-full h-full border  flex  flex-col justify-between  rounded-lg mx-auto my-auto'>
                  <div className='mx-auto mt-16 font-thin text-6xl'>My Account</div>
                  <div class="container mx-auto mt-10 p-6 bg-white rounded shadow-lg">
              <form>
                  <div class="mb-4">
                      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                      <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Your Email" defaultValue={userEmail} required disabled/>
                  </div>
                  <div class="mb-4">
                      <label for="proSubscription" class="block text-gray-700 text-sm font-bold mb-2">Pro Subscription</label>
                      <select id="proSubscription" name="proSubscription" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" disabled>
                          <option value="basic" selected>Basic</option>
                          <option value="pro">Pro</option>
                          <option value="premium">Premium</option>
                      </select>
                  </div>
                  <div class="mb-4">
                      <label for="linkhubId" class="block text-gray-700 text-sm font-bold mb-2">Linkhub ID <i onClick={()=>copyToClipboard(`${baseUrl}/a1/b1/${mylink}`)} id='linkhubidbtn'  class="fa-regular fa-copy cursor-pointer"></i>&nbsp;&nbsp;<i onClick={()=>myPage(`a1/b1/${mylink}`)} class="fa-solid fa-arrow-right"></i></label>
                      <input type="text" id="linkhubidinput" name="linkhubIdinput" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your Linkhub ID" value={`${baseUrl}/a1/b1/${mylink}`} readonly disabled/>
                  </div>
                  
                      </form>
                  </div>


                  {/* <div className='mx-auto mt-16 font-thin text-6xl'>Current Account</div>
                  <div className='flex flex-col mt-20 bg-white rounded-lg py-10 mb-14'>
                  <form>
                  <div class="mb-4 mx-5">
                      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Admins</label>
                      <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your email" required disabled/>
                  </div>
                  <div class="mb-4 mx-5">
                      <label for="proSubscription" class="block text-gray-700 text-sm font-bold mb-2">Plans</label>
                      <select id="proSubscription" name="proSubscription" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" disabled>
                          <option value="basic" selected>Basic</option>
                          <option value="pro">Pro</option>
                          <option value="premium">Premium</option>
                      </select>
                  </div>
                  <div class="mb-4">
                      
                  </div>
                  
                      </form>
                  </div> */}


                  <div className='mx-auto mt-16 font-thin text-6xl'>Danger Zone</div>
                  <div className='flex flex-row mt-20 bg-white rounded-lg py-10 mb-14'>
                    <button className='ml-10 bg-red-500 text-white font-semibold rounded-lg px-4 py-2' onClick={() => handleAccountDelete()}>Delete Account</button>
                  </div>
                </div>
            )
          }
        {!issettings&&(<div class="p-4 flex flex-row justify-end">
  {!profileExists &&(<button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
  onClick={() => handleFinalSubmit('create')}>
    Submit
  </button>)}

{
  profileExistsUpdate &&(<button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded-full transition duration-300 ease-in-out"
  onClick={() => handleFinalSubmit('update')}>
    Update
  </button>)
  }

</div>)}

       <Footers/>
    </div>
  )
}

export default Dashboard