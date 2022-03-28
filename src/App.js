import "./style.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">

      <Header/>
      <div style={{ 
      backgroundImage: `url("https://cc-prod.scene7.com/is/image/CCProdAuthor/Background-design-software_P4_720x422?$pjpeg$&jpegSize=200&wid=750")` 
    }}></div>
      <About/>
      <Projects/>
      <Footer/>

    
    </div>
  )
}

export default App;
