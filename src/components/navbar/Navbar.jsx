import { useEffect, useState } from "react";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { GoXCircle } from "react-icons/go";
import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from 'react-router-dom'


export default function Navbar() {

    const [search, setSearch] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 640) {
            setSearch(true)
        }
    }, [])
    return (
        <nav className="flex justify-between items-center p-4 relative border-b-[1px] border-b-rose-200">
            <div className="left-div">
                <h1 className="font-bold text-xl">
                    <Link to={'/'}>Online Store</Link>
                </h1>
            </div>
            <div className="fill-div w-1/3 flex justify-between sm:w-1/3">
                {
                    search ?
                        <>
                            <input 
                                type="text" 
                                className="absolute top-3 bottom-3 left-3 right-3 border-none outline-none rounded-full shadow-sm focus:shadow-md shadow-rose-500 focus:shadow-rose-500 ps-5 text-rose-800 sm:block sm:static sm:py-2 sm:w-full" 
                                placeholder="Enter product name"
                            />
                            <GoXCircle className="absolute right-6 cursor-pointer sm:hidden" onClick={() => setSearch(false)} />
                        </>
                        : null
                }

                <div className="sm:hidden flex w-full justify-between">
                    <FaSearch className="cursor-pointer" onClick={() => setSearch(true)} />
                    <Link to='/login'><RiLoginBoxLine /></Link>
                    <Link to='/cart'><FaCartArrowDown /></Link>
                </div>
            </div>
            <div className="right-div">

                <ul className="hidden sm:flex sm:space-x-5">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
