import styled from "styled-components";
import theme from "../theme/theme";
const ButtonLoguot = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  padding: 0.75rem 1rem;
  font-size: ${(props) => props.theme.fontSizes.medium};
  border: none;

  cursor: pointer;

  &::placeholder {
    color: ${theme.colors.primary};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.dark};
  }
`;

export default ButtonLoguot;