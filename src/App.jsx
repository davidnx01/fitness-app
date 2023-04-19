import { Hero, Sponsors, Program, Services, Testimonial, MainCTA, Contact, Footer } from "../common/Containers/index";
import "./App.css";

function App() {

  return (
    <>
    <div id="wrapper">
      <div className="header">
        <Hero />
      </div>
        <Sponsors />
        <Program />
        <Services />
        <Testimonial />
        <MainCTA />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
