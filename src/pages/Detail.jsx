import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const param = useParams();
  // 현재 페이지 id값 꺼내오는 훅
  const navigate = useNavigate();
  // 버튼으로 해당 경로 이동하는 훅
  const TodoStore = useSelector((state) => state.todoModule.todoList)
  // todoList에 들어간 배열 출력
  let detail =  TodoStore.filter(todo=> todo.id == param.id)
  // 그중에 id가 현재 id랑 같은것만 꺼낸다.

  return (
  <StContainer>
    <StBox>
      <div>
        <StBoxHeader>
          <div>id : {param.id}</div>
          <StButton onClick={()=> {navigate("/")}}>이전으로</StButton>
        </StBoxHeader>
          <StTitle>{detail[0].title}</StTitle>
          <StBody>{detail[0].body}</StBody>
          {/* 현재 id랑 같은 todo만 꺼내왔으므로 배열은 1개라 index[0]만 
          존재, 그중에 타이틀과 바디를 꺼내서 써준다.*/}
        </div>
    </StBox>
  </StContainer>);
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StBox = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 4px solid #00a0a0;
  border-radius: 10px;
  padding: 12px 24px 24px;
  background-color: #00a0a0;
`;

const StBoxHeader = styled.div`
  display: flex;
  height: 80px;
  background-color: white;
  border: 4px solid #00a0a0;
  border-radius: 10px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  font-size: x-large;
  color: teal
`;

const StTitle = styled.h1`
  padding: 0 24px;
  color: white
`;

const StBody = styled.main`
  padding: 0 24px;
  color: white
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 50px;
  width: 120px;
  background-color: white;
  border-radius: 12px;
  cursor: pointer;
  color : black;
  font-size: medium;
  &:hover{  
    background-color : #00a0a0;
    color : white
  }
`;
