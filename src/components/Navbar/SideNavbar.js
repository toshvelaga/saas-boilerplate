import React from "react";
import * as FaIcons from "react-icons/fa";
import "./SideNavbar.css";

function SideNavbar(props) {
  return (
    <ul className="side-navbar">
      <li className="tablinks">
        <div className="side-navbar-icon">
          <FaIcons.FaThLarge size={20} />
        </div>
        <div className="side-navbar-title">Dashboard</div>
      </li>

      <li className="tablinks">
        <div className="side-navbar-icon">
          <FaIcons.FaBusinessTime size={20} />
        </div>
        <div className="side-navbar-title">Company</div>
      </li>

      <li className="tablinks">
        <div className="side-navbar-icon">
          <FaIcons.FaCalendarWeek size={20} />
        </div>
        <div className="side-navbar-title">Campaign</div>
      </li>

      <li className="tablinks">
        <div className="side-navbar-icon">
          <FaIcons.FaChartBar size={20} />
        </div>
        <div className="side-navbar-title">Analytics</div>
      </li>

      <li className="tablinks">
        <div className="side-navbar-icon">
          <FaIcons.FaCog size={20} />
        </div>
        <div className="side-navbar-title">Settings</div>
      </li>
    </ul>
  );
}

export default SideNavbar;
