
let winningPlayer ="";

function newBoard() {

  let boardData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

let player = 1;

let boardHTML = ``;

for (let i=0; i<boardData.length; i++) {
  for (let j=0; j<boardData[i].length; j++){
    

    boardHTML +=`<div class="cell" data-row=${i} data-column=${j}></div>`
  }

  document.querySelector(".gridcontainer").innerHTML = boardHTML;

}

document.querySelector(".gridcontainer").innerHTML = boardHTML;

document.getElementById("demo").innerHTML = "Player 1 make your move";

let cells = document.querySelectorAll(".cell");

cells.forEach((cell)=>{

  cell.addEventListener("click",cellClickHanlder);
});  

  
function cellClickHanlder (event){

    let cell = event.target;
    let row = cell.dataset.row;
    let column = cell.dataset.column;

    if (boardData[row][column] == 0){

      boardData[row][column]= player;
    if (player ==1){
      cell.classList.add("circle")
    } else cell.classList.add("cross")

  

    if (checkScore(boardData)) {

      document.getElementById("demo").innerHTML = winningPlayer;
      endGame(cells);
      
      setTimeout(function() { alert("GAME OVER!"); }, 500);


    } else {
    
      player = player*-1;
      if (player == -1) {
        document.getElementById("demo").innerHTML = "Player 2 make your move";
      } else document.getElementById("demo").innerHTML = "Player 1 make your move";


    }

  
    

    
  } else alert("not a valid move!");


}


function endGame(){
  cells.forEach((cell)=>{

    cell.removeEventListener("click",cellClickHanlder);
  });  

}

}

newBoard();


function checkScore (boardData){

  let winner1;
  let winner2;
  let draw=true;
  
  
  if (boardData[0][0]+boardData[1][0]+boardData[2][0]==3
    ||boardData[0][1]+boardData[1][1]+boardData[2][1]==3
    ||boardData[0][2]+boardData[1][2]+boardData[2][2]==3
    ||boardData[0][0]+boardData[0][1]+boardData[0][2]==3
    ||boardData[1][0]+boardData[1][1]+boardData[1][2]==3
    ||boardData[2][0]+boardData[2][1]+boardData[2][2]==3
    ||boardData[0][0]+boardData[1][1]+boardData[2][2]==3
    ||boardData[2][0]+boardData[1][1]+boardData[0][2]==3 ){
    winner1 = true;
  } 

  if (winner1){

    winningPlayer = "player 1 wins!";
    console.log (winningPlayer);
    return true;
  }

  if (boardData[0][0]+boardData[1][0]+boardData[2][0]==-3
    ||boardData[0][1]+boardData[1][1]+boardData[2][1]==-3
    ||boardData[0][2]+boardData[1][2]+boardData[2][2]==-3
    ||boardData[0][0]+boardData[0][1]+boardData[0][2]==-3
    ||boardData[1][0]+boardData[1][1]+boardData[1][2]==-3
    ||boardData[2][0]+boardData[2][1]+boardData[2][2]==-3
    ||boardData[0][0]+boardData[1][1]+boardData[2][2]==-3
    ||boardData[2][0]+boardData[1][1]+boardData[0][2]==-3 ){
    winner2 = true;
  } 

  if (winner2){

    winningPlayer = "player 2 wins!";
    console.log (winningPlayer);
    return true;
  }


  for (let i=0; i<boardData.length; i++) {
    for (let j=0; j<boardData[i].length; j++){

      if (boardData[i][j] === 0){
        
        draw = false;
        break;
      } 
         
    }
    if (!draw) {
      break;
    }
 
  }

  if (draw){
    winningPlayer = "It's a draw!";
    console.log (winningPlayer);
    return true;

  }

}



