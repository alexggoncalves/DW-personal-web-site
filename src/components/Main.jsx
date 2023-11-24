import { useEffect, useState } from "react";
import ASCIIGrid from "./ASCIIGrid";
import ASCIIImage from "./ASCIIImage";





const Main = () => {

    let laptopAnimation = {
        images: [],
        speed: 0.2,
        loaded: false,
        duration: 60, //frames
    };
    
    useEffect(() => {
        for (let i = 0; i < 60; i++) {
            let src = "../src/assets/laptop/";
            if (i < 10) {
                src += `000${i}.png`;
            } else {
                src += `00${i}.png`;
            }

            laptopAnimation.images[i] = new ASCIIImage(
                src,
                innerWidth / 3,
                0.5 * innerHeight
            );
            laptopAnimation.loaded = true;
        }
    }, []);

    return (
        <>
            <section id="main">
                <ASCIIGrid
                    className={"grid"}
                    animations={[laptopAnimation]}
                    yPosition={0}
                />
                <div className="opening-text ">
                    <p className="opening-text-greeting">
                        hi,
                        <br />
                        I'm {`Alexandre`}
                    </p>
                    <div>
                        I <span className={"red"}>DESIGN</span> AND{" "}
                        <span className={"red"}>CODE</span>
                    </div>
                </div>
                <a href="#about" className="arrow-down">
                    {">"}
                </a>
                <div className="separator">
                    <span>*********************</span>
                </div>
            </section>
        </>
    );
};

export default Main;
