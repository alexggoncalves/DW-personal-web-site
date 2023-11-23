import MyPhoto from "../assets/my_photo.png";
import ASCIIGrid from "./ASCIIGrid";

const About = () => {
    return (
        <>
            <section id="about">
                <ASCIIGrid className={"grid grid-about"} yPosition={window.innerHeight}/>
                <img src={MyPhoto} alt="a photo of me"></img>
                <div className="container left">
                    <h1>Who am I?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras dictum maximus sapien in tincidunt. Sed in arcu id
                        elit rhoncus cursus eget in dolor. Aliquam commodo metus
                        vitae pretium interdum. Suspendisse ullamcorper, leo sit
                        amet hendrerit vestibulum, augue dolor pellentesque
                        enim, sed porttitor nisl sapien sit amet lectus. Fusce
                        enim augue, vestibulum sit amet mauris vitae, semper
                        congue odio. Sed rhoncus accumsan nunc, non bibendum
                        ipsum posuere non.
                    </p>
                </div>
            </section>
        </>
    );
};

export default About;
