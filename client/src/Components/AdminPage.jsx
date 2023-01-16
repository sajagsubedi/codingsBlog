import React from 'react'
import {AiOutlinePlus}from "react-icons/ai"
export default function AdminPage() {
  return (
    <section className="AdminPage">
        <header className="adminheader">
            <div className="admintitle">
                <h3 className="admingreet">Welcome</h3>
                <img src="https://sajagsubedi.netlify.app/img/img.jpg" alt="img" className="adminphoto" />
                <h2>Sajag Subedi</h2>
            </div>
            <div className="modifydiv">
            <AiOutlinePlus/>
            </div>
        </header>
    </section>
  )
}
