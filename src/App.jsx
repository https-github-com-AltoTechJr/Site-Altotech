import { BrowserRouter } from "react-router-dom";
import './index.css'; 

import { About, Contact, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary h-screen overflow-y-auto custom-scrollbar'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0'>
        <About/>
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
        <Feedbacks />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
        <Works />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
