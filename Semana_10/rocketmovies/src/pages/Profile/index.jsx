import { Container, Form, Avatar } from './styles';
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input/index.jsx';
import { Button } from '../../components/Button/index.jsx';

import { Link } from 'react-router-dom';

import { useState } from 'react';

import { useAuth } from '../../hooks/auth.jsx';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from '../../services/api';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  function handleAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      currentPassword: passwordOld,
      newPassword: passwordNew
    };

    const userUpdated = Object.assign(user, updated);
    await updateProfile({ user: userUpdated, avatarFile });
  }

  return (
    <Container>
      <header>
        <FiArrowLeft />
        <Link to="/">Voltar</Link>
        {/* <a href="#">Voltar</a>
         */}
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="foto de perfil" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleAvatar} />
          </label>
        </Avatar>
        <div className="fields">
          <div className="date_email">
            <Input
              placeholder="Nome"
              type="text"
              icon={FiUser}
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="mail"
              icon={FiMail}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="passwords">
            <Input
              placeholder="Senha atual"
              type="password"
              icon={FiLock}
              onChange={e => setPasswordOld(e.target.value)}
            />
            <Input
              placeholder="Nova senha"
              type="password"
              icon={FiLock}
              onChange={e => setPasswordNew(e.target.value)}
            />
          </div>
          <div className="div-button">
            <Button title="Salvar" onClick={handleUpdate} />
          </div>
        </div>
      </Form>
    </Container>
  );
}
