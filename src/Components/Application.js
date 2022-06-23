import { Link } from "react-router-dom";

const Application = ({name, icon, link}) => {
    return (
        <div className="application">
            <div className="application-icon">
                <img src={icon} alt={name} />
            </div>
            <div className="application-name">
                {name}
            </div>
            <div className="application-link">
                <Link to={link}>Download</Link>
            </div>
        </div>
    );
}
export default Application;