import styled from "styled-components";

const CounterCards = styled.div`
  display: flex;
  flex-directio: row;
  justify-content: space-around;
`;

const CardTitle = styled.div`
  color: hsl(237, 18%, 59%);
  text-transform: uppercase;
  margin-top: 20px;
  letter-spacing: 5px;
  font-size: 0.7rem;
  font-weight: 700;
  font-family: "Lato", sans-serif;
`;

export { CounterCards, CardTitle };
