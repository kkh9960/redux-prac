##  React-Redux

#### Component 소개

- TodoList : 메인 화면을 구성하는 컴포넌트. Layout 컴포넌트를 보여주는 컴포넌트
- Layout : Header, Form, List 컴포넌트를 모아주는 컴포넌트
- Header : 상단의 Header를 표현하는 컴포넌트
- Form : 제목과 내용을 입력하는 폼 컴포넌트 id, title, body, isDone을 전역 상태에 액션객체로 준다.
- List : 제목과 내용을 보여주는 컴포넌트 Store를 구독하여 Reducer를 통해 Store가 바뀌게 되면 바뀐 내용을 (구독)보여준다. 
- Detail : 상세 화면을 구성하는 컴포넌트 제목과 내용 id를 구독하여 보여준다.
