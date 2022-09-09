import { Container, Form, Background } from './styles.js';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input/index.jsx';
import { Button } from '../../components/Button/index.jsx';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { api } from '../../services/api.js';

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos');
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
          alert('Ocorreu um erro inesperado');
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links</p>
        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
