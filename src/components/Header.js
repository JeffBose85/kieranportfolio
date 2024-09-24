import '../styles/Header.css';


const Header = () => {
    const leftText = "Test ";
    const rightText = "About Me"
    return ( 

        <header>
            <div className='leftbanner sidebanner'><h2>{leftText}</h2></div>
            <div className='mainbanner'><h1>KIERAN O'NEILL</h1></div>
            <div className='rightbanner sidebanner'><h2>{rightText}</h2></div>
            
        </header>

     );
}
 
export default Header;

