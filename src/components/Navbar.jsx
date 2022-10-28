import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const URL = " ";
  return (
    <nav>
      <a href={`${URL}/`} className="nav-brand">
        Francisco <span className="txt-primary">Veloz</span>
      </a>

      <ul className="nav-menu">
        <li className="nav-item">
          <a
            href="https://www.youtube.com/channel/UC_OcxydUU_51oT8mbcedriw"
            target="_blank"
          >
            YouTube
          </a>
        </li>

        <li className="nav-item">
          <a href="https://github.com/FranciscoVeloz1" target="_blank">
            GitHub
          </a>
        </li>

        <li className="nav-item">
          <a href="https://twitter.com/FranciscoGVeloz" target="_blank">
            Twitter
          </a>
        </li>

        <li className="nav-item">
          <div className="btn-toggle" id="btnToggle">
            <i className="fa-solid fa-sun"></i>
            <i className="fa-solid fa-moon active"></i>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
