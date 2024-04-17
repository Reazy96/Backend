import { useState } from "react";
import "./App.css";
import AddBlog from "./pages/AddBlog/AddBlog";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SaveDataContext } from "./context/context";

function App() {
  const [saveData, setSaveData] = useState([]);

  return (
    <>
      <SaveDataContext.Provider value={{ saveData, setSaveData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newBlog" element={<AddBlog />} />
          </Routes>
        </BrowserRouter>
      </SaveDataContext.Provider>
    </>
  );
}

export default App;
