import ASCIIGrid from "./ASCIIGrid";

const Main = () => {
    return (
        <>
            <section id="main">
                <ASCIIGrid />
                <div className="opening_text">
                    <p className="opening_text_greeting">
                        hi,<br/>
                        I'm {`<Alex/>`}
                    </p>
                    <div>
                        I DO <span className={"color1"}>DESIGN</span> AND{" "}
                        <span className={"color2"}>CODING</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Main;
