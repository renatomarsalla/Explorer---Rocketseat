import { Container } from './styles.js';
import { Tag } from '../Tags/index.jsx';
import { Link } from 'react-router-dom';

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
      {/* <div className="seeMore">
        <Link to="/previewmovie">Veja mais</Link>
      </div> */}
    </Container>
  );
}
