import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Herosection from "./components/herosection";
import Contact from "./components/contact";
import Event from "./components/event";
import Footer from "./components/footer";
import Member from "./components/member";

function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <Event />
      <Member />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
