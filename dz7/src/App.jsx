import "./App.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirestPage/FirstPage";
import SecondPage from "./pages/SecondPage/SecondPage";
import AddDescription from "./pages/AddDescription/AddDescription";
import ViewApart from "./pages/ViewApart/ViewApart";

function App() {
  return (
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/add_apart_address" element={<SecondPage/>}/>
        <Route path="/add_description_apart" element={<AddDescription/>}/>
        <Route path="/view_apart" element={<ViewApart/>}/>
      </Routes>
  );
}

export default App;
