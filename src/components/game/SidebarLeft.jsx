function SidebarLeft() {
  const images = ['/leftSidebar/language.png', '/leftSidebar/volume.png', '/leftSidebar/lightMode.png', '/leftSidebar/closeIcon.png'];
  return (
    <div className={`absolute bg-[#F4F5F5] left-0 top-0 w-[162px] h-full flex flex-col items-center`} >
      <div className="font-ibm-plex-sans pt-2 text-sm w-full text-center font-medium flex flex-col">
        <p>MOOD TRACKER</p>
        <img className="h-20" src="/leftSidebar/moods/sad.svg" alt="picture of sad face" />
      </div>
      <div className="relative flex flex-col h-full justify-end mb-36">
        {
          images.map((image, index) => {
            return (
              <img className="cursor-pointer h-[80px] mt-2 mb-2" key={index} src={image} alt="image of sidebar button" />
            )
          })
        }
      </div>

    </div>
  )
}
export default SidebarLeft