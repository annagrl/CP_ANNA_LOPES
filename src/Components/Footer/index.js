import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

import { BsGithub } from "react-icons/bs";


export default function Social() {
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
        <AiOutlineLinkedin size={30} color="black" />
      </a>

      <div style={{
      display: "flex",
      padding: 10,
      }}>
        <AiOutlineMail size={20} />
        <h4> anna.bele.ribeiro@gmail.com</h4>
      </div>


    </div>


  );
}