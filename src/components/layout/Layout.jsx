import React from "react";
import styled from "styled-components";

function Layout (props) {
  return <StLayout>{props.children}</StLayout>;
  // props.children을 사용해 받는다. TodoList.jsx의 
  // Layout 사이에 있는 값들을 넣어준다.
};

export default Layout;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;