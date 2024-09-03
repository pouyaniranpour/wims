import '../App.css'
function Footer() {
  return (
    <div className="flex h-32 w-full absolute bottom-0 justify-center items-center text-sm font-ibm-plex-sans">
          <img className="opacity-50 absolute w-24 bottom-6 left-6" src="/landingPage/acmLogo.svg" alt="acm logo" />
          <ul className='font-ibm-plex-sans relative bottom-2 leading-5 flex justify-center items-end h-full'>
              <li className='list-item'>Home </li>
              <li className='list-item'>About </li>
              <li className='list-item'>Donate </li>
              <li className='list-item'>Privacy</li>
          </ul>
    </div>
  )
}
export default Footer