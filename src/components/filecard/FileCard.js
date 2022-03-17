import { FaFile } from "react-icons/fa";
import "./styles/filecard.scss";
import { UnseenLink } from "../global/Links";

const FileCard = (props, { ...rest }) => {
  return (
    <li className="filecard__card" {...rest}>
      <UnseenLink
        className="filecard__card-content"
        to={"/docs/" + props.fileName}
      >
        <FaFile className="filecard__card-icon" /> {props.fileName}
      </UnseenLink>
    </li>
  );
};
export default FileCard;
