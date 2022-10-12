import React from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header.jsx";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";


function TodoList() {
  return (
    <Layout> 
      <Header/>
      <Form/>
      <List/>
    </Layout>
    // <Layout>
    // props.children을 사용해서 Layout사이에 있는 값을 모두 넘겨줌
    // </Layout>
  );
};

export default TodoList;