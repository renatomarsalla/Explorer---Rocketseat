import { Container } from './styles';
import { Input } from '../Input/index.jsx';
import { Buttontext } from '../ButtonText/index.jsx';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth.jsx';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header() {
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input placeholder="Pesquisar pelo título" size={100} />
      <div className="name-logout-img">
        <div className="name-logout">
          <Link to="/profile">{user.name}</Link>
          <Buttontext title="Sair" onClick={signOut} />
        </div>
        <div className="name-img">
          <img src={avatarURL} alt={user.name} />
        </div>
      </div>
    </Container>
  );
}
