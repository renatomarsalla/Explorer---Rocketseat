import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input/index.jsx';
import { Button } from '../../components/Button/index.jsx';
// import { Buttontext } from '../../components/ButtonText/index.jsx';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import { api } from '../../services/api.js';

import { useState } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert(' preencha todos os campos');
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('usuario cadastrado com sucesso');
        navigate('/');
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('nao foi possivel cadastrar');
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          size={34}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          icon={FiMail}
          size={34}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={FiLock}
          size={34}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />

        {/* <Buttontext icon={FiArrowLeft} title="Voltar para o login" /> */}
        <div className="back">
          <FiArrowLeft />
          <Link to="/">Voltar para o login</Link>
        </div>
        {/* <Link to="/">Voltar para o login</Link> */}
      </Form>
      <Background />
    </Container>
  );
}
