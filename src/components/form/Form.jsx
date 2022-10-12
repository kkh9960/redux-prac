import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../../redux/modules/todoModule"

function Form () {
  const id = shortid.generate();
  const dispatch = useDispatch();
   
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

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return alert("제목과 내용 모두 입력하세요!");
    dispatch(addTodo({...todo, id}))
    setTodo(initialState);}

  //const counterStore = useSelector((state) => state.todoModule.todoList); // 추가해주세요.

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
`;