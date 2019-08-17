import * as React from 'react';
import '../App.css';

type ONGOING_GAME = -1
const ONGOING_GAME = -1

enum Player{
  None = 0,
  One = 1,
  Two = 2
}

interface IState{
  board: Player[]
  nextPlayerTurn: Player
  gameIsWon: Player | ONGOING_GAME
}

class GameForClass extends React.Component<{},IState> {

  state = {
    board : [
      Player.None, 
      Player.None, 
      Player.None, 
      Player.None, 
      Player.None, 
      Player.None, 
      Player.None, 
      Player.None, 
      Player.None
    ],
    nextPlayerTurn: Player.One,
    gameIsWon: ONGOING_GAME
  }

  public checkIfGameIsOver = (board: Player[]) => {
    if(board[0] === board[1] && board[1] === board[2] && board[2] !== Player.None)
      return board[0]
    else if(board[3] === board[4] && board[4] === board[5] && board[5] !== Player.None)
      return board[3]
    else if(board[6] === board[7] && board[7] === board[8] && board[8] !== Player.None)
      return board[6]
    else if(board[0] === board[3] && board[3] === board[6] && board[6] !== Player.None)
      return board[0]
    else if(board[1] === board[4] && board[4] === board[7] && board[7] !== Player.None)
      return board[1]
    else if(board[2] === board[5] && board[5] === board[8] && board[8] !== Player.None)
      return board[2]
    else if(board[0] === board[4] && board[4] === board[8] && board[8] !== Player.None)
      return board[0]
    else if(board[2] === board[4] && board[4] === board[6] && board[6] !== Player.None)
      return board[2]
    else

    for(const player of board){
      if(player === Player.None)
        return ONGOING_GAME
    }
    return Player.None
  }

  public handleCellClick = (index: number) => {
    const { board,nextPlayerTurn,gameIsWon} = this.state

    if(gameIsWon !== ONGOING_GAME || board[index] !== Player.None) return

    let newBoard = board.slice()

    newBoard[index] = nextPlayerTurn

    let newGameIsWon = this.checkIfGameIsOver(newBoard)

    this.setState({
      board:newBoard,
      nextPlayerTurn: 3 - nextPlayerTurn,
      gameIsWon:newGameIsWon
    })
  }

  public renderCell = (index: number) => {
    const { board } = this.state
    return (
      <div 
        className={'cell'} 
        key={ index } 
        onClick={ () => this.handleCellClick(index)}
        data-player={board[index]}
        >

      </div>
    )
  }
  
  public renderBoard = () => {
    const { board } = this.state
    return (
      <div className={'board-container'}>
        { board.map((value,key) => this.renderCell(key)) }
      </div>
    )
  }

  public renderStatus = () => {
    const { gameIsWon } = this.state

    const winningText = gameIsWon !== Player.None ? `Player ${gameIsWon} won` : 'The game is draw'

    return (
      <div style={{marginTop:15}}>
        { 'Player 1 is green' } <br/>
        { 'Player 2 is purple' } <br/>
        { gameIsWon === ONGOING_GAME ? 'Game is ongoing' : winningText}
      </div>
    )
  }

  render(){
    return (
      <div>
        <h1>ClASS形式的有状态三子棋组件</h1>
        { this.renderBoard() }
        { this.renderStatus() }
      </div>
    );
  }
}

export default GameForClass;