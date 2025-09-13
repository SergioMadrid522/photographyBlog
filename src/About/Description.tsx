import myPicture from '../../src/assets/fabian-madrid.webp';

function Description () {
    return (
        <>
        <div className="me">
            <p>I'm Fabian — frontend developer and photography lover.</p>
            <p>Photography is my way of capturing the balance between nature and myself. 
            I focus mainly on landscapes, architecture, and quiet details that often go unnoticed.</p>
            <p>This website is both a personal collection.
            I designed and coded it myself as part of my portfolio.</p>
            <p>Hope you enjoy the photos :)</p>
        </div>
        <div className="my-pic">
            <img src={ myPicture } alt="A picture of me" loading="lazy" />
        </div>
        </>
    );
}

export default Description;