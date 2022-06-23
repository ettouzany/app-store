import Section from "../../Components/Section";
import Application from "../../Components/Application";
import applicationService from "../../Service/app.service";
import { useEffect,useState } from "react";
const Home = () => {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        applicationService.getApplications().then(setApplications);
    }
    , []);


    return (
        <div>
        <h1>Home</h1>
        <Section title="Popular" link="/popular">
            {applications.map(application => (
                <Application key={application.id} {...application} />
            ))}

            
        </Section>
        </div>
    );
    }
    export default Home;