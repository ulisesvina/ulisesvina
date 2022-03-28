import React, { useState, useEffect } from "react";
import '../styles/Header.module.css';
import Link from 'next/link'

const Header = () => {      
    
    const [extraClasses, setState] = useState({ navClass: "center", searchClass: "display" });

    useEffect(() => {
        setState(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { navClass: "center", searchClass: null } : { navClass: null, searchClass: "display" });
    }, [])

    return (
        <div className="parent-div">
            <nav className={`nav container mt-3 ${extraClasses.navClass}`}>
                <Link href="/">
                    <a>
                        <div className="logo">
                            <h2><b>Ulises Viña</b></h2>
                        </div>
                    </a>
                </Link>
            </nav>
        </div>
    ) 
}

export default Header;