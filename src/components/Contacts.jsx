import { useEffect, useState } from "react";

import Contact from "./Contact";
import ASCIIGrid from "./ASCIIGrid";
import ASCIIImage from "./ASCIIImage";


import behanceIcon from "../assets/icon-behance.png";
import emailIcon from "../assets/icon-email.png";
import instagramIcon from "../assets/icon-instagram.png";
import phoneIcon from "../assets/icon-phone.png";


const Contacts = () => {
    const [frame,setFrame] = useState(0)
    const [speed,setSpeed] = useState(0.1)

    let antennaAnimation = {
        images : [],
        speed : speed,
        loaded: false
    }
    
    useEffect(()=>{
        for(let i = 0;i<25;i++){
            antennaAnimation.images[i] = new ASCIIImage(`src/assets/antenna/${i}.png`,40,40)
            antennaAnimation.loaded = true;
        }

    },[])
    
    return (
        <>
            <section id="contacts">
                <ASCIIGrid
                    className={"grid grid-contacts"}
                    animations={[antennaAnimation]}
                    yPosition={window.innerHeight * 2}
                />

                <div className="container right">
                    <h1>Find me!</h1>
                    <div className="contacts-container">
                        <Contact text={"alexggoncalves"} icon={behanceIcon} />
                        <Contact
                            text={"alex.ggoncalves"}
                            icon={instagramIcon}
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
