/*----- constants -----*/
let btn = document.getElementById("reset")

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
  document.getElementById("1").innerHTML = "" 
  document.getElementById("2").innerHTML = "" 
  document.getElementById("3").innerHTML = ""
  document.getElementById("4").innerHTML = "" 
  document.getElementById("5").innerHTML = ""
  document.getElementById("6").innerHTML = "" 
  document.getElementById("7").innerHTML = "" 
  document.getElementById("8").innerHTML = "" 
  document.getElementById("9").innerHTML = ""   
}
