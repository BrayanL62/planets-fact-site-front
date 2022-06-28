
import NavbarMobile from '../components/responsive-navbar/NavbarMobile';
import NavbarDesktop from '../components/responsive-navbar/NavbarDesktop'
import { useState, useCallback, useEffect } from 'react';
import Overview from '../components/Card/Overview';
import Router from 'next/router';
import { useAppContext } from '../context/state';

// Function GetStaticPaths to generate Paths
export const getStaticPaths = async () => {
    const res = await fetch('https://serene-atoll-19450.herokuapp.com/api/planets/', {
        headers: new Headers({
        'Authorization': `Bearer ${process.env.TOKEN_API}`
        })
    })
    const planets = await res.json();
    const data = planets.data
    const paths = data.map(planet => {
        return {
        params: { 
            planet: planet.id.toString(),
        }
        }
    })

    return {
        paths,
        fallback: false
    }
}
  
// Function GetStaticProps to generate props for my planet
export const getStaticProps = async (context) => {
    const qs = require('qs');
    const query = qs.stringify({
        populate: ['images']
    }, {
        encodeValuesOnly: true,
    });

    const id = context.params.planet
    const linkToFetch = 'https://serene-atoll-19450.herokuapp.com/api/planets/' + id + `?${query}`
    const res = await fetch(linkToFetch, {
        headers: new Headers({
        'Authorization': `Bearer ${process.env.TOKEN_API}`
        })
    })
    const planet = await res.json()
    const data = planet.data

    return {
        props: { 
            planet: data.attributes,
        }
    }
}

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
    }, []);
  
    return targetReached;
};


const Planet = (props) => {
    const planet = props.planet
    const isBreakpoint = useMediaQuery(767)
    // console.log(planet);

    return ( 
    <div>
        { isBreakpoint ? (
            <div>
                <NavbarMobile />
            </div>
            ) : (
            <div>
                <NavbarDesktop />
            </div>
            )
        }
        <Overview 
            color={planet.name.toLowerCase()}
            planetName={planet.name.toLowerCase()}
            imgSrcOverview={planet.images.data[0].attributes.url}
            overviewContent={planet.overviewContent}
            overviewSource={planet.overviewSource}
            imgSrcStructure={planet.images.data[1].attributes.url}
            structureContent={planet.structureContent}
            structureSource={planet.structureSource}
            imgSrcSurface={planet.images.data[2].attributes.url}
            surfaceContent={planet.geologyContent}
            surfaceSource={planet.geologySource}
            rotationTime={planet.rotation.toUpperCase()}
            revolutionTime={planet.revolution.toUpperCase()}
            radius={planet.radius}
            averageTemp={planet.temperature.toUpperCase()}
        />
    </div>
    );

}
 
export default Planet;