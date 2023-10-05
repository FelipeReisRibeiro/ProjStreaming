import './header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className="logo" to="/">Mit Flix</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
            {/* <h1>
                TESTE HEADER
            </h1> */}
        </header>
    )
}
export default Header;