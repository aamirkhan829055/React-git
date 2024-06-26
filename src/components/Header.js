

import React from "react";
import { useState } from "react";

import Logo from "../images/logo.svg";
import img from "../images/icon.png";
import Search from "../images/search.svg";
// import Images from 
function Header() {
    const [toggleDrop, setToggleDrop] = useState(false);
    const [toggleDrp, setToggleDrp] = useState(false);
    return (
        <header className="">
            <div className="container mx-auto ">
                <div className="lg:flex justify-between items-center py-2 px-5 ">
                    <div className="flex justify-between items-center py-3">
                        <a href="#" className="text-white text-[20px] inline-block font-bold"><img src={Logo} width={"120px"} /></a>

                        <a href="#" className="text-white capitalize text-[28px] lg:hidden" onClick={() => setToggleDrp(!toggleDrp)}><img src={img} width={"25px"} /></a>
                    </div>
                    {toggleDrp && (
                        <ul className="lg:flex xl:gap-x-4 items-center">
                            <li className="inline-block px-4 py-3 relative list-dropdown">
                                <a href="#" className="text-white capitalize text-[18px] font-semibold" onClick={() => setToggleDrop(!toggleDrop)} >Home</a>
                                {toggleDrop && (
                                    <ul className="absolute mt-3 font-bold">
                                        <li className="list-dropdown"><a href="#" className="text-block p-2  inline-block text-white">Weocde</a></li>
                                        <li className="list-dropdown"><a href="#" className="text-block p-2  inline-block text-white">coaching</a></li>
                                        <li className="list-dropdown"><a href="#" className="text-block p-2  inline-block text-white">institute</a></li>
                                        <li className="list-dropdown"><a href="#" className="text-block p-2  inline-block text-white">Comfygen</a></li>
                                    </ul>
                                )}
                            </li>
                            <li className="lg:inline-block px-4 py-3 list-dropdown"><a href="#" className="text-white capitalize text-[18px] font-semibold">Know Us</a></li>
                            <li className="lg:inline-block px-4 py-3 list-dropdown"><a href="#" className="text-white capitalize text-[18px] font-semibold">Close By</a></li>
                            <li className="lg:inline-block px-4 py-3 list-dropdown"><a href="#" className="text-white capitalize text-[18px] font-semibold"><img src={Search} width={"20px"} /></a></li>
                        </ul>
                    )}
                    <a href="#" className="text-white capitalize text-[28px] hidden lg:block"><img src={img} width={"25px"} /></a>

                </div>
            </div>
        </header >
    );


}

export default Header;
