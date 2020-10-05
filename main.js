/*----- constants -----*/
let playerOne = 'playerOne'
let btn = document.getElementById("reset")
const grid = document.querySelector('.grid')
/*----- app's state (variables) -----*/

let turn = -1
let board = [ 
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

/*----- cached element references -----*/
const grid = document.querySelector('.grid')


/*----- event listeners -----*/
grid.addEventListener('click', newTurn)
btn.addEventListener('click', reset)

/*----- functions -----*/

function render() {

    board.forEach((box, idx) =>  {
        if (box > 0) {
            document.getElementById(idx).textContent = 'O'
        }
        if (box < 0) {
            document.getElementById(idx).textContent = 'X'
        }
    })
document.getElementById('reset').onclick = function() {reset()} ;
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
  console.log('clicked')
  btn.onclick.document.querySelector('.box').innerHTML = "" 
  
}
