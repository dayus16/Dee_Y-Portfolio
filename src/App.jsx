import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <ToastContainer />
      <Nav />
      <Header />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
