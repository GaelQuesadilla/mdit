import { useRef } from "react";
import "./styles/forms.scss"
export const FormSubmit = (props, ...rest) => {
  return (
    <input
      type="submit"
      className="form__field--submit form__field"
      value={props.value}
      {...rest}
    />
  );
};

export const FormText = (props, ...rest) => {
  return (
    <>
      <label className="form__label" for={props.name}>{props.labelText}:</label>
      <input
        type="text"
        id={props.name}
        name={props.name}
        className="form__field--text form__field"
      />
      
    </>
  );
};

export const FormButton = (props, ...rest) => {
  return (
    <>
      <input
        type="button"
        id={props.name}
        name={props.name}
        value={props.value}
        className="form__field--button form__field"
        onClick={props.onClick}
      />
      
    </>
  );
};

export const Form = (props, ...rest) => {
  const ref = useRef();
  return (
    <form
      ref={ref}
      {...rest}
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(ref);
      }}
    >
      {props.children}
      <FormSubmit value={props.submitValue} />
    </form>
  );
};
