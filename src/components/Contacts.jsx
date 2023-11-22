import Contact from "./Contact";
import ASCIIGrid from "./ASCIIGrid";

const Contacts = () => {
    return (
        <>
            <section id="contacts">
                <ASCIIGrid />
                <div className="container right">
                    <h1>Find me</h1>
                    <div className="contacts_container">
                        <Contact text={"Behance"} iconSrc={"./"} />
                        <Contact text={"alex.ggoncalves"} iconSrc={"./"} />
                        <Contact
                            text={"alex.ggoncalves@hotmail.com"}
                            iconSrc={"./"}
                        />
                        <Contact text={"926832211"} iconSrc={"./"} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;
