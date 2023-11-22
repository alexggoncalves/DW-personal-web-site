const Contact = ({text, iconSrc}) => {

    return <div className="contact">
        <div className="contact_icon"></div>
        <span className="contact_text">{text}</span>
    </div>
}

export default Contact