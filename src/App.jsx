import "./App.css";

import { useRef } from "react";

import ASCIIGrid from "./components/ASCIIGrid";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
    return (
        <Router>
            <Main />
            <About />
            <Contacts />
            <nav>
                <ul>
                    <li>
                        <Link to="/#about">Who am I?</Link>
                    </li>
                    <li>
                        <Link to="/#contacts">Find me</Link>
                    </li>
                </ul>
            </nav>
            <ASCIIGrid />
            {/* <Routes>
                <Route exact path={["/", "/#about", "/#how-to-use"]}>
                        
                </Route>
            </Routes> */}
        </Router>
    );
}

export default App;
