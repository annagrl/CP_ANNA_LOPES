import "./style.css";
import html from "../../img/html.PNG";
import css from "../../img/css.PNG";
import js from "../../img/JS.PNG";
import bootstrap from "../../img/bootstrap.PNG";
import git from "../../img/git.PNG";
import java from "../../img/java.png";
import react from "../../img/React.png";
import mysql from "../../img/MySQL.png";



export default function Header() {
    return (

        <main>

            <div>
                
                <h1>Anna Gabriele R. Lopes</h1>
                <p> Formada em marketing, mas tive a oportunidade de atuar em diferentes áreas como : logística, vendas, projetos.
                    Sou curiosa, gosto bastante de aprender, e também gosto de me conectar com pessoas.
                    No momento estou em transição de carreira, então estou buscando oportunidades na área de UI e front-end.
                </p>
            </div>


            <div>
                <h1>Ferramentas</h1>

                <div className="polaroid">

                    <a href="#" title="HTML">
                        <img src={html} />
                    </a>
                    <a href="#" title="JS">
                        <img src={js} />
                    </a>
                    <a href="#" title="CSS">
                        <img src={css} />
                    </a>
                    <a href="#" title="Bootstrap">
                        <img src={bootstrap} />
                    </a>
                    <a href="#" title="Git">
                        <img src={git} />
                    </a>
                    <a href="#" title="Java">
                        <img src={java} />
                    </a>
                    <a href="#" title="React">
                        <img src={react} />
                    </a>

                    <a href="#" title="MySQL">
                        <img src={mysql} />
                    </a>


                </div>
            </div>



        </main>



    )

}