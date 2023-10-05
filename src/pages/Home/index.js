//useeffect serve para que sempre que abra a pagina ja carregue os filmes
import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';
//https://api.themoviedb.org/3/movie/now_playing?api_key=da40b6e135ed3e0b770fd2693a08bf58&language=pt-BR


function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLading] = useState(true);

//useeffect serve para que sempre que o usuario abra a pagina ja chame a api abaixo e carregue os filmes
useEffect(()=>{
async function loadFilmes(){
    const response = await api.get("movie/now_playing",{
    params:{
     api_key: "da40b6e135ed3e0b770fd2693a08bf58",
     language: "pt-BR",
     page:1,
    }
})
// sempre pegar a função a cima e joga no log da pagina e filta apenas os 10 primeiros registros de filmes
//console.log(response.data.results.slice(0, 10));
    setFilmes(response.data.results.slice(0, 10));
    setLading(false);
}

loadFilmes();

}, [])
     
    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=> {
                    return(
                        <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;