import { Container, Form, Background } from './styles.js';
import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Buttontext } from '../../components/ButtonText/index.jsx';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Signin() {
  const navigate = useNavigate();

  // function change() {
  //   navigate('/register');
  // }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input placeholder="Email" type="mail" icon={FiMail} size={34} />
        <Input placeholder="Senha" type="password" icon={FiLock} size={34} />

        <Button title="Entrar" />
        {/* <Link to="/">Entrar</Link> */}

        {/* <Buttontext title="Criar conta" /> */}

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
