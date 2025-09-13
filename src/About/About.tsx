import './About.css';
import Description from './Description';

function About() {
    return (
        <section className="about-me" id="about">
            <h2>About me</h2>
            <div className="about-wrap">
                <Description/>
            </div>
        </section>
    )
}
export default About