import Link from "next/link";
import { useState } from "react";
import { useAppContext } from "../../../context/state";

const OverviewStructureSurfaceMobile = ({
    color,

}) => {
    const [actualLink, setactualLink] = useState(0)
    const { sharedState, setSharedState } = useAppContext()
    setSharedState(actualLink)

    const colors = {
        mercury:    `border-b-4 py-4 border-mercury-menu w-[80px] text-center`,
        venus:      `border-b-4 py-4 border-venus w-[80px] text-center`,
        earth:      `border-b-4 py-4 border-earth w-[80px] text-center`,
        mars:       `border-b-4 py-4 border-mars w-[80px] text-center`,
        jupiter:    `border-b-4 py-4 border-jupiter w-[80px] text-center`,
        saturn:     `border-b-4 py-4 border-saturn w-[80px] text-center`,
        uranus:     `border-b-4 py-4 border-uranus w-[80px] text-center`,
        neptune:    `border-b-4 py-4 border-neptune w-[80px] text-center`,
    }

    return ( 
        <ul className=" fontSpartanBold flex justify-around list-none border-b border-white/25 cursor-pointer items-center text-[10px] tracking-[1.93px] planet--informations uppercase">
                <li 
                onClick={() => {
                        setactualLink(0)
                    }
                } 
                className={actualLink == 0 ? `${colors[color]}` : 'border-b-4 border-transparent w-[80px] text-center'}
                >
                    Overview
                </li>
                <li 
                onClick={() => setactualLink(1)} 
                className={actualLink == 1 ? `${colors[color]}` : 'border-b-4 border-transparent w-[80px] text-center'}
                >
                    Structure
                </li>
                <li 
                onClick={() => setactualLink(2)} 
                className={actualLink == 2 ? `${colors[color]}` : 'border-b-4 border-transparent w-[80px] text-center'}
                >
                    Surface
                </li>
            </ul>
    );
}
 
export default OverviewStructureSurfaceMobile;