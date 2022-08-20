import { Container } from './styles';

export function Buttontext({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
