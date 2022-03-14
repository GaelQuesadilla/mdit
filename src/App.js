import { Routes, Route } from "react-router-dom";
import { path } from "./resources/data";
function App() {
  return (
    <>
      <Routes>
        {path.map((el) => (
          <Route exact={el.exact} path={el.href} element={el.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
