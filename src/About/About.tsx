import './About.css';
import myPicture from '../../src/assets/faveShotsPics/my-picture.webp';
function About() {
    return (
        <section className="about-me" id="about">
            <h2>About me</h2>
            <div className="about-wrap">
                <div className="me">
                    <p>I'm Fabian — frontend developer and photography lover.</p>
                    <p>Photography is my way of capturing the balance between nature and myself. 
                    I focus mainly on landscapes, architecture, and quiet details that often go unnoticed.</p>
                    <p>This site is both a personal collection and a creative playground.
                    I designed and coded it myself as part of my frontend portfolio.</p>
                    <p>Hope you enjoy the photos — thanks for stopping by ✌️</p>
                </div>
                <div className="my-pic">
                    <img src={ myPicture } alt="A picture of me" loading="lazy" />
                </div>
            </div>
        </section>
    )
}
export default About