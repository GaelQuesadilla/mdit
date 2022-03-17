import "./styles/buttons.scss";

export const CircleBotton = (props, ...rest) => {
  return (
    <button onClick={props.onClick} className="circle-botton" style={props.style}>
      {props.children}
    </button>
  );
};
