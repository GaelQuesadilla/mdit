import Logo from '../logo/Logo';
import { FaGripLines } from 'react-icons/fa';
import { useState } from 'react';
import Sidebar from './Sidebar';
import './styles/navbar.scss'

const Navbar = () => {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  return (
    <>
      <div className='navbar'>
        <FaGripLines
          className='navbar__toggle-btn'
          onClick={() => setDisplaySidebar((prevState) => !prevState)}
        />
        <Logo />
      <Sidebar {...{ displaySidebar }} />
      </div>

    </>
  );
};

export default Navbar;
