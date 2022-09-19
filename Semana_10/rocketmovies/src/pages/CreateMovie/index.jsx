import { Container, Content } from './styles';
import { Header } from '../../components/Header/index.jsx';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input/index.jsx';
import { TextArea } from '../../components/TextArea/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { NewMarker } from '../../components/NewMarker/index.jsx';

import { Link } from 'react-router-dom';

export function CreateMovies() {
  return (
    <Container>
      <Header />
      <Content>
        <div className="page">
          <div className="back">
            <FiArrowLeft />
            {/* <a href="#">Voltar</a> */}
            <Link to="/">Voltar</Link>
          </div>
          <div className="newMovie">
            <h2>Novo filme</h2>
          </div>
          <div className="titleAndNote">
            <Input placeholder="Título" size={73} />
            <Input placeholder="Sua nota de 0 a 5" size={73} />
          </div>
          <TextArea />
          <div className="mark">
            <h2>Marcadores</h2>
            <div className="section">
              <NewMarker value="React" size={6} />
              <NewMarker isNew value="Novo marcador" size={15} />
            </div>
          </div>
          <div className="btns">
            <div className="btnBlack">
              <button>Excluir filme</button>
            </div>
            <Button title="Salvar alterações" />
          </div>
        </div>
      </Content>
    </Container>
  );
}
