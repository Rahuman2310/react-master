import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './Pages';

import Product from './Pages/product';
import Portfolio from './Pages/portfolio';
import Blog from './Pages/blog';
import About from './Pages/about';
import Career from './Pages/career';
import Contact from './Pages/contact';
import WebDesign from './Pages/WebDesign';
import SEO from './Pages/SEO.js';
import Services from './Pages/Services.js';
import WebDev from './Pages/WebDev';
function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/index'   element={<Home />} />
		
		<Route path='/product' element={<Product/>} />
		<Route path='/portfolio' element={<Portfolio />} />
		<Route path='/blog' element={<Blog />} />
		<Route path='/about' element={<About />} />
		<Route path='/career' element={<Career />} />
		<Route path='/contact' element={<Contact />} />
		<Route path="/Services" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="seo" element={<SEO />} />
	</Routes>
	</Router>
);
}

export default App;
