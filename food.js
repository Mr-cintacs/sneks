import * as snake from '/snake.js';
import {getRandomFoodPosition} from '/grid.js';
export { updateFood, drawFood };

let gameBox = document.getElementById('gameBox');
const EXAPANSION_RATE = 1;
let food = { x: 4, y: 9};

function updateFood() 
{
    if(snake.onSnake(food))
    {
        snake.expandSnake(EXAPANSION_RATE);
        console.log('entered');
        food = getRandomFoodPosition();
    }
}
function drawFood() {

    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.id = 'food';
    gameBox.append(foodElement);

}
