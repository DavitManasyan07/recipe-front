import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main"
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route></Route> {/*stx de matainim routenen setup kanis */}
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
