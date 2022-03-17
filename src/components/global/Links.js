import { Link } from "react-router-dom";
import "./styles/links.scss";
export const HighlightedLink = (props) => {
  return (
    <Link
      className={`highlighted-link ${
        props.dark ? "highlighted-link--dark" : ""
      }`}
      to={props.href}
    >
      {props.children}
    </Link>
  );
};

export const UnseenLink = (props, { ...rest }) => {
  return (
    <Link
      {...rest}
      className={`unseen-link ${props.className ? props.className:""}`}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};
