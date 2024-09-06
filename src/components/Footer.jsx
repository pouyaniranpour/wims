import '../App.css'
function Footer({ startingPageShowing }) {
  
  //{`${startingPageShowing? '[nth-child(-n+2)]:text-white [&>*:nth-child(1)]:border-r-2 border-white': '' } w-[100px]
  return (
    <div className="z-10 flex h-10 w-full absolute bottom-0 justify-center items-center text-sm font-ibm-plex-sans">
      {!startingPageShowing && <img className='opacity-50 bottom-6 absolute w-24  left-6' src="/landingPage/acmLogo.svg" alt="acm logo" />}
          <ul className= "text-center font-ibm-plex-sans relative bottom-2 leading-5 flex justify-center items-end h-full">
              <li className={`${startingPageShowing? 'text-white border-r border-white': 'border-r border-black' } w-[100px] text-center`}>Home </li>
              <li className={`${startingPageShowing? 'text-white':'border-r border-black'} w-[100px] text-center`}>About </li>
              <li className={`w-[100px] text-center border-r border-black`}>Donate </li>
              <li className={` w-[100px] text-center`}>Privacy</li>
          </ul>
    </div>
  )
}
export default Footer