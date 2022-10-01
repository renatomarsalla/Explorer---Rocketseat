import { Container } from './styles';
import { Input } from '../Input/index.jsx';
import { Buttontext } from '../ButtonText/index.jsx';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth.jsx';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useEffect, useState } from 'react';

export function Header() {
  const { signOut, user } = useAuth();
  const [search, setSearch] = useState('');

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const navigate = useNavigate();

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  // async function fetchNotes() {
  //   const response = await api.get(`/movie_notes?title=${search}`);
  //   setNotes(response.data);
  // }

  return (
    <Container>
      <h2>RocketMovies</h2>
      {/* <Input
        placeholder="Pesquisar pelo título"
        size={100}
        onChange={e => setSearch(e.target.value)}
      /> */}
      <div className="name-logout-img">
        <div className="name-logout">
          <Link to="/profile">{user.name}</Link>
          <Buttontext title="Sair" onClick={handleSignOut} />
        </div>
        <div className="name-img">
          <img src={avatarURL} alt={user.name} />
        </div>
      </div>
    </Container>
  );
}
