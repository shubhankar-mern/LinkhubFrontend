import React, {useState, useEffect,useRef} from 'react'
import axios from 'axios';
import Footers from '../Components/Footer';
import wallpaper from '../images/wallpaper.png';
import backlink from '../images/backlink.png';
import socialmedia from '../images/socialmedia.png';
import userxxx from '../images/userxxx.png';
import { useNavigate, useParams } from 'react-router-dom';
import copy from 'copy-text-to-clipboard';
import config from '../config';
const View = () => {
    const navigate = useNavigate();
    
    
    // const [linkSetPane, setlinkSetPane] = useState(true);
    // const [socialLinkPane, setsocialLinkPane] = useState(false);
    const [profileExists, setprofileExists] = useState(false);
    const [linkcards, setlinkcards] = useState([{heading:'', link:''}]);
    //const [file, setFile] = useState();
    const [display_url, setDisplayUrl] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [facebook, setFacebook] = useState('');
    const [youtube, setYoutube] = useState('');
    const [shortbio, setshortbio] = useState('');
    const [mylink, setmyLink] = useState('');
   // const [linkPlaceholder, setlinkPlaceholder] = useState('');
  //  const [profileExistsUpdate, setprofileExistsUpdate] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    
    const { v4: uuidv4 } = require('uuid');

    let { linkId } = useParams();
    console.log('id',linkId);
    const baseUrl = config.baseUrl;
    useEffect(() => {
      //get data from API
      axios.get(`${baseUrl}/linkhub/${linkId}`)
            .then((res)=>{
              console.log('res: ',res.data);
              setDisplayUrl(res.data.data.image_url);
              setUserEmail(res.data.data.email);
              setFacebook(res.data.data.facebook_url);
              setInstagram(res.data.data.instagram_url)
              setLinkedin(res.data.data.linkedin_url);
              setlinkcards(res.data.data.allLinks); 
              setTwitter(res.data.data.twitter_url);
              setYoutube(res.data.data.youtube_url);
              setshortbio(res.data.data.shortbio);
              setprofileExists(true);
              setUserEmail(res.data.data.email);
              setmyLink(res.data.data.linkhub_id);
           }).catch((err)=>{
                console.log('err: ',err);
            })
     
    }, []);
  return (
    <div className='w-full h-auto'>
      {/* mobile view */}
      
                   {/* //'https://raw.githubusercontent.com/shubhankar-mern/cdnimages/master/wallpaper.png' */}
                    <img src={wallpaper} className='h-full w-full absolute -z-10'/>
                         <div className='bg-gray-400 w-28 h-28 rounded-full mx-auto '>
                            {/* image will be here */}
                            <img src={display_url} className='w-28 h-28 rounded-full'/>
                         </div>
                         <p className='mx-auto mt-3 text-gray-300 text-sm text-center font-bold'>@{mylink}</p>
                         <p className='mx-auto my-2  text-gray-300 text-xs text-center font-light'>{shortbio}</p>
                         <div className=' my-2 flex flex-row justify-center'>
                         <a href={facebook} target="_blank" rel="noopener noreferrer">
                         {facebook && (<i class="fa-brands fa-facebook fa-2xs mx-1" style={{color:'white'}}></i>)}
                         </a>
                         <a href={twitter} target="_blank" rel="noopener noreferrer">
                         {twitter && (<i class="fa-brands fa-x-twitter fa-2xs mx-1" style={{color:'white'}}></i>)}
                         </a>
                         <a href={linkedin} target="_blank" rel="noopener noreferrer">
                         {linkedin && (<i class="fa-brands fa-linkedin fa-2xs mx-1" style={{color:'white'}}></i>)}
                         </a>
                         <a href={instagram} target="_blank" rel="noopener noreferrer">
                         {instagram && (<i class="fa-brands fa-instagram fa-2xs mx-1" style={{color:'white'}}></i>)}
                         </a>
                         <a href={youtube} target="_blank" rel="noopener noreferrer">
                         {youtube && (<i class="fa-brands fa-youtube fa-2xs mx-1" style={{color:'white'}}></i>)}
                         </a>
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
                              <a href={card.link} target="_blank" rel="noopener noreferrer"> <div className='mx-auto my-2 w-11/12 leading-10 text-white text-xs text-center font-mono bg-black rounded-lg cursor-pointer'>
                                    {card.heading}
                                </div></a>
                            ))
                         )}
                         </div>

                    
                
                  {/* mobile view */}
    </div>
  )
}

export default View;