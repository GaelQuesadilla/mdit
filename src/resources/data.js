import Index from "../pages/Index";
import DocView from "../pages/DocView";

import {FaHome, FaFile} from 'react-icons/fa'
export const path = [
  {
    name: "Home",
    icon: <FaHome/>,
    exact: true,
    href: "/mdit",
    component: <Index/>,
    visible:true
  },
  {
    name: "Documents",
    icon: <FaFile/>,
    exact: true,
    href: "/docs/:fileName",
    component: <DocView/>,
    visible:false
  },
];
