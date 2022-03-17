import "./styles/modal.scss";
const Modal = (props, ...rest) => {
  return (
    <div className="modal" {...rest}>
      <div className="modal__content">{props.children}</div>
    </div>
  );
};

export default Modal;
