import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarDesktop = () => {

    const router = useRouter();

    return ( 
        <nav className="navbar uppercase flex flex-col justify-around lg:justify-between px-6 pt-[0.8rem] pb-2 z-20 border-b border-white/25 items-center h-[159px] lg:flex-row lg:h-[81px]">
            <h1 className="tracking-[-1.05px] text-[28px]">The Planets</h1>
            <div className="fontSpartanBold flex justify-around w-[665px] tracking-[1.36px] text-sm leading-7">
                <Link href="/1">
                    <a className={router.asPath.endsWith("/1") ? "link lg:border-t-4 py-[26px] lg:w-[80px] text-center lg:border-mercury-menu" : "link lg:border-t-4 lg:border-transparent py-[26px] lg:w-[80px] text-center"}>
                    <span className="">Mercury</span>
                    </a>
                </Link>
                <Link href="/2">
                    <a 
                    className={router.asPath.endsWith("/2") ? "link lg:border-t-4 py-[26px] lg:border-venus lg:w-[80px] text-center" : "link lg:border-t-4 lg:border-transparent py-[26px] lg:w-[80px] text-center"}
                    >
                    <span className="">Venus</span>
                    </a>
                </Link>
                <Link href="/3">
                    <a className={router.asPath.endsWith("/3") ? "link lg:border-t-4 py-[26px] lg:border-earth lg:w-[80px] text-center" : "link lg:border-t-4 lg:border-transparent py-[26px] lg:w-[80px] text-center"}>
                    <span className="">Earth</span>
                    </a>
                </Link>
                <Link href="/4">
                    <a className={router.asPath.endsWith("/4") ? "link lg:border-t-4 py-[26px] lg:border-mars lg:w-[80px] text-center" : "link lg:border-t-4 lg:border-transparent py-[26px] lg:w-[80px] text-center"}>
                    <span className="">Mars</span>
                    </a>
                </Link>
                <Link href="/5">
                    <a className={router.asPath.endsWith("/5") ? "link lg:border-t-4 py-[26px] lg:border-jupiter lg:w-[80px] text-center" : "link lg:border-t-4 lg:border-transparent py-[26px] lg:w-[80px] text-center"}>
                    <span className="">Jupiter</span>
                    </a>
                </Link>
                <Link href="/6">
                    <a className={router.asPath.endsWith("/6") ? "link lg:border-t-4 py-[26px] lg:border-saturn lg:w-[80px] text-center" : "link lg:border-t-4 lg:border-transparent py-[26px] lg:w-[80px] text-center"}>
                    <span className="">Saturn</span>
                    </a>
                </Link>
                <Link href="/7">
                    <a className={router.asPath.endsWith("/7") ? "link lg:border-t-4 py-[26px] lg:border-uranus lg:w-[80px] text-center" : "link lg:border-t-4 lg:border-transparent py-[26px] lg:w-[80px] text-center"}>
                    <span className="">Uranus</span>
                    </a>
                </Link>
                <Link href="/8">
                    <a className={router.asPath.endsWith("/8") ? "link lg:border-t-4 py-[26px] lg:border-neptune lg:w-[80px] text-center" : "link lg:border-t-4 lg:border-transparent py-[26px] lg:w-[80px] text-center"}>
                    <span className="">Neptune</span>
                    </a>
                </Link>
            </div>
        </nav>
    );
}
 
export default NavbarDesktop