import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
body {
 margin: 0;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}
`;