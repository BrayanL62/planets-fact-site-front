import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import hamburger from '../../public/assets/icon-hamburger.svg'
import chevron from '../../public/assets/icon-chevron.svg'


const NavbarMobile = () => {
  const [isActive, setActive] = useState(false);

  const toggleActiveClass = () => {
      setActive(!isActive);
  };
  return ( 
    <div className="uppercase">
      <nav className="navbar flex justify-between px-6 pt-[0.8rem] pb-2 z-20 border-b border-white/25 h-[68px] items-center">
          <h1 className="font-antonio-regular tracking-[-1.05px] text-[28px]">The Planets</h1>
          <div className="icon cursor-pointer" onClick={toggleActiveClass}>
              <Image
              src={hamburger}
              alt="menu icon"
              />
          </div>
      </nav>
      <div className={isActive ? "navbar__links fixed z-10 w-screen h-screen tracking-[1.36px] text-sm leading-7" : "navbar__links hidden"}>
        <div>
          <Link href="/1">
            <a className="flex justify-between px-6 py-4 border-b border-white/25" onClick={toggleActiveClass}>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-mercury-icon"></div>
                <span className="mx-2">Mercury</span>
              </div>
              <span>
                <Image
                src={chevron}
                alt="chevron"
                />
              </span>
            </a>
          </Link>
          <Link href="/2">
            <a className="flex justify-between px-6 py-4 border-b border-white/25" onClick={toggleActiveClass}>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-venus"></div>
                <span className="mx-2">Venus</span>
              </div>
              <span>
                <Image
                src={chevron}
                alt="chevron"
                />
              </span>
            </a>
          </Link>
          <Link href="/3">
            <a className="flex justify-between px-6 py-4 border-b border-white/25" onClick={toggleActiveClass}>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-earth"></div>
                <span className="mx-2">Earth</span>
              </div>
              <span>
                <Image
                src={chevron}
                alt="chevron"
                />
              </span>
            </a>
          </Link>
          <Link href="/4">
            <a className="flex justify-between px-6 py-4 border-b border-white/25" onClick={toggleActiveClass}>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-mars"></div>
                <span className="mx-2">Mars</span>
              </div>
              <span>
                <Image
                src={chevron}
                alt="chevron"
                />
              </span>
            </a>
          </Link>
          <Link href="/5">
            <a className="flex justify-between px-6 py-4 border-b border-white/25" onClick={toggleActiveClass}>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-jupiter"></div>
                <span className="mx-2">Jupiter</span>
              </div>
              <span>
                <Image
                src={chevron}
                alt="chevron"
                />
              </span>
            </a>
          </Link>
          <Link href="/6">
            <a className="flex justify-between px-6 py-4 border-b border-white/25" onClick={toggleActiveClass}>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-saturn"></div>
                <span className="mx-2">Saturn</span>
              </div>
              <span>
                <Image
                src={chevron}
                alt="chevron"
                />
              </span>
            </a>
          </Link>
          <Link href="/7">
            <a className="flex justify-between px-6 py-4 border-b border-white/25" onClick={toggleActiveClass}>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-uranus"></div>
                <span className="mx-2">Uranus</span>
              </div>
              <span>
                <Image
                src={chevron}
                alt="chevron"
                />
              </span>
            </a>
          </Link>
          <Link href="/8">
            <a className="flex justify-between px-6 py-4" onClick={toggleActiveClass}>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-neptune"></div>
                <span className="mx-2">Neptune</span>
              </div>
              <span>
                <Image
                src={chevron}
                alt="chevron"
                />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
 
export default NavbarMobile;