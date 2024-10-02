import Headroom from 'react-headroom';
import '../styles/Header.css';


const Header = () => {
    const leftText = "Test ";
    const rightText = "About Me"
    return ( 

        <Headroom disableInlineStyles={true} upTolerance={30}>
            <button className='leftbanner sidebanner'><h2>{leftText}</h2></button>
            <div className='mainbanner'><h1>KIERAN O'NEILL</h1></div>
            <button className='rightbanner sidebanner'><h2>{rightText}</h2></button>
        </Headroom>

     );
}
 
export default Header;

