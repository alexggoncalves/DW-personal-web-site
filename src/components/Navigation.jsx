import { useEffect, useState } from "react";

const sections = {
    main: 0,
    about: 1,
    contacts: 2,
};

const Navigation = () => {
    const [currentSection, setCurrentSection] = useState(sections.main);

    useEffect(() => {
        const body = document.querySelector("html");

        const updateSection = (event) => {
            if(body.scrollTop < 0.8 * window.innerHeight){
                setCurrentSection(sections.main)
            } else if(body.scrollTop < window.innerHeight+0.8*window.innerHeight) {
                setCurrentSection(sections.about)
            } else {
                setCurrentSection(sections.contacts)
            }
        };

        document.addEventListener("scroll", updateSection);

        return () => {
            document.removeEventListener("scroll", updateSection);
        };
    }, []);

    return (
        <nav className="sticky-nav">
            <ul>
                <li>
                    {currentSection == sections.main && (
                        <span className="section-indicator">{">"}</span>
                    )}
                    <a href="#main">Hello</a>
                </li>
                <li>
                    {currentSection == sections.about && (
                        <span className="section-indicator">{">"}</span>
                    )}
                    <a href="#about">Who am I?</a>
                </li>
                <li>
                    {currentSection == sections.contacts && (
                        <span className="section-indicator">{">"}</span>
                    )}

                    <a href="#contacts">Find me!</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
