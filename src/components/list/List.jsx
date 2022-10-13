import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo} from "../../redux/modules/todoModule"
import styled from "styled-components";
import { Link } from "react-router-dom"

function List() {
  const dispatch = useDispatch();
  const TodoStore = useSelector((state) => state.todoModule.todoList)
  // todoList에 들어간 배열 출력

  return (
    <STListContainer>
      <STH2>Working.. 🔥</STH2>
      <STListWrap>
        {/* 배열에서 todo의 isDone이 거짓이면 {todo.~~~} 찾아서 넣어줌 */}
       {TodoStore.map((todo) => {
        if (!todo.isDone) {
          return (
            <STBox key = {todo.id}>
            <div>
              <div>
               <StyledLink to={`/Detail/${todo.id}`}>상세 페이지</StyledLink>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
              </div>
              <STButton>
              <STDelButton onClick={()=> {
                dispatch(deleteTodo(todo))
              }}>삭제</STDelButton>
              <STDChangeButton onClick={()=> {
                dispatch(toggleTodo(todo))
              }}>{!todo.isDone ? "완료" : "취소"}</STDChangeButton>
              </STButton>
            </div>
            </STBox>
          )} else {
            return null
        }
       })}
      </STListWrap>
      <STH2>Done..! 🎉</STH2>
      <STListWrap>
        {/* 배열에서 todo의 isDone이 참이면 {todo.~~~} 찾아서 넣어줌 */}
       {TodoStore.map((todo) => {
        if (todo.isDone) {
          return (
            <STBox key = {todo.id}>
            <div>
              <div>
              <StyledLink to={`/Detail/${todo.id}`}>상세 페이지</StyledLink>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
              </div>
              <STButton>
              <STDelButton onClick={()=> {
                dispatch(deleteTodo(todo))
              }}>삭제</STDelButton>
              <STDChangeButton onClick={()=> {
                dispatch(toggleTodo(todo))
              }}>{todo.isDone ? "취소" : "완료"}</STDChangeButton>
              </STButton>
            </div>
            </STBox>
          )} else {
            return null
        }
       })}
      </STListWrap>
      </STListContainer>
  );}

export default List;

const STListContainer = styled.div`
  padding: 0 24px;
  border: 1px solid black;
  border-radius: 10px;
`
const STH2=  styled.h2`
  display: block;
  font-size:  1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`
const STListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const STDelButton = styled.button`
  background-color: white;
  border-radius: 8px;
  height: 40px;
  width: 50%;
  font-size: medium;
  border: 2px solid red;
  &:hover{  
    background-color : red;
    color : white
  }
`

const STDChangeButton = styled.button`
  background-color: white;
  border-radius: 8px;
  height: 40px;
  width: 50%;
  font-size: medium;
  border: 2px solid green;
  &:hover{  
    background-color : green;
    color : white
  }
`

const STButton = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`
const STBox = styled.div`
  border: 4px solid teal;
  border-radius: 10px;
  padding: 12px 24px 24px;
  width: 270px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`