import { Container, Links, Content } from './style.js';
import { Button } from '../../components/Button/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/Tags/index.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx';

function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum
            nulla eligendi modi aspernatur, delectus voluptatum dolores quaerat
            dicta quas repellendus iure, omnis quam fugiat est quisquam ratione
            quia officia!
          </p>
          <Section title="Links Uteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="nodejs"></Tag>
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}

export { Details };
