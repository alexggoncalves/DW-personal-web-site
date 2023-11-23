import { ReactSVG } from "react-svg";

const Contact = (props) => {
    if (props.link) {
        return (
            <a className="contact" href={props.link}>
                <img src={props.icon} className="contact-icon"></img>
                <span className="contact-text">{props.text}</span>
            </a>
        );
    } else {
        return (
            <div className="contact">
                <img src={props.icon} className="contact-icon"></img>
                <span className="contact-text">{props.text}</span>
            </div>
        );
    }
};

export default Contact;
