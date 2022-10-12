import React from "react";
import styled from "styled-components";

function Header () {
    return(
      <StHeader>
        <div>My Todo List</div>
        <div>React</div>
      </StHeader>
    )
  }
  //단순히 글자를 써 넣은 것.

export default Header;

const StHeader = styled.div`
  align-items: center;
  border: 1px solid silver;
  border-radius: 10px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  background-color: teal;
  color: white;
`;