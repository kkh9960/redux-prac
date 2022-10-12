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
  );
};

export default TodoList;