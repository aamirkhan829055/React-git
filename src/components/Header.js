
import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="bg-[#000000]">
            <div className="container mx-auto ">
                <div className="flex justify-between items-center py-3">
                    <a href="#" className="text-white text-[20px]">logo</a>
                    <ul>
                        <li className="inline-block px-3"><Link to={'./Home'} className="text-white capitalize font-bold">Home</Link></li>
                        <li className="inline-block px-3"><Link to={'./About'} className="text-white capitalize font-bold">About</Link></li>
                        <li className="inline-block px-3"><Link to={'./Services'} className="text-white capitalize font-bold">Services</Link></li>
                        <li className="inline-block px-3"><Link to={'./Project'} className="text-white capitalize font-bold">Project</Link></li>
                        <li className="inline-block px-3"><Link to={'./Comtect'} className="text-white capitalize font-bold">Comtect</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
