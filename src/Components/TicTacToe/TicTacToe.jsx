import { useState } from 'react';
import { Button, ButtonGroup, Paper, Stack, Typography } from "@mui/material";
import Board from '../Board';

const TicTacToe = () => {
    var win = "";
    const intiScore = { score1: 0, score2: 0 };
    const intiBoard = Array(9).fill(null);
    const [board, setBoard] = useState(intiBoard);
    const [player, setPlayer] = useState(true);
    const [score, setScore] = useState(intiScore);
    const [winner, setWinner] = useState(null);
  
    const clearboard = (type) => {
      if (type === 0) {
        setBoard(intiBoard);
        setWinner(null);
        setScore(intiScore);
      }
      if (type === 1) {
        setBoard(intiBoard); 
        setWinner(null);
      }
    };
  
    return (
      <div className="App">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h1" sx={{ color: "blue" }}>
            Tic - Tac - Toe
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={10}
          >
            <Paper
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              elevation={player ? 6 : 1}
            >
              <Typography variant="h1" sx={{ color: "red", p: 1 }}>
                Player 1 - {score.score1}
              </Typography>
            </Paper>
            <Paper
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              elevation={!player ? 6 : 1}
            >
              <Typography variant="h1" sx={{ color: "green", p: 1 }}>
                Player 2 - {score.score2}
              </Typography>
            </Paper>
          </Stack>
          {/* {`Board` + JSON.stringify(board)}
          {`Player` + JSON.stringify(player)} */}
          {winner && (
            <Typography variant="h1" sx={{ color: "green", p: 1 }}>
               {winner}
            </Typography>
          )}
          <Board
            board={board}
            setBoard={setBoard}
            player={player}
            setPlayer={setPlayer}
            score={score}
            setScore={setScore}
            winner={winner}
            setWinner={setWinner}
          />
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => clearboard(0)}>Clear Score</Button>
            <Button onClick={() => clearboard(1)}>Next Round</Button>
          </ButtonGroup>
        </Stack>
      </div>
    );
}

export default TicTacToe