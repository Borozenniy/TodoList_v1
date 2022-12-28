import React from "react";
import { Box } from "@mui/material";
import { TodoItem } from "./TodoItem/TodoItem";
import type { Todo } from "../../App";

interface TodoListProps {
   todoList: Todo[];
   onDeleteTodo: (id: Todo["id"]) => void;
   onCheckedTodo: (checked: Todo["checked"]) => void;
}
export const TodoList: React.FC<TodoListProps> = ({
   todoList,
   onDeleteTodo,
   onCheckedTodo,
}) => {
   return (
      <Box display={"flex"} flexDirection={"column-reverse"}>
         {todoList.map((todo) => (
            <TodoItem
               key={todo.id}
               todo={todo}
               onCheckedTodo={onCheckedTodo}
               onDeleteTodo={onDeleteTodo}
            />
         ))}
      </Box>
   );
};
