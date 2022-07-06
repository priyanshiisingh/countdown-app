import styled from "styled-components";

const Primary = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
  width: 500px;
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`;

const Label = styled.label`
  color: hsl(0, 0%, 100%);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 12px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
`;

const InputDiv = styled.input`
  color: hsl(345, 95%, 68%);
  background-color: rgba(44, 44, 68, 255);
  border: none;
  padding: 10px;
  border-radius: 8px;
  letter-spacing: 5px;
  font-size: 12px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
`;

const Button = styled.button`
  color: hsl(345, 95%, 68%);
  background-color: rgba(44, 44, 68, 255);
  border: none;
  padding: 10px;
  border-radius: 8px;
  letter-spacing: 5px;
  font-size: 12px;
  font-weight: 700;
  font-family: "Lato", sans-serif;

  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: rgba(44, 44, 68, 0.5);
  }
`;

export { InputDiv, Button, Label, ParentDiv, InnerDiv, Primary };
