import '../styles/GlobalStyles.css';

import Showcase from "../components/Showcase";
import Works from '../components/Works';
import AboutMe from './AboutMe';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const MainPage = () => {

    const loc = useLocation();

    useEffect(() => {

        console.log("Path change");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }, [loc]);

    return (
        <div>
            <Showcase></Showcase>
            <Works></Works>
            <AboutMe></AboutMe>
        </div>
    );
}
 
export default MainPage;