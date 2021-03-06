import styled from "styled-components";
import { themes } from "../../theme";

export const Heading = styled.h1`
  text-align: center;
  color: ${themes.accentBright};
`;

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: ${themes.accentBright};
`;
