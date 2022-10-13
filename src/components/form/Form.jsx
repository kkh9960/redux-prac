import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../../redux/modules/todoModule"

function Form () {
  const id = shortid.generate();
  // 랜덤 id 생성
  const dispatch = useDispatch();
  // 액션 객체를 보내주기 위해 디스패치훅
   
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
    // default value 써준대로
  };

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {  
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });};
    // 기본값에서 이벤트가 발생하면 밑의 title body를 받아서
    // 새 배열로 title의 입력값(value), body의 입력값(value) 입력

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return alert("제목과 내용 모두 입력하세요!");
    dispatch(addTodo({...todo, id}))
    setTodo(initialState);};
    // 명확히 실행할때만 발동하게하고
    // 제목 내용 띄어쓰기빼고 빈칸이면 알럿 출력 아니면 밑으로
    // 디스패치로 액션객체 보낸다. 리듀서에서 todo의 id값을 받음
    // 빈칸으로 만들기
 
  return (
    <StForm>
        <STLabel>제목</STLabel>
        <STInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <STLabel>내용</STLabel>
        <STInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      <STButton onClick={onSubmitHandler}>추가하기</STButton>
    </StForm>
  );
}
export default Form;

const StForm = styled.div`
  background-color: beige;
  border-radius: 10px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  display: flex;
  gap: 20px;
`;

const STLabel = styled.label`
font-size: 16px;
  font-weight: 700;
`;

const STInput = styled.input`
  border: none;
  border-radius: 10px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

const STButton = styled.button`
  background-color: teal;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  height: 40px;
  width: 140px;
  &:hover{  
    background-color : #00a0a0;
    color : white
  }
`;