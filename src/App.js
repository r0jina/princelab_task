import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
