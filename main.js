/*----- constants -----*/
let playerOne = 'playerOne'
let btn = document.getElementById("reset")
/*----- app's state (variables) -----*/
let turn = -1
let board = [ 
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

/*----- cached element references -----*/
const grid = document.querySelector('.grid')


/*----- event listeners -----*/
grid.addEventListener('click', newTurn)
btn.addEventListener('click', reset)

/*----- functions -----*/


// function init() {
//     turn = -1
//     board = [
//         [0, 0, 0],
//         [0, 0, 0],
//         [0, 0, 0]
//     ]

// }
function render() {

    board.forEach((box, idx) =>  {
        if (box > 0) {
            document.getElementById(idx).textContent = 'O'
        }
        if (box < 0) {
            document.getElementById(idx).textContent = 'X'
        }
    })

}

function newTurn(e) {
    if (e.target.textContent == "O" || e.target.textContent == "X") { 
        alert("Please Select A Different Box.")
        return;
      }
    board[e.target.id] = turn;
    turn = turn * -1;
    render()
}

function reset(e) { 
    for (i = 0; i < grid.length; i++) {
      grid[e].textContent = ""
    }
    turn = -1;
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
}
