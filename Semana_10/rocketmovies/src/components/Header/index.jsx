import { Container } from './styles';
import { Input } from '../Input/index.jsx';
import { Buttontext } from '../ButtonText/index.jsx';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth.jsx';

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input placeholder="Pesquisar pelo título" size={100} />
      <div className="name-logout-img">
        <div className="name-logout">
          {/* <p>Renato Marsalla</p> */}
          <Link to="/profile">Renato Marsalla</Link>
          <Buttontext title="Sair" onClick={signOut} />
          {/* <a href="#">sair</a> */}
        </div>
        <div className="name-img">
          <img
            src="https://www.github.com/renatomarsalla.png"
            alt="foto de perfil"
          />
        </div>
      </div>
    </Container>
  );
}
