import { useState } from "react";

import DarkFootprints from '../../assets/sidebars/rightSidebar/darkFootprints.svg';
import LightFootprints from '../../assets/sidebars/rightSidebar/lightFootprints.svg'

function SidebarRight({ progressCount }) {
    const [progress, setProgress] = useState(1);

    const NUM_FOOTPRINTS = 8;
    
    const footprints = Array.from({ length: NUM_FOOTPRINTS }, (v, i) => i);
    return (
        <div className="cursor-pointer absolute bg-[#F4F5F5] right-0 top-0 w-[162px] h-full flex flex-col justify-center">
            <div className="font-ibm-plex-sans pt-2 text-sm w-full text-center font-medium">PROGRESS</div>
            <div className="flex flex-col-reverse justify-evenly h-full">
                {footprints.map((footprint, index) => {
                        return (<img key={index} className="h-[100px]" src={index + 1 <= progress? DarkFootprints : LightFootprints} />)
                })
                }
            </div>
                    
                
            
                  
            
            
            
            
        
        </div>
      )
}
export default SidebarRight