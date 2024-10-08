import Headroom from 'react-headroom';
import '../styles/Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    const leftText = "Home ";
    const rightText = "About Me"
    return ( 

        <Headroom disableInlineStyles={true} upTolerance={30}>
            <Link to="/kieranportfolio/" className='leftbanner sidebanner'><h2>{leftText}</h2></Link>
            <div className='mainbanner'><h1>KIERAN O'NEILL</h1></div>
            <Link to="/kieranportfolio/aboutme" className='rightbanner sidebanner'><h2>{rightText}</h2></Link>
        </Headroom>

     );
}
 
export default Header;

