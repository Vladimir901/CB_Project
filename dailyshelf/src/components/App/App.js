import Singin from "../../Pages/Singin/singin"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Notfound from "../../Pages/NotFound/Notfound";
import React from "react";
import Step1 from "../../Pages/Homepage/step1";
import Step2 from "../../Pages/Homepage/step2";
import Step3 from "../../Pages/Homepage/step3";
import TasksList from "../../Pages/TasksList/TasksList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/singin" element={<Singin />}></Route>
                <Route path="/home" element={<Step1 />}></Route>
                <Route path="/home/step2" element={<Step2 />}></Route>
                <Route path="/home/step3" element={<Step3 />}></Route>
                <Route path="*" element={<Notfound />}></Route>
                <Route path="/todos" element={<TasksList />}></Route>
                <Route></Route>
            </Routes> 
        </BrowserRouter>
    );
}

export default App;
