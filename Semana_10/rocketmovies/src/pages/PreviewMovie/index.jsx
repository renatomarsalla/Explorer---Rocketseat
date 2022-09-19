import { Container, Content } from './styles';
import { Header } from '../../components/Header/index.jsx';
import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi';
import { Tag } from '../../components/Tags/index.jsx';

import { Link } from 'react-router-dom';

export function PreviewMovie() {
  return (
    <Container>
      <Header />
      <div className="page">
        <div className="back">
          <FiArrowLeft />
          <Link to="/">Voltar</Link>
          {/* <a href="#">Voltar</a> */}
        </div>
        <Content>
          <div className="title">
            <h2>Interestellar</h2>
            <div className="star">
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </div>
          </div>
          <div className="by">
            <div className="author">
              <img
                src="https://www.github.com/renatomarsalla.png"
                alt="foto de perfil"
              />
              <h3>Por Renato Marsalla Toscano</h3>
            </div>
            <div className="date">
              <FiClock />
              <h3>19/08/2022 às 19:14</h3>
            </div>
          </div>
          <div className="tags">
            <Tag title="Comédia" />
            <Tag title="Drama" />
            <Tag title="Romance" />
          </div>
          <div className="resume">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              harum sit corrupti, similique vel quos officiis assumenda placeat
              eveniet tempore reprehenderit veritatis dicta, voluptates natus
              fugit quae ea odio! Laborum?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum quas incidunt quidem debitis aspernatur
              saepe velit minima. Harum architecto facilis, laborum eius
              necessitatibus aliquam porro, quas possimus dolor vel molestias?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              harum sit corrupti, similique vel quos officiis assumenda placeat
              eveniet tempore reprehenderit veritatis dicta, voluptates natus
              fugit quae ea odio! Laborum?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum quas incidunt quidem debitis aspernatur
              saepe velit minima. Harum architecto facilis, laborum eius
              necessitatibus aliquam porro, quas possimus dolor vel molestias?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              harum sit corrupti, similique vel quos officiis assumenda placeat
              eveniet tempore reprehenderit veritatis dicta, voluptates natus
              fugit quae ea odio! Laborum?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum quas incidunt quidem debitis aspernatur
              saepe velit minima. Harum architecto facilis, laborum eius
              necessitatibus aliquam porro, quas possimus dolor vel molestias?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              harum sit corrupti, similique vel quos officiis assumenda placeat
              eveniet tempore reprehenderit veritatis dicta, voluptates natus
              fugit quae ea odio! Laborum?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum quas incidunt quidem debitis aspernatur
              saepe velit minima. Harum architecto facilis, laborum eius
              necessitatibus aliquam porro, quas possimus dolor vel molestias?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              harum sit corrupti, similique vel quos officiis assumenda placeat
              eveniet tempore reprehenderit veritatis dicta, voluptates natus
              fugit quae ea odio! Laborum?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum quas incidunt quidem debitis aspernatur
              saepe velit minima. Harum architecto facilis, laborum eius
              necessitatibus aliquam porro, quas possimus dolor vel molestias?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              harum sit corrupti, similique vel quos officiis assumenda placeat
              eveniet tempore reprehenderit veritatis dicta, voluptates natus
              fugit quae ea odio! Laborum?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum quas incidunt quidem debitis aspernatur
              saepe velit minima. Harum architecto facilis, laborum eius
              necessitatibus aliquam porro, quas possimus dolor vel molestias?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              harum sit corrupti, similique vel quos officiis assumenda placeat
              eveniet tempore reprehenderit veritatis dicta, voluptates natus
              fugit quae ea odio! Laborum?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum quas incidunt quidem debitis aspernatur
              saepe velit minima. Harum architecto facilis, laborum eius
              necessitatibus aliquam porro, quas possimus dolor vel molestias?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              harum sit corrupti, similique vel quos officiis assumenda placeat
              eveniet tempore reprehenderit veritatis dicta, voluptates natus
              fugit quae ea odio! Laborum?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum quas incidunt quidem debitis aspernatur
              saepe velit minima. Harum architecto facilis, laborum eius
              necessitatibus aliquam porro, quas possimus dolor vel molestias?
            </p>
          </div>
        </Content>
      </div>
    </Container>
  );
}
