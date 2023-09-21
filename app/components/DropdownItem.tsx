import React from "react";
import "./DropdownItem.css";
import { Link } from "react-router-dom";

export default function DropdownItem() {
  return (
    <div className="flex flex-col dropDownProfile">
      <ul className="flex flex-col gap-4">
        <li className="dropDown__entry">
          <Link to="/profile">My profile</Link>
        </li>
      </ul>
    </div>
  );
}
