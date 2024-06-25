

import React from "react";
import { useState } from "react";
function Header() {
    const [toggleDrop, setToggleDrop] = useState(false);


    return (
        <header className="bg-[#2ec119]">
            <div className="container mx-auto ">
                <div className="flex justify-between items-center ">
                    <a href="#" className="text-white text-[20px] inline-block font-bold"><img src={`${process.env.PUBLIC_URL}images/logo.png`} alt="Logo" /></a>
                    <ul>
                        <li className="inline-block px-3 py-3 relative list-dropdown">
                            <a href="#" className="text-white capitalize font-bold " onClick={() => setToggleDrop(!toggleDrop)} >Home</a>
                            {toggleDrop && (
                                <ul className="absolute mt-3 font-bold bg-[#2ec119]">
                                    <li className="list-dropdown"><a href="#" className="text-block p-2 inline-block text-white">Weocde</a></li>
                                    <li className="list-dropdown"><a href="#" className="text-block p-2 inline-block text-white">coaching</a></li>
                                    <li className="list-dropdown"><a href="#" className="text-block p-2 inline-block text-white">institute</a></li>
                                    <li className="list-dropdown"><a href="#" className="text-block p-2 inline-block text-white">Comfygen</a></li>
                                </ul>
                            )}
                        </li>
                        <li className="inline-block px-3 py-3 list-dropdown"><a href="#" className="text-white capitalize font-bold">About</a></li>
                        <li className="inline-block px-3 py-3 list-dropdown"><a href="#" className="text-white capitalize font-bold">Services</a></li>
                        <li className="inline-block px-3 py-3 list-dropdown"><a href="#" className="text-white capitalize font-bold">Project</a></li>
                        <li className="inline-block px-3 py-3 list-dropdown"><a href="#" className="text-white capitalize font-bold">Contect</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
