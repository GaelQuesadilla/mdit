import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import { path } from "./resources/data";


function App() {
  return (
    <>
      <Navbar/>
      <div id="app">
      <Routes>
        {path.map((el) => (
          <Route exact={el.exact} path={el.href} element={el.component} />
        ))}
      </Routes>
      </div>
    </>
  );
}

export default App;
