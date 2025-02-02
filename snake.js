const playBoard=document.querySelector(".play-board")
let foodX,foodY;
let snakeX=10,snakeY=15;
let snakeBody=[];
let gameOver=false;
let velocityX=0,velocityY=0;
const changeFoodPosition=()=>{
    foodX=Math.floor(Math.random()*30)+1;
    foodY=Math.floor(Math.random()*30)+1;
    
}

const changeDirection=(e)=>{
    if(e.key ==="ArrowUp"){
        velocityX=0;
        velocityY=-1;
        
    }else if (e.key==="ArrowDown"){
        velocityX=0;
        velocityY=1;
    }
    else if (e.key==="ArrowRight"){
        velocityX=1;
        velocityY=0;
    }
    else if (e.key==="ArrowLeft"){
        velocityX=-1;
        velocityY=0;
    }
    initGame();
}

const initGame=()=>{
    let htmlMarkup=`<div class="food" style="grid-area: ${foodY}/${foodX}"></div>`;
    if(gameOver){
       if(confirm("Game Over!!! Press OK to replay ...")){
        gameOver=false;
        location.reload(true);
       } 
       
       
    }

    if(snakeX==foodX && snakeY==foodY){
        changeFoodPosition();
        snakeBody.push([foodX,foodY]);
        console.log(snakeBody)

    }


    for(let i=snakeBody.length-1;i>0;i--){
        snakeBody[i]=snakeBody[i-1];
    }
    snakeBody[0]=[snakeX,snakeY];

    snakeX+=velocityX;
    snakeY+=velocityY;


    if(snakeX<0 || snakeX>30 || snakeY<0 || snakeY>30){
        gameOver=true;
    }

    for(let i=0;i<snakeBody.length;i++){
        htmlMarkup+=`<div class="head" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;

    }


    playBoard.innerHTML=htmlMarkup;
}
changeFoodPosition();
setInterval(initGame,325);
document.addEventListener("keydown",changeDirection);

