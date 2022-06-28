import { useState } from "react";
import { useAppContext } from "../../../context/state";


const colors = {
    mercury:    `border border-1 border-white/25 bg-mercury-menu h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase`,
    earth:      `border border-1 border-white/25 bg-earth h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase`,
    venus:      `border border-1 border-white/25 bg-venus h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase`,
    mars:       `border border-1 border-white/25 bg-mars h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase`,
    jupiter:    `border border-1 border-white/25 bg-jupiter h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase`,
    saturn:     `border border-1 border-white/25 bg-saturn h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase`,
    uranus:     `border border-1 border-white/25 bg-uranus h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase`,
    neptune:    `border border-1 border-white/25 bg-neptune h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase`,
}

const OverviewStructureSurfaceTablet = ({
    color
}) => {


    const [actualLink, setactualLink] = useState(0)
    const { sharedState, setSharedState } = useAppContext()
    setSharedState(actualLink)
    
    return (
        <div className="h-[253px] flex planet--informations tracking-[1.93px]">
            <ul className="w-[281px] lg:w-[350px] h-[152px] lg:h-[176px] m-auto flex flex-col justify-around align-middle text-[9px] text-white/25 uppercase">
                <li 
                onClick={() => setactualLink(0)} 
                className={actualLink == 0 ? `${colors[color]}` : 'h-[40px] lg:h-[48px] border border-1 flex items-center border-white/25 cursor-pointer uppercase lg:hover:bg-grey/25'}
                >
                    <span className="mx-4 text-white/25">01</span><span>Overview</span>
                </li>
                <li 
                onClick={() => setactualLink(1)} 
                className={actualLink == 1 ? `${colors[color]}` : 'h-[40px] lg:h-[48px] border border-1 flex items-center border-white/25 cursor-pointer uppercase lg:hover:bg-grey/25'}
                >
                    <span className="mx-4 text-white/25">02</span><span>Structure</span>
                </li>
                <li 
                onClick={() => setactualLink(2)} 
                className={actualLink == 2 ? `${colors[color]}` : 'h-[40px] lg:h-[48px] border border-1 flex items-center border-white/25 cursor-pointer uppercase lg:hover:bg-grey/25'}
                >
                    <span className="mx-4 text-white/25">03</span><span>Surface geology</span>
                </li>
            </ul>
        </div>
    );
}
 
export default OverviewStructureSurfaceTablet;