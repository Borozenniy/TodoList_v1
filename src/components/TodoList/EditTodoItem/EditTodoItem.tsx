import React from "react";
import { TextField, Paper, Button } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import type { Todo } from "../../../App";

interface EditTodoItemProps {
   todo: Todo;
   onChangeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

export const EditTodoItem: React.FC<EditTodoItemProps> = ({
   todo,
   onChangeTodo,
}) => {
   const [editTodo, setEditTodo] = React.useState({
      name: todo.name,
      description: todo.description,
   });

   const onClickHandlerWithCheck = () => {
      if (todo.name && todo.description) {
         onChangeTodo(todo);
      } else {
         alert("One of fields is emply");
      }
   };
   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setEditTodo({ ...todo, [name]: value });
   };
   return (
      <Paper
         elevation={2}
         sx={{
            width: "100%",
            padding: "10px 10px",
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            gap: 1,
         }}
      >
         <TextField
            fullWidth
            label="Text"
            name="name"
            value={editTodo.name}
            onChange={onChange}
         />
         <TextField
            fullWidth
            label="Description"
            name="description"
            value={editTodo.description}
            onChange={onChange}
         />

         <Button
            endIcon={<EditIcon />}
            variant="contained"
            size="large"
            onClick={onClickHandlerWithCheck}
         >
            Edit
         </Button>
      </Paper>
   );
};
