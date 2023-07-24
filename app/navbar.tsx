'use client'

import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState("Home")
    const [menu, setMenu] = useState([])

    useEffect(() => {
        //TODO : Get Menu List
        const menu = [
            {
                name: "Home",
                url: "/"
            },
            {
                name: "BCM",
                url: "/blogpage/bcm"
            },
            {
                name: "CO",
                url: "/blogpage/co"
            },
            {
                name: "CS",
                url: "/blogpage/cs"
            },
            {
                name: "IT",
                url: "/blogpage/it"
            },
        ]
        setMenu(menu)
    }, [])
    
    const pathname = usePathname();

    return (
        <nav className="navbar navbar-expand navbar-inner sticky-top" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" href="#">Encircle</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        {
                            menu.map((menuitem, index) => {
                                const linkClassName = "nav-link" +
                                    (pathname === menuitem.url ? " active" : "")
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link className={linkClassName} href={menuitem.url}>
                                            {menuitem.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
  