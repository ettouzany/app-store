import { Link } from "react-router-dom";

const Section = ({ title, children, link }) => {
    return (
        <section className="section">
        <Link to={link}>{title}</Link>
        {children}
        <Link to={link}>See more</Link>
        </section>
    );
    }
    export default Section;
