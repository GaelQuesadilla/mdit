import Logo from "../logo/Logo";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./Sidebar";
import "./styles/navbar.scss";

const Navbar = () => {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  return (
    <>
      <div className="navbar">
          <FaBars
            className="navbar__toggle-btn"
            onClick={() => setDisplaySidebar((prevState) => !prevState)}
          />
        <span className="navbar__content">
        </span>
        <Logo />
        <Sidebar {...{ displaySidebar }} />
      </div>
    </>
  );
};

export default Navbar;
