import './styles/sidebar.scss'

const Sidebar = (props) => {
  return (
    <div className={`sidebar ${props.displaySidebar ? 'sidebar--hidden' : ''}`}>
      Hola mundo de nuevo
    </div>
  );
};

export default Sidebar