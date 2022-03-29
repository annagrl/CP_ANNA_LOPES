
import { BsGithub, BsFillArrowUpCircleFill, BsLinkedin, BsMailbox } from "react-icons/bs";


export default function Footer() {

  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <div style={{
      display: "inline-block",
      justifyContent: "center",
      alignItems: "center",
      padding: 30,
    }}>



      <a href="https://github.com/annagrl">
        <BsGithub size={30} color="black" />
      </a>

      <a href="https://www.linkedin.com/in/annagabrieleribeirolopes/">
        <BsLinkedin size={30} color="black" />
      </a>

      <div style={{
        display: "flex",
        padding: 10,
      }}>
        <BsMailbox size={20} />
        <h4> anna.bele.ribeiro@gmail.com</h4>
      </div>

      <div onClick={() => scrollToComponent("sobreMim")}
      style={{
        display: "flex",
        padding: 10,
      }} >

        <BsFillArrowUpCircleFill size={20}  />

        <h4> Voltar ao início</h4>
      </div>


    </div>


  );
}