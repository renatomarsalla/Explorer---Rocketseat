import { Container } from './styles.js';

export function Button({ title, loading = false, width, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  );
}
