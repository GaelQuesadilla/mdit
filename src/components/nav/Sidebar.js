import "./styles/sidebar.scss";
import { HighlightedLink } from "../global/Links";
import { path } from "./../../resources/data";
const Sidebar = (props) => {
  return (
    <div className={`sidebar ${props.displaySidebar ? "" : "sidebar--hidden"}`}>
      <ul className="sidebar__content">
        {path.map((el, index) =>
          el.visible ? (
            <li key={index} className="sidebar__content-item">
              <HighlightedLink dark href={el.href}>
                {el.icon} {el.name}
              </HighlightedLink>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
