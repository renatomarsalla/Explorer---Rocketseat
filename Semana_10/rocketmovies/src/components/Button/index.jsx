import { Container } from './styles';

export function Button({ icon: Icon, title, width, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {title}
      {/* <button {...rest} /> */}
      {/* {title} */}
      {/* <button {...rest}></button> */}
    </Container>
  );
}
