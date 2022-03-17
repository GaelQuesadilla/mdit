import './styles/filecard.scss'

const CardContainer = (props, { ...rest }) => {
  return (
    <ul className="filecard" {...rest}>
      {props.children}
    </ul>
  );
};
export default CardContainer;
