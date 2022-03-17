import React from "react";
import { useState, createRef } from "react";
import TextareaAutosize from "react-autosize-textarea";
import "./styles/edition.scss";

const TextInput = (props) => {
  const ref = createRef();
  return (
    <div className="input-container">
      <TextareaAutosize
        className="textinput"
        placeholder="# HELLO WORLD"
        defaultValue={props.content}
        ref={ref}
        onChange={() => props.setContent(ref.current.value)}
      />
    </div>
  );
};

export default TextInput;
