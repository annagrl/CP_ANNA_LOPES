import "./style.css";
import foto from "../../img/AnnaGRL.png";

export default function Header() {
    return (

        <main>
            <div className="about" id="sobreMim">

                <h1>Anna Gabriele R. Lopes</h1>
                <p> 
                    
                    Formada em marketing, mas tive a oportunidade de atuar em diferentes áreas como : logística, vendas, projetos.
                    Sou curiosa, gosto bastante de aprender, e também gosto de me conectar com pessoas.
                    No momento estou em transição de carreira, então estou buscando oportunidades na área de UI e front-end.
                
                </p>

                <img src={foto} width={400}/>

               
                

            </div>



        </main>



    )

}