import '../styles/GlobalStyles.css';

import Header from "../components/Header";
import Showcase from "../components/Showcase";
import Works from '../components/Works';

const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <Showcase></Showcase>
            <Works></Works>
        </div>
    );
}
 
export default MainPage;