import Card from './Card'
import Image from "next/image";


const Overview = ({
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
    rotationTime,
    revolutionTime,
    radius,
    averageTemp
}) => {

    return ( 
        <main>
            <Card 
                color={color} 
                planetName={planetName}
                imgSrcOverview={imgSrcOverview}
                overviewContent={overviewContent}
                overviewSource={overviewSource}
                imgSrcStructure={imgSrcStructure}
                structureContent={structureContent}
                structureSource={structureSource}
                imgSrcSurface={imgSrcSurface}
                surfaceContent={surfaceContent}
                surfaceSource={surfaceSource}
            />
            <aside className="m-auto w-[327px] my-7 lg:my-0 md:flex justify-around md:w-[689px] lg:w-[900px] xl:w-[1150px]">
                <div className='w-full flex justify-between h-12 items-center my-1 px-3 border border-white/25 md:w-[164px] md:flex-col md:h-[88px] md:justify-around md:place-items-start md:py-4 lg:w-[200px] xl:w-[255px] lg:h-[128px]'>
                  <span className="fontSpartanBold text-[8px] lg:text-[11px] tracking-[0.73px] lg:tracking-[1px] text-white/50 uppercase">
                      Rotation Time
                  </span>
                  <span className="fontAntonio text-[20px] lg:text-[30px] xl:text-[30px] font-antonio-regular">
                      {rotationTime}
                  </span>
                </div>
                <div className="w-full flex justify-between h-12 items-center my-1 px-3 border border-white/25 md:w-[164px] md:flex-col md:h-[88px] md:justify-around md:place-items-start md:py-4 lg:w-[200px] xl:w-[255px] lg:h-[128px]">
                  <span className="fontSpartanBold text-[8px] lg:text-[11px] tracking-[0.73px] lg:tracking-[1px] text-white/50 uppercase">
                      Revolution Time
                  </span>
                  <span className="fontAntonio text-[20px] lg:text-[30px] xl:text-[30px] font-antonio-regular">
                      {revolutionTime}
                  </span>
                </div>
                <div className="w-full flex justify-between h-12 items-center my-1 px-3 border border-white/25 md:w-[164px] md:flex-col md:h-[88px] md:justify-around md:place-items-start md:py-4 lg:w-[200px] xl:w-[255px] lg:h-[128px]">
                  <span className="fontSpartanBold text-[8px] lg:text-[11px] tracking-[0.73px] lg:tracking-[1px] text-white/50 uppercase">
                      Radius
                  </span>
                  <span className="fontAntonio text-[20px] lg:text-[30px] xl:text-[30px] font-antonio-regular">
                      {radius}
                  </span>
                </div>
                <div className="w-full flex justify-between h-12 items-center my-1 px-3 border border-white/25 md:w-[164px] md:flex-col md:h-[88px] md:justify-around md:place-items-start md:py-4 lg:w-[200px] xl:w-[255px] lg:h-[128px]">
                  <span className="fontSpartanBold text-[8px] lg:text-[11px] tracking-[0.73px] lg:tracking-[1px] text-white/50 uppercase">
                      Average Temp.
                  </span>
                  <span className="fontAntonio text-[20px] lg:text-[30px] xl:text-[30px] font-antonio-regular">
                      {averageTemp}
                  </span>
                </div>
            </aside>
        </main>
    );
}
 
export default Overview;