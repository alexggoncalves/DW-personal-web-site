

import Main from "./components/Main";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
    return (
        <>
            <Main />
            <About />
            <Contacts />
            
            <nav className="sticky_nav">
                <ul>
                    <li>
                        <a href="#main">Hello</a>
                    </li>
                    <li>
                        <a href="#about">Who am I?</a>
                    </li>
                    <li>
                        <a href="#contacts">Find me</a>
                    </li>
                </ul>
            </nav>
            
        </>
    );
}

export default App;
