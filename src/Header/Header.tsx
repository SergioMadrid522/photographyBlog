import './Header.css';

type HeaderProps = {
    websiteName: string,
    slogan: string
}
function Header(props:HeaderProps) {
    const { websiteName, slogan } = props;
    return(
        <header>
            <div className='main-pic'>
                <img src="src/assets/42382203027.png" alt="Main picture" />
            </div>
            <div className='catch-phrase'>
                <h1>{websiteName}</h1>
                <p>{slogan}</p>
            </div>
        </header>
    )
}
export default Header