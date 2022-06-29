import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect, useContext } from "react";
import { useAppContext } from "../../context/state";
import sourceIcon from '../../public/assets/icon-source.svg'
import OverviewStructureSurfaceMobile from "./Responsive/ossMobile";
import OverviewStructureSurfaceTablet from "./Responsive/ossTablet";

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, [updateTarget, width]);
  
    return targetReached;
};

const Card = ({ 
    color,
    planetName,
    imgSrcOverview,
    overviewContent,
    overviewSource,
    imgSrcStructure,
    structureContent,
    structureSource,
    imgSrcSurface,
    surfaceContent,
    surfaceSource,

}) => {

    const isBreakpoint = useMediaQuery(768)
    const { sharedState } = useAppContext()

    const planets = {
        mercury:    'block m-auto w-mobile-mercury h-mobile-mercury md:w-tablet-mercury md:h-tablet-mercury xl:w-desktop-mercury xl:h-desktop-mercury relative',
        venus:      'block m-auto w-mobile-venus h-mobile-venus md:w-tablet-venus md:h-tablet-venus xl:w-desktop-venus xl:h-desktop-venus relative',
        earth:      'block m-auto w-mobile-earth h-mobile-earth md:w-tablet-earth md:h-tablet-earth xl:w-desktop-earth xl:h-desktop-earth relative',
        mars:       'block m-auto w-mobile-mars h-mobile-mars md:w-tablet-mars md:h-tablet-mars xl:w-desktop-mars xl:h-desktop-mars relative',
        jupiter:    'block m-auto w-mobile-jupiter h-mobile-jupiter md:w-tablet-jupiter md:h-tablet-jupiter xl:w-desktop-jupiter xl:h-desktop-jupiter relative',
        saturn:     'block m-auto w-mobile-saturn h-mobile-saturn md:w-tablet-saturn md:h-tablet-saturn xl:w-desktop-saturn xl:h-desktop-saturn relative',
        uranus:     'block m-auto w-mobile-uranus h-mobile-uranus md:w-tablet-uranus md:h-tablet-uranus xl:w-desktop-uranus xl:h-desktop-uranus relative',
        neptune:    'block m-auto w-mobile-neptune h-mobile-neptune md:w-tablet-neptune md:h-tablet-neptune xl:w-desktop-neptune xl:h-desktop-neptune relative',
    }


    
    
    return ( 
        <div className='planet md:w-[689px] lg:w-[900px] xl:w-[1200px] m-auto'>

            { isBreakpoint ? (
                    <OverviewStructureSurfaceMobile color={color} />
                ) : (
                    <OverviewStructureSurfaceTablet color={color} />
                )
            }

            <div className="flex m-auto h-[304px] relative planet--image md:h-[461px] xl:top-[15px] xl:left-[108px]">
                    <div className={`${planets[planetName]}`}>
                        <Image 
                            src={
                                sharedState == 0 || sharedState == 2 ? imgSrcOverview : imgSrcStructure
                            }
                            layout="fill"
                            priority="true"
                            alt="planet overview"
                            />
                    </div>
                        {
                            isBreakpoint ? (
                                sharedState == 2 ?  <div className="absolute bottom-0 left-2/4 -translate-x-2/4"><Image 
                                src={imgSrcSurface}
                                width={128}
                                height={156}
                                alt="planet geology"
                                /></div> : null
                            ) : (
                                sharedState == 2 ? <div className="absolute bottom-0 left-2/4 -translate-x-2/4 w-[163px] h-[199px]"><Image 
                                src={imgSrcSurface}
                                width={163}
                                height={199}
                                alt="planet geology tablet"
                                /></div> : null 
                            )
                        }
            </div>

            <article className="w-[327px] lg:w-[350px] text-center mx-auto planet--description h-[253px] md:text-left lg:mt-auto xl:relative xl:top-5">
                <p className="text-[40px] md:text-5xl lg:text-[80px]">
                    {planetName.toUpperCase()}
                </p>
                <p className=" fontSpartanRegular planet__overview--content py-2 text-xs leading-[22px] md:my-4 lg:text-sm lg:leading-[25px] lg:text-[14px] lg:my-6">
                    {
                        sharedState == 0 ? overviewContent : null
                    }
                    {
                        sharedState == 1 ? structureContent : null
                    }
                    {
                        sharedState == 2 ? surfaceContent : null
                    }
                </p>
                <p className="fontSpartanRegular text-white/25">
                    Source : 
                    <Link 
                        {
                            ...sharedState == 0 ? {href: overviewSource} : null
                        }
                        {
                            ...sharedState == 1 ? {href: structureSource} : null
                        }
                        {
                            ...sharedState == 2 ? {href: surfaceSource} : null
                        }
                    >
                    <a className="fontSpartanRegular bold mx-2 underline text-xs lg:text-[14px] leading-6">
                        Wikipedia 
                    </a>
                    </Link>
                    <Image 
                    className="align-bottom"
                    src={sourceIcon}
                    width={12}
                    height={12}
                    alt="source"
                    />
                </p>
            </article>
        </div>
    );
}
 
export default Card;