'use client'
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CiClock2 } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { UserdataContext } from "@/Context/Userdata";




const Navbar = () => {

    // const data = useContext(UserdataContext)
    // console.log(data)

     

    const pathName = usePathname()
   
    const links = <>
        <li><Link   href="/Home" className={pathName === "/Home" ? 'text-white bg-green-900' : ''} ><IoHomeOutline /> Home</Link> </li>
        <li><Link href="/Timeline" className={pathName === "/Timeline" ? 'text-white bg-green-900' : ''} ><CiClock2 /> Timeline</Link> </li>
        <li><Link href="/" className={pathName === "/Stats" ? 'text-white bg-green-900' : ''} ><FaChartLine />Stats</Link> </li>
    </>



    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-20">
                <div className="flex-1">
                     <Link href="/" className="btn btn-ghost text-xl"> <span className="text-gray-900 font-extrabold ">Keen</span><span className="text-green-900 ">Keeper</span> </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-gray-800 px-1 gap-3">
                        {links}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;