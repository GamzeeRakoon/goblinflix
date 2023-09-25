"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Nav.css";
import logo from "../img/goblin.png";
import avatar from "../img/Avatar.jpg";
import DropdownItem from "./DropdownItem";
import Link from "next/link";

function Nav() {
  const [show, handleShow] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

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
      <a href="/">
        <Image className="nav__logo" src={logo} alt="goblinflix" />
      </a>

      <div className="nav-dropdown-menu">
        <div className="">
          <Image
            className="nav__avatar"
            src={avatar}
            alt="Avatar"
            onClick={() => setOpenProfile((prev) => !prev)}
          />
        </div>
        {openProfile && <DropdownItem />}
      </div>
    </div>
  );
}

export default Nav;
