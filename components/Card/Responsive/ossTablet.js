import { useState } from "react";
import { useAppContext } from "../../../context/state";


const colors = {
    mercury:    `border border-1 border-white/25 bg-mercury-menu h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase xl:leading-[25px] xl:tracking-[2.57px]`,
    earth:      `border border-1 border-white/25 bg-earth h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase xl:leading-[25px] xl:tracking-[2.57px]`,
    venus:      `border border-1 border-white/25 bg-venus h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase xl:leading-[25px] xl:tracking-[2.57px]`,
    mars:       `border border-1 border-white/25 bg-mars h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase xl:leading-[25px] xl:tracking-[2.57px]`,
    jupiter:    `border border-1 border-white/25 bg-jupiter h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase xl:leading-[25px] xl:tracking-[2.57px]`,
    saturn:     `border border-1 border-white/25 bg-saturn h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase xl:leading-[25px] xl:tracking-[2.57px]`,
    uranus:     `border border-1 border-white/25 bg-uranus h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase xl:leading-[25px] xl:tracking-[2.57px]`,
    neptune:    `border border-1 border-white/25 bg-neptune h-[40px] lg:h-[48px] flex items-center cursor-pointer uppercase xl:leading-[25px] xl:tracking-[2.57px]`,
}

const OverviewStructureSurfaceTablet = ({
    color
}) => {


    const [actualLink, setactualLink] = useState(0)
    const { sharedState, setSharedState } = useAppContext()
    setSharedState(actualLink)
    
    return (
        <div className="h-[253px] flex planet--informations tracking-[1.93px] xl:mt-[80px]">
            <ul className=" fontSpartanBold w-[281px] lg:w-[350px] h-[152px] lg:h-[176px] m-auto flex flex-col justify-around align-middle text-[9px] xl:text-[12px] text-white/25 uppercase">
                <li 
                onClick={() => setactualLink(0)} 
                className={actualLink == 0 ? `${colors[color]}` : 'h-[40px] lg:h-[48px] border border-1 flex items-center border-white/25 cursor-pointer uppercase lg:hover:bg-grey/25 xl:leading-[25px] xl:tracking-[2.57px]'}
                >
                    <span className="mx-4 text-white/25">01</span><span>Overview</span>
                </li>
                <li 
                onClick={() => setactualLink(1)} 
                className={actualLink == 1 ? `${colors[color]}` : 'h-[40px] lg:h-[48px] border border-1 flex items-center border-white/25 cursor-pointer uppercase lg:hover:bg-grey/25 xl:leading-[25px] xl:tracking-[2.57px]'}
                >
                    <span className="mx-4 text-white/25">02</span><span>Structure</span>
                </li>
                <li 
                onClick={() => setactualLink(2)} 
                className={actualLink == 2 ? `${colors[color]}` : 'h-[40px] lg:h-[48px] border border-1 flex items-center border-white/25 cursor-pointer uppercase lg:hover:bg-grey/25 xl:leading-[25px] xl:tracking-[2.57px]'}
                >
                    <span className="mx-4 text-white/25">03</span><span>Surface geology</span>
                </li>
            </ul>
        </div>
    );
}
 
export default OverviewStructureSurfaceTablet;