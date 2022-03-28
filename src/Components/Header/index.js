import "./style.css";
import logo from "../../img/logo-reduzido-sem-fundo.png";

export default function Header() {
    return (

        <header>
            <img src={logo} width={100} />
            <ul className="nav">

                <li className="nav-item">Sobre mim</li>
                <li className="nav-item">Projetos</li>
                <li className="nav-item">Ferramentas </li>
 
            </ul>

            

        </header>
    )

}
