import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo} from "../../redux/modules/todoModule"
import styled from "styled-components";
import { Link } from "react-router-dom"

function List() {
  const dispatch = useDispatch();
  const TodoStore = useSelector((state) => state.todoModule.todoList)
  console.log(TodoStore)

  return (
    <STListCon>
      <STH2>Working.. 🔥</STH2>
      <STListWra>
       {TodoStore.map((todo) => {
        if (!todo.isDone) {
          return (
            <STCon key = {todo.id}>
            <div>
              <div>
               <Link to={`/Detail/${todo.id}`}>상세 페이지</Link>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
              </div>
              <STBut>
              <STDelBut onClick={()=> {
                dispatch(deleteTodo(todo))
              }}>삭제</STDelBut>
              <STDComBut onClick={()=> {
                dispatch(toggleTodo(todo))
              }}>{!todo.isDone ? "완료" : "취소"}</STDComBut>
              </STBut>
            </div>
            </STCon>
          )} else {
            return null
        }
       })}
      </STListWra>
      <STH2>Done..! 🎉</STH2>
      <STListWra>
       {TodoStore.map((todo) => {
        if (todo.isDone) {
          return (
            <STCon key = {todo.id}>
            <div>
              <div>
              <Link to={`/Detail/${todo.id}`}>상세 페이지</Link>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
              </div>
              <STBut>
              <STDelBut onClick={()=> {
                dispatch(deleteTodo(todo))
              }}>삭제</STDelBut>
              <STDComBut onClick={()=> {
                dispatch(toggleTodo(todo))
              }}>{todo.isDone ? "취소" : "완료"}</STDComBut>
              </STBut>
            </div>
            </STCon>
          )} else {
            return null
        }
       })}
      </STListWra>
      </STListCon>
  );}

export default List;

const STListCon = styled.div`
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
const STListWra = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const STDelBut = styled.button`
  background-color: white;
  border-radius: 8px;
  height: 40px;
  width: 50%;
  border: 2px solid red;
`

const STDComBut = styled.button`
  background-color: white;
  border-radius: 8px;
  height: 40px;
  width: 50%;
  border: 2px solid green;
`

const STBut = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`
const STCon = styled.div`
  border: 4px solid teal;
  border-radius: 10px;
  padding: 12px 24px 24px;
  width: 270px;
`