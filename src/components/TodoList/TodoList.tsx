import React from "react";
import { Box } from "@mui/material";
import { TodoItem } from "./TodoItem/TodoItem";
import type { Todo } from "../../App";
import { EditTodoItem } from "./EditTodoItem/EditTodoItem";

interface TodoListProps {
   todoList: Todo[];
   editTodoId: Todo["id"] | null;
   onDeleteTodo: (id: Todo["id"]) => void;
   onCheckedTodo: (id: Todo["id"]) => void;
   onEdit: (id: Todo["id"]) => void;
}
export const TodoList: React.FC<TodoListProps> = ({
   todoList,
   editTodoId,
   onDeleteTodo,
   onCheckedTodo,
   onEdit,
}) => {
   return (
      <Box display={"flex"} flexDirection={"column-reverse"}>
         {todoList.map((todo) => {
            if (todo.id === editTodoId)
               return (
                  <EditTodoItem
                     key={todo.id}
                     todo={todo}
                     onChangeTodo={(todo) => console.log("changed", todo)}
                  />
               );
            return (
               <TodoItem
                  key={todo.id}
                  todo={todo}
                  onCheckedTodo={onCheckedTodo}
                  onDeleteTodo={onDeleteTodo}
                  onEdit={onEdit}
               />
            );
         })}
      </Box>
   );
};
