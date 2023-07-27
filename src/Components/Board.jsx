import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Board = ({
  board,
  setBoard,
  score,
  setScore,
  winner,
  setWinner,
  player,
  setPlayer,
}) => {
  var player1sign = "X";
  var player2sign = "O";
  const winningSet = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const setMove = (boxidx) => {
    if (!isFilled()) return; //already played check
    const newboard = board.map((value, idx) => {
      if (idx === boxidx) {
        return player ? player1sign : player2sign;
      } else {
        return value;
      }
    });
    setBoard(newboard); // adding updating the ui for move
    console.log(newboard);
    console.log(allFilled(newboard));
    isWon(newboard); // win check
    isDraw(newboard); // draw check
    setPlayer(!player); // set to next player
  };

  const isFilled = () => {
    return board.includes(null);
  };

  function allFilled(board) {
    return board.includes(null);
  }

  function isDraw(board) {
    if (!board.includes(null)) {
      setWinner("Draw");
    }
    console.log(board.includes(null), !board.includes(null));
  }

  const isWon = (board) => {
    console.log("in check board " + board);
    winningSet.map((set) => {
      const [x, y, z] = set;
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log("winner is " + board[x]);
        if (board[x] === player1sign) {
          setScore({ ...score, score1: score.score1 + 1 });
          console.log(score);
          setWinner("Winner is " + player1sign);
        }
        if (board[x] === player2sign) {
          setScore({ ...score, score2: score.score2 + 1 });
          console.log(score);
          setWinner("Winner is " + player2sign);
        }
        return board[x];
      }
      return null;
    });
  };
  return (
    <Grid container spacing={2} maxWidth={500}>
      {board !== null &&
        board.map((item, idx) => {
          return (
            <Grid item key={idx} xs={4}>
              <Paper
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}
                elevation={4}
                square
              >
                <Button
                  onClick={(e) => {
                    winner === null && item === null && setMove(idx);
                  }}
                  style={{ width: "100%" }}
                  type="button"
                  color={item === "X" ? "error" : "success"}
                >
                  <Typography variant="h1" minHeight={112}>
                    {item}
                  </Typography>
                </Button>
              </Paper>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Board;
