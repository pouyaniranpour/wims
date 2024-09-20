import '../../../App.css'
import { useLocation } from "react-router-dom";

import logo from '../../../assets/main/acmLogoLight.svg';

function Footer() {
  const location = useLocation().pathname;
  
  return (
    <div className={`flex h-10 w-full absolute bottom-0 justify-center items-center text-sm font-ibm-plex-sans`}  >
          <ul className= "text-center font-ibm-plex-sans relative bottom-2 leading-5 flex justify-center items-end h-full">
              <li className={`${location === '/' ? 'text-white border-r border-white': 'border-r border-black' } w-[100px] text-center`}>Home</li>
              <li className={`${location === '/'? 'text-white':'border-r border-black'} w-[100px] text-center`}>About </li>
              <li className={`w-[100px] text-center border-r border-black`}>Donate</li>
              <li className={` w-[100px] text-center`}>Privacy</li>
      </ul>
      
      {location != '/' && '/endingScreen' ? <img className={`absolute left-10 bottom-10 w-20`} src={logo} alt='acm logo'  /> : ''}
    </div>
  )
}
export default Footer