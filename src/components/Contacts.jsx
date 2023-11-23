import Contact from "./Contact";
import ASCIIGrid from "./ASCIIGrid";

import  behanceIcon from "../assets/icon-behance.png";
import  emailIcon from "../assets/icon-email.png";
import  instagramIcon from "../assets/icon-instagram.png";
import  phoneIcon from "../assets/icon-phone.png";

const Contacts = () => {
    return (
        <>
            <section id="contacts">
                <ASCIIGrid className={"grid grid-contacts"} yPosition={window.innerHeight*2} />
                <div className="container right">
                    <h1>Find me!</h1>
                    <div className="contacts-container">
                        <Contact text={"alexggoncalves"} icon={behanceIcon} />
                        <Contact text={"alex.ggoncalves"} icon={instagramIcon} />
                        <Contact
                            text={"alex.ggoncalves@hotmail.com"}
                            icon={emailIcon}
                        />
                        <Contact text={"926832211"} icon={phoneIcon} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;
