import * as snake from '/snake.js';
import * as food from '/food.js';
import { isSnakeOverLine} from '/grid.js';
let lastRender = 0;
let gameBox = document.querySelector('#gameBox');
let gameOver = false;

function loop(currentTime)
{
    if(gameOver)
    {
        // alert('you have lost');
        // window.location = '/';
        return;

    }
    window.requestAnimationFrame(loop);
    const secondsSinceLastRender = (currentTime - lastRender)/1000;
    if(secondsSinceLastRender < 1/snake.SNAKE_SPEED)
    {
        return;
    }
    lastRender = currentTime;

    update();
    draw();
    
}
window.requestAnimationFrame(loop);


function update()
{  
    snake.updateSnake();  
    food.updateFood();
    checkDeath();
}

function draw()
{
    gameBox.innerHTML = '';
    snake.drawSnake();
    food.drawFood();
}
function checkDeath()
{
    gameOver = isSnakeOverLine() || snake.snakeIntersection();
    console.log(isSnakeOverLine());
    console.log(snake.snakeIntersection());
    console.log(gameOver);
}
