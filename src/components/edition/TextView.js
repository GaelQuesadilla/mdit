import React from "react";
import ReactMarkdown from "react-markdown";

import "./styles/edition.scss";

const TextView = (props) => {
  return (
    <div className="input-container">
      <ReactMarkdown className="textview">
        {props.content}
      </ReactMarkdown>
    </div>
  );
};

export default TextView;
