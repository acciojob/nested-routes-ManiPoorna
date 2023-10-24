
import React from "react";
import './../styles/App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import First from "./First";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* Do not remove the main div */}
        <Home />
        <Routes>
          <Route path="/women" element={<Women />} >

            <Route path="grooming" element={<First />} />
            <Route path="shirt" element={<Second />} />
            <Route path="trousers" element={<Third />} />
            <Route path="jewellery" element={<Fourth />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
