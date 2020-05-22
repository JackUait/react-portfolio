import React, { useEffect } from "react";
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
	const {width, height} = useWindowDimensions();
	useEffect(() => {
		console.log('width: ' + width);
		console.log('height: ' + height)
	}, [])
	return (
		<ReactFullpage
			licenseKey={"none"}
			navigation
			scrollingSpeed={1000}
			scrollBar={width >= 1200? false: true}
			autoScrolling={width >= 1200 ? true : false}
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
			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						<Code/>
						<div className="section">
							<Header
								goTo={() => fullpageApi.moveTo(6)}
								moveDown={() => fullpageApi.moveSectionDown()}
							/>
						</div>

						<div className="section">
							<About />
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
