import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  BackgroundAnimation,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary overscroll-contain">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <div className="fixed z-0">
              <BackgroundAnimation />
            </div>
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
