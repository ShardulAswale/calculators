import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoinit = [
    { Todo: "todo 1 " },
    { Todo: "todo 2 " },
    { Todo: "todo 3 " },
  ];
  const [list, setList] = useState(todoinit);
  const [todo, setTodo] = useState("");
  return (
    <div>
      <Typography>TodoList</Typography>
      {/* <Todo description="test" /> */}
      <form action="">
        <TextField value={todo} onChange={(e) => setTodo(e.target.value)}>
          Enter Todo
        </TextField>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (todo != "") {
              // console.log([...list, { Todo: todo }]);
              setList([...list, { Todo: todo }]);
              setTodo("");
            }
          }}
          endIcon={<Add />}
        >
          Add
        </Button>
      </form>
      {/* {console.log(todo, list)} */}
      {list.map((item, index) => {
        // console.log(item)
        return (
          <TodoItem key={index} item={item} list={list} setList={setList} />
        );
      })}
    </div>
  );
};

export default TodoList;
