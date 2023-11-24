import { useEffect, useState } from "react";

import Contact from "./Contact";
import ASCIIGrid from "./ASCIIGrid";
import ASCIIImage from "./ASCIIImage";

import behanceIcon from "../assets/icon-behance.png";
import emailIcon from "../assets/icon-email.png";
import instagramIcon from "../assets/icon-instagram.png";
import phoneIcon from "../assets/icon-phone.png";

const Contacts = () => {
    const [speed, setSpeed] = useState(0.3);

    let antennaAnimation = {
        images: [],
        speed: speed,
        loaded: false,
        duration: 60
    };

    useEffect(() => {
        for (let i = 0; i < 60; i++) {
            let src = "src/assets/antenna/";
            if (i < 10) {
                src += `000${i}.png`;
            } else {
                src += `00${i}.png`;
            }

            antennaAnimation.images[i] = new ASCIIImage(
                src,
                innerWidth / 3,
                0.5 * innerHeight
            );
            antennaAnimation.loaded = true;
        }
    }, []);

    return (
        <>
            <section id="contacts">
                <ASCIIGrid
                    className={"grid"}
                    animations={[antennaAnimation]}
                    yPosition={window.innerHeight * 2}
                />

                <div className="container right">
                    <h1>Find me!</h1>
                    <div className="contacts-container">
                        <Contact
                            text={"alexggoncalves"}
                            link={"https://www.behance.net/alexggoncalves"}
                            icon={behanceIcon}
                        />
                        <Contact
                            text={"alex.ggoncalves"}
                            icon={instagramIcon}
                            link={"https://www.instagram.com/alex.ggoncalves/"}
                        />
                        <Contact
                            text={"alex.ggoncalves@hotmail.com"}
                            icon={emailIcon}
                        />
                        <Contact text={"+351 926832211"} icon={phoneIcon} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;
