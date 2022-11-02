import { Route, Routes } from "react-router-dom";
import AddDisciplines from "./pages1/AddDiscipline";
import Home from "./pages1/Home";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import { useEffect, useState } from "react";


const App = () => {
  return (
    <div>
     <MainNavigation />
   
     <Routes>
          <Route path="/disciplines" element={<AddDisciplines />} />
          <Route path="/home" element={<Home />} />
        </Routes>
 
    

    </div>
  );
};

export default App;
