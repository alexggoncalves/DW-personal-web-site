import { useRef } from "react";
import ASCIIGrid from "./ASCIIGrid";
import ASCIIImage from "./ASCIIImage";

const Main = () => {

    const image = new ASCIIImage("src/assets/catPixelated.png",40,40);
    const sectionRef = useRef()

    return (
        <>
            <section ref={sectionRef} id="main">
                <ASCIIGrid className={"grid"} images={[image]} yPosition={0}/>
                <div className="opening-text ">
                    <p className="opening-text-greeting">
                        hi,<br/>
                        I'm {`Alex`}
                    </p>
                    <div>
                        I DO <span className={"color1"}>DESIGN</span> AND{" "}
                        <span className={"color2"}>CODING</span>
                    </div>
                </div>
                <a href="#about" className="arrow-down">{'>'}</a>
            </section>
        </>
    );
};

export default Main;
