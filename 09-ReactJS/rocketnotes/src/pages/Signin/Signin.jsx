import { Container, Form, Background } from './styles.js';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input/index.jsx';
import { Button } from '../../components/Button/index.jsx';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth.jsx';

import { useState } from 'react';

export function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links</p>
        <h2>Faça seu login</h2>

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
