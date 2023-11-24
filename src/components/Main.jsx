import { useRef } from "react";
import ASCIIGrid from "./ASCIIGrid";
import ASCIIImage from "./ASCIIImage";

const Main = () => {
    const image = new ASCIIImage(
        "src/assets/catPixelated.png",
        innerWidth / 3,
        0.5 * innerHeight
    );

    const sectionRef = useRef();

    return (
        <>
            <section ref={sectionRef} id="main">
                <ASCIIGrid className={"grid"} images={[image]} yPosition={0} />
                <div className="opening-text ">
                    <p className="opening-text-greeting">
                        hi,
                        <br />
                        I'm {`Alex`}
                    </p>
                    <div>
                        I <span className={"red"}>DESIGN</span> AND{" "}
                        <span className={"red"}>CODE</span>
                    </div>
                </div>
                <a href="#about" className="arrow-down">
                    {">"}
                </a>
                <div className="separator"><span>**********************************</span></div>
            </section>
        </>
    );
};

export default Main;
