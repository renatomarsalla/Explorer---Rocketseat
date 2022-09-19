import { Container, Content } from './styles';
import { FiPlus, FiStar } from 'react-icons/fi';
import { Header } from '../../components/Header/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/Tags/index.jsx';

import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Container>
      <Header />
      <div className="page">
        <div className="my-movies">
          <h2>Meus filmes</h2>
          <div className="buttonAdd">
            <FiPlus />
            {/* <button>Adiconar filmes</button>
             */}
            <Link to="/createMovie">Adiconar filmes</Link>
          </div>
        </div>

        <Content>
          <Section title="Interestellar">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              excepturi sequi laudantium perspiciatis libero omnis! Ad, iste
              hic? Doloremque aperiam voluptas, voluptatum fugiat asperiores
              architecto laudantium facere eligendi a accusamus.
            </p>
            <div className="tags">
              <Tag title="Ficção científica" />
              <Tag title="Drama" />
              {/* <h3>veja mais</h3> */}
              <Link to="/previewmovie">Veja mais</Link>
            </div>
          </Section>
          <Section title="Interestellar">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              excepturi sequi laudantium perspiciatis libero omnis! Ad, iste
              hic? Doloremque aperiam voluptas, voluptatum fugiat asperiores
              architecto laudantium facere eligendi a accusamus.
            </p>
            <div className="tags">
              <Tag title="Ficção científica" />
              <Tag title="Drama" />
              {/* <h3>veja mais</h3> */}
              <Link to="/previewmovie">Veja mais</Link>
            </div>
          </Section>
          <Section title="Interestellar">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              excepturi sequi laudantium perspiciatis libero omnis! Ad, iste
              hic? Doloremque aperiam voluptas, voluptatum fugiat asperiores
              architecto laudantium facere eligendi a accusamus.
            </p>
            <div className="tags">
              <Tag title="Ficção científica" />
              <Tag title="Drama" />
              {/* <h3>veja mais</h3> */}
              <Link to="/previewmovie">Veja mais</Link>
            </div>
          </Section>
          <Section title="Interestellar">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              excepturi sequi laudantium perspiciatis libero omnis! Ad, iste
              hic? Doloremque aperiam voluptas, voluptatum fugiat asperiores
              architecto laudantium facere eligendi a accusamus.
            </p>
            <div className="tags">
              <Tag title="Ficção científica" />
              <Tag title="Drama" />
              {/* <h3>veja mais</h3> */}
              <Link to="/previewmovie">Veja mais</Link>
            </div>
          </Section>
          <Section title="Interestellar">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              excepturi sequi laudantium perspiciatis libero omnis! Ad, iste
              hic? Doloremque aperiam voluptas, voluptatum fugiat asperiores
              architecto laudantium facere eligendi a accusamus.
            </p>
            <div className="tags">
              <Tag title="Ficção científica" />
              <Tag title="Drama" />
              {/* <h3>veja mais</h3> */}
              <Link to="/previewmovie">Veja mais</Link>
            </div>
          </Section>
          <Section title="Interestellar">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              excepturi sequi laudantium perspiciatis libero omnis! Ad, iste
              hic? Doloremque aperiam voluptas, voluptatum fugiat asperiores
              architecto laudantium facere eligendi a accusamus.
            </p>
            <div className="tags">
              <Tag title="Ficção científica" />
              <Tag title="Drama" />
              {/* <h3>veja mais</h3> */}
              <Link to="/previewmovie">Veja mais</Link>
            </div>
          </Section>
        </Content>
      </div>
    </Container>
  );
}
