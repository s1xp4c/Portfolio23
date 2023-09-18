// App.jsx

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
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary ">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            {/* <div className="fixed z-0">
              <BackgroundAnimation />
            </div>  */}
            <Hero />
          </div>
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 flex justify-center">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
