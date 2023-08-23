import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const TodoItem = ({ item, list, setList }) => {
  return (
    <>
      {/* {console.log("in todo", item)} */}
      <Box sx={{ minWidth: 275 }}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.Todo}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              endIcon={<DeleteIcon />}
              onClick={(e) => {
                e.preventDefault();
                setList(
                  list.filter((e) => {
                    return e != item;
                  })
                );
              }}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default TodoItem;
