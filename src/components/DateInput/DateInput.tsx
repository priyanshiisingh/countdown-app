import React from "react";

//styles
import {
  InputDiv,
  Button,
  Label,
  ParentDiv,
  InnerDiv,
  Primary,
} from "../../assets/styles/DateInputStyles";

const DateInput = () => {
  return (
    <Primary>
      <ParentDiv>
        <Label htmlFor="selDate">Select Date: </Label>
        <InnerDiv>
          <InputDiv type="date" name="selDate" />
          <Button>Submit</Button>
        </InnerDiv>
      </ParentDiv>
    </Primary>
  );
};

export default DateInput;
