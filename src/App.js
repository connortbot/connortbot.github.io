// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto; /* Center the container */
  background-color: #FAFFFB; /* Background color from Figma */
  font-family: 'Hanken Grotesk', sans-serif;
  position: relative; /* To position Footer correctly */
`;

const ContentWrapper = styled.div`
  flex: 1; /* Takes up remaining space to push footer to the bottom */
  width: 100%;
  margin: 0 auto; /* Center the container */
`;

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
	<AnimatePresence mode="wait">
		<Routes location={location} key={location.pathname}>
		<Route path="/" element={<Home />} />
		<Route path="/projects" element={<Projects />} />
		{/* Add other routes here */}
		</Routes>
	</AnimatePresence>
	);
};

function App() {
	return (
		<>
			<GlobalStyles />
			<Router basename="/personal">
				<AppContainer>
					<Navbar />
					<ContentWrapper>
						<AnimatedRoutes />
					</ContentWrapper>
					<Footer
						resumeLink="https://drive.google.com/file/d/1xJTl6zknK9cH1-0nC7jEIzRn7JwQ2MJW/view?usp=sharing"
						githubLink="https://github.com/connortbot"
						linkedinLink="https://www.linkedin.com/in/connor-loi/"
					/>
				</AppContainer>
			</Router>
    	</>
	);
}

export default App;
