/*----- constants -----*/
let btn = document.getElementById("reset")
let sound = document.getElementById("sound")
let bgCheckbox = document.querySelector('input[type="checkbox"]');

/*----- app's state (variables) -----*/
let turn = -1
let board = [ 
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

sound.volume = .3;

/*----- cached element references -----*/
const grid = document.querySelector('.grid')


/*----- event listeners -----*/
grid.addEventListener('click', newTurn)
btn.addEventListener('click', reset)
bgCheckbox.addEventListener('change', playSound);
/*----- functions -----*/

function render() {

    board.forEach((box, idx) =>  {
        if (box > 0) {
            document.getElementById(idx).textContent = 'O'
            playSound()
        }
        if (box < 0) {
            document.getElementById(idx).textContent = 'X'
            playSound()
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
  let turn = -1
}


function playSound() {
     sound.play() 
}