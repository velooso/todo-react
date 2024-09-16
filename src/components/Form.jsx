import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ addTodo }) {

  const [text, setText] = useState(null);
  const [id, setId] = useState(0)
  
  const todoCreate = (text) => {
    const todoObj = {
      text: text, id: id
    };
    setId( id + 1);
    addTodo(todoObj);
    setText("");
  }
  const onKeyDown = (e) => {
      if(e.which === 13){
        todoCreate(text);
      }else if(e.which === 27)
        {
        setText("");
      }
  }



  return (
    <Paper style={{ padding: "1em" }}>
      <div className="formContainer">
        <TextField
          id="outlined-basic"
          label="Tarefa"
          value={text}
          onChange = {(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
          fullWidth
        />
        <Button variant="contained" onClick={() => todoCreate(text)}>Enviar</Button>
      </div>
    </Paper>
  );
}
