import React from 'react'
import '../../styles/header.css'
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
    <div className="header">
      <div className="welcome">Welcome</div>
      <div>Home</div>
      <Link style={{textDecoration:"none",color:"white"}} to={"/"}>Dashboard</Link>
      <Link to={"/about/"+5}>About</Link>
    </div>
    </div>
  )
}
