import { Container } from './styles';

export function Button({ icon: Icon, title, width, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      {title}
      {/* <button {...rest} /> */}
      {/* {title} */}
      {/* <button {...rest}></button> */}
    </Container>
  );
}
