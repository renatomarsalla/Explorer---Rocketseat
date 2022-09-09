import { Container, Profile, Logout } from './styles.js';
import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth.jsx';

import { api } from '../../services/api.js';

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';

export function Header() {
  const { logOut, user } = useAuth();
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder;
  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt="Foto do usuario" />

        <div>
          <span>Bem Vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={logOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
