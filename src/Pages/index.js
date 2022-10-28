import React from 'react';
import './index.css';
import Footer from './components/Footer/Footer';

import Hero from './components/Hero/Hero'
import Line from './components/Line/Line'
import Process from './components/Process/Process'
import Ratings from './components/Ratings/Ratings'
import Reasons from './components/Reasons/Reasons'
import Scripttext from './components/Scripttext/Scripttext'
import Stroketext from './components/Stroketext/Stroketext'


const Home = () => {
return (
	
	<div className='Apple'>
	<div>
	
	
	<h1>
	
		<Hero/>
    	<Process/>
    	<Reasons/>
    	<Stroketext/>
    	<Ratings/>
    	<Scripttext/>
    	<Line/>
    	<Footer />
	</h1>
	</div>
	</div>
);
};

export default Home;
