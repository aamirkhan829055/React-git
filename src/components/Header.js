

import React from "react";
import { useState } from "react";
function Header() {
    const [toggleDrop, setToggleDrop] = useState(false);


    return (
        <header className="bg-[#2ec119]">
            <div className="container mx-auto ">
                <div className="flex justify-between items-center py-3">
                    <a href="#" className="text-white text-[20px] ">logo</a>
                    <ul>
                        <li className="inline-block px-3 relative">
                            <a href="#" className="text-white capitalize font-bold" onClick={() => setToggleDrop(!toggleDrop)} >Home</a>
                            {toggleDrop && (
                                <ul className="absolute mt-4 font-bold bg-[#2ec119] px-4">
                                    <li><a href="#" className="text-block py-2 inline-block text-white">Weocde</a></li>
                                    <li><a href="#" className="text-block py-2 inline-block text-white">coaching</a></li>
                                    <li><a href="#" className="text-block py-2 inline-block text-white">institute</a></li>
                                    <li><a href="#" className="text-block py-2 inline-block text-white">Comfygen</a></li>
                                </ul>
                            )}


                        </li>
                        <li className="inline-block px-3"><a href="#" className="text-white capitalize font-bold">About</a></li>
                        <li className="inline-block px-3"><a href="#" className="text-white capitalize font-bold">Services</a></li>
                        <li className="inline-block px-3"><a href="#" className="text-white capitalize font-bold">Project</a></li>
                        <li className="inline-block px-3"><a href="#" className="text-white capitalize font-bold">Comtect</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
