import "./style.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Ferramentas from "./Components/Ferramentas";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {

  return (

    <div>
      <Header />

      <div className="container">
        <About />
      </div>
      <Ferramentas />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;
