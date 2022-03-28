import "../Projects/style.css";


const data = [
    {
      id: "1",
      name: "Prova Frontend I",
      link: "https://annagrl.github.io/checkpoint1_frontend/",
      image:"https://i.pinimg.com/originals/67/0b/e3/670be3d14ae8936dafac92dfb67315ec.jpg",
    },
    {
      id: "2",
      name: "Pirataflix",
      link: "https://github.com/annagrl/pirataflix",
      image: "https://yt3.ggpht.com/ytc/AKedOLR-4k3hUC-zIyb8WvnDHE4P1ha6-vPWaJuV77Zt=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: "3",
      name: "Bom trajeto",
      link: "https://annagrl.github.io/FECP3/",
      image:
        "https://assistentedeviagem.com.br/blog/wp-content/uploads/2019/01/lugares-para-viajar.jpg",
    },
    {
      id: "4",
      name: "POO",
      link: "https://github.com/annagrl/checkpointPOO",
      image:
        "https://static3.tcdn.com.br/img/img_prod/460977/caneca_if_coffee_dev_cafe_programacao_programador_desenvolvedor_codificador_java_preta_ev_93535_1_692ba4df095249a49c6b1200fcb14ff8.jpg",
    },
    {
      id: "5",
      name: "Ensaio Newborn",
      link: "https://github.com/annagrl/checkpoint1FE2/blob/main/index.html",
      image:
        "https://alfred.alboompro.com/resize/width/480/height/720/quality/70/url/storage.alboom.ninja/sites/7402/albuns/289510/ensaio_newborn_fotografa_de_familia_estudio_gabi_fotografia_sao_paulo-029.jpg?t=1595535494",
    },
  ];
  
  export default function Projects() {
    return (
      <div className="content-projects" id="projects">
        <h1 className="title-project" >Projetos</h1>
        <ul className="list-projects">
          {data.map(({ image, name, link }) => (
            <a href={link}>
              <li className="item-list-projects">
                <img src={image} width={350} />
                <h3 className="name-project">{name}</h3>
              </li>
            </a>
          ))}
        </ul>
      </div>
    );
  }