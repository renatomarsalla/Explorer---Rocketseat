import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Buttontext } from '../../components/ButtonText/index.jsx';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export function Signup() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input type="text" placeholder="Nome" icon={FiUser} size={34} />
        <Input type="email" placeholder="Email" icon={FiMail} size={34} />
        <Input type="password" placeholder="Senha" icon={FiLock} size={34} />
        <Button title="Cadastrar" />

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
