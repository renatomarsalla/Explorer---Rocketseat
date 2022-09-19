import { Container, Form, Avatar } from './styles';
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input/index.jsx';
import { Button } from '../../components/Button/index.jsx';

import { Link } from 'react-router-dom';

export function Profile() {
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
          <img
            src="https://www.github.com/renatomarsalla.png"
            alt="foto de perfil"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <div className="fields">
          <div className="date_email">
            <Input placeholder="Nome" type="text" icon={FiUser} />
            <Input placeholder="Email" type="mail" icon={FiMail} />
          </div>
          <div className="passwords">
            <Input placeholder="Senha atual" type="password" icon={FiLock} />
            <Input placeholder="Nova senha" type="password" icon={FiLock} />
          </div>
          <div className="div-button">
            <Button title="Salvar" />
          </div>
        </div>
      </Form>
    </Container>
  );
}
