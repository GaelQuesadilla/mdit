import Index from "../pages/Index";
import {FaHome} from 'react-icons/fa'
export const path = [
  {
    name: "Home",
    icon: <FaHome/>,
    exact: true,
    href: "/",
    component: <Index/>,
  },
];
