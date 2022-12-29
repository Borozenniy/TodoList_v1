import React from "react";
import { TextField, Box, Button, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { Todo } from "../../App";

const DEFAULT_TODO = { name: "", description: "" };

interface PanelProps {
   onAddTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

export const Panel: React.FC<PanelProps> = ({ onAddTodo }) => {
   const [todo, setTodo] = useState(DEFAULT_TODO);

   // TODO: check function
   const onClickHandlerWithCheck = () => {
      if (todo.name && todo.description) {
         onAddTodo(todo);
         console.log("@", todo);
         setTodo(DEFAULT_TODO);
      } else {
         alert("One of fields is emply");
      }
   };
   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setTodo({ ...todo, [name]: value });
   };

   /* 
   * Відправлення через Enter 
   TODO: Треба доробити
   useEffect(() => {
      const onKeypress = (e: any) => {
         if (e.key === "Enter") {
            onClickHandler();
         }
      };
      document.addEventListener("keypress", onKeypress);
      return () => {
         document.removeEventListener("keypress", onKeypress);
      };
   }, []);
   */

   return (
      <>
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
               value={todo.name}
               onChange={onChange}
            />
            <TextField
               fullWidth
               label="Description"
               name="description"
               value={todo.description}
               onChange={onChange}
            />

            <Button
               endIcon={<SendIcon />}
               variant="contained"
               size="large"
               onClick={onClickHandlerWithCheck}
            >
               ADD
            </Button>
         </Paper>
      </>
   );
};
