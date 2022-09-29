import { Container } from './styles';

// export function TextArea() {
//   return (
//     <Container>
//       <textarea name="" id="" cols="30" rows="10"></textarea>
//     </Container>
//   );
// }
export function TextArea({ value, ...rest }) {
  return <Container {...rest}>{value}</Container>;
}
