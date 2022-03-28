import "./style.css";
import logo from "../../img/logo-reduzido-sem-fundo.png";

export default function Header() {

    function scrollToComponent(id) {
        document.getElementById(id).scrollIntoView();
      }

      
    return (

        <header>
            <img src={logo} width={100} />
            <ul className="nav">

                <li className="nav-item" >Sobre mim</li>
                <li className="nav-item" onClick={() => scrollToComponent("projetos")}>Projetos</li>
                <li className="nav-item" onClick={() => scrollToComponent("tools")}>Ferramentas </li>

            </ul>



        </header>
    )

}
