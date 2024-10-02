// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
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

function App() {
	return (
		<>
		<GlobalStyles />
		<AppContainer>
			<Navbar />
			<Home />
			<Footer />
		</AppContainer>
    	</>
	);
}

export default App;
