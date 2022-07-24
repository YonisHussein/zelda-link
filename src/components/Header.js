import React from "react";
import '../styles/header.css'
import Navbar from './Navbar'

function Heade() {
    return (
        <header className="header" id="head">
            <h1>Yonis Hussein's Portfolio</h1>
            <Navbar />
        </header>
    );
}

export default Header;