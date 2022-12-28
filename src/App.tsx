import React from "react";
import { Header, Panel, TodoList } from "./components/index";
import { Box } from "@mui/material";
import "./App.css";
import { useState } from "react";

export type Todo = {
   id: number;
   name: string;
   description: string;
   checked: boolean;
};

const App: React.FC = () => {
   const [todoList, setTodoList] = useState([
      { id: 1, name: "task1", description: "text1", checked: false },
      { id: 2, name: "task2", description: "text2", checked: false },
      { id: 3, name: "task3", description: "text3", checked: true },
   ]);

   const onDeleteTodo = (id: Todo["id"]) => {
      setTodoList(todoList.filter((todolist) => todolist.id !== id));
   };

   //TODO Закінчити фунцію по зміні boolean значення
   const onCheckedTodo = (checked: Todo["checked"]) => {
      setTodoList(todoList.filter((todo) => todo.checked));
   };

   return (
      <>
         <div className="App">
            <Box display="flex" flexDirection={"column"} width={600}>
               <Header />
               <Panel />
               <TodoList
                  todoList={todoList}
                  onDeleteTodo={onDeleteTodo}
                  onCheckedTodo={onCheckedTodo}
               />
            </Box>
         </div>
         c
      </>
   );
};

export default App;
