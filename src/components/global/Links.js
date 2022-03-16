import { Link } from 'react-router-dom';
import './styles/links.scss'
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
