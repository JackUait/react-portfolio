import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./containers/Header/Header";
import About from "./containers/About/About";
import Skills from "./containers/Skills/Skills";
import Portfolio from "./containers/Portfolio/Portfolio";
import References from "./containers/References/References";
import Talk from "./containers/Talk/Talk";
import Footer from "./containers/Footer/Footer";
import Code from './components/Code/Code';
import useWindowDimensions from "./hooks/useWindowDimensions";

import "./App.css";
import "./overrides.css";

const App = () => {
	const [scrolled, setScrolled] = useState(false);
	const {width,height} = useWindowDimensions();
	const checkDesktop = width >= 1000 && height >= 740;
	return (
		<ReactFullpage
			licenseKey={"none"}
			navigation
			scrollingSpeed={1000}
			scrollBar={checkDesktop ? true: false}
			autoScrolling={checkDesktop ? false : true}
			navigationTooltips={[
				"Home",
				"About",
				"Skills",
				"Portfolio",
				"References",
				"Let's Talk",
				"Follow Me",
			]}
			sectionsColor={[
				"#000",
				"#fff",
				"#000",
				"#fff",
				"#000",
				"#fff",
				"#000",
				"#fff",
			]}
			onLeave={(origin, destination, direction) => {}}
			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						<Code/>s
						<div className="section">
							<Header
								goTo={() => fullpageApi.moveTo(6)}
								moveDown={() => fullpageApi.moveSectionDown()}
							/>
						</div>

						<div className="section">
							<About scrolled={scrolled} />
						</div>

						<div className="section">
							<Skills />
						</div>
						<div className="section">
							<Portfolio />
						</div>
						<div className="section">
							<References />
						</div>
						<div className="section">
							<Talk />
						</div>
						<div className="section">
							<Footer />
						</div>
					</ReactFullpage.Wrapper>
				);
			}}
		/>
	);
};

export default App;
