import MyPhoto from "../assets/my_photo.png";
import ASCIIGrid from "./ASCIIGrid";

const About = () => {
    return (
        <>
            <section id="about">
                <ASCIIGrid
                    className={"grid grid-about"}
                    yPosition={window.innerHeight}
                />

                <div className="container left">
                    <div>
                        <h1>Who am I?</h1>
                        <p>
                            At the moment, I'm a master's student in Design and
                            Multimedia at the University of Coimbra. My main
                            areas of interest are 3D modeling, game
                            design/development, and web development. I really
                            enjoy bringing my imagination to life through
                            interactive visual creations and immersive digital
                            experiences. I am constantly honing my skills to
                            push the boundaries of my skills and knowledge. Join
                            me on my quest as I discover the endless realm of
                            Digital Arts!
                        </p>
                    </div>
                    <img src={MyPhoto} alt="a photo of me"></img>
                </div>
                <div className="separator">
                    <span>*********************</span>
                </div>
            </section>
        </>
    );
};

export default About;
