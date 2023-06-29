import React from "react";
import Welcome from './welcome'
import Quote from './quote';
import About from './about';
import Console from './console/console';
import Blog from './blog';
import './landingStyles.css'

function MainRoute(){

    return(
        <div>
        <Welcome />
        <Quote text="'Reject Common Sense To Make The Impossible Possible'" />
        <About />
        <Console />
        <Quote text="'You Are Under No Obligation To Be The Person You Were 5 Minutes Ago'" />
        <Blog />
    </div>
    );
}

export default MainRoute;