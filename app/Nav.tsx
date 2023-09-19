"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Nav.css";
import logo from "../public/goblin.png";
import avatar from "../public/Avatar.jpg";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Image className="nav__logo" src={logo} alt="goblinflix" />

      <Image className="nav__avatar" src={avatar} alt="Avatar" />
    </div>
  );
}

export default Nav;
