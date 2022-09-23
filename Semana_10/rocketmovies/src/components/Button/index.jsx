import { Container } from './styles';

export function Button({ icon: Icon, title, width, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
