'use client'

import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaUserAlt, FaSearch } from 'react-icons/fa'
import "@/node_modules/bootstrap/js/dist/dropdown.js"
import "@/node_modules/bootstrap/js/dist/modal.js"

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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <Link className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaUserAlt className="navbar-icon" />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#loginFormModal">로그인</a></li>
                <li><a className="dropdown-item" href="#">ID/PWD 찾기</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" role="button">
                <FaSearch className="navbar-icon" />
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
