import { Container, Form, Background } from './styles.js';
import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Buttontext } from '../../components/ButtonText/index.jsx';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input
          placeholder="Email"
          type="mail"
          icon={FiMail}
          size={34}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          size={34}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />
        {/* <Link to="/">Entrar</Link> */}

        {/* <Buttontext title="Criar conta" /> */}

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
