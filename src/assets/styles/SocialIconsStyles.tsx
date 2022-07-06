import styled from "styled-components";

const IconBlock = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PATH = styled.path`
  &:hover {
    fill: hsl(345, 95%, 68%);
  }
`;

export { IconBlock, PATH };
