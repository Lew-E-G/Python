// demonstates use of multi dimensional arrays, nested loops
const prompt = require("prompt-sync")()


function makeMove(turn, board) {
    while (true)    {
        const row = parseInt(prompt("Enter row: "))
        const column = parseInt(prompt("Enter column: "))

        if (isNaN(row) || row < 1 || row > 3) console.log("Invalid row")
        else if (isNaN(column) || column < 1 || column > 3) console.log("Invalid column")
        else if (board[row - 1][column - 1] !== " ") console.log("Invalid selection")
        else{
            board[row - 1][column - 1] = turn;
            break;
        }
    }
}

function printBoard(board) {
    for (let i = 0; i < board.length; i++) {
        const row = board[i]
        let rowString = ""
        for (let j = 0; j < row.length; j++) {
            rowString += row[j]
            if (j !== row.length - 1) rowString += " | "
        }
        console.log(rowString)
        if (i !== board.length - 1) console.log("---------")
    }
}

function checkWin(board, turn) {
    const lines = [
        [[0,0],[0,1],[0,2]], //row 1
        [[1,0],[1,1],[1,2]], //row 2
        [[2,0],[2,1],[2,2]], //row 3
        [[0,0],[1,0],[2,0]], //col 1
        [[0,1],[1,1],[2,1]], //col 2
        [[0,2],[1,2],[2,2]], //col 3
        [[0,0],[1,1],[2,2]], //diagonal
        [[0,2],[1,1],[2,0]], //diagonal
    ]
    for (let line of lines) {
        let win = true;
        for (pos of line) {
            const [row, column] = pos
            if (board[row][column] !== turn) {
                win = false
                break
            }
        }
        if (win) return true
    }
    return false
}
const board = [
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
]

let turn = "X";
let turnCount = 0;
let win = false;

while (turnCount < 9) {
    console.log(turn, "players turn")
    makeMove(turn, board)
    printBoard(board)
    console.log()
    win = checkWin(board, turn)
    if (win) {
        console.log(turn,"has won!")
        break;
    }

    if (turn === "X") turn = "O"
    else turn = "X"
    turnCount++;
}
if (!win) {console.log("Tie game")}

