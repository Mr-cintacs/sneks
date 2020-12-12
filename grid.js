import * as snake from '/snake.js';
export { getRandomFoodPosition, isSnakeOverLine, GRID_SIZE};

const GRID_SIZE = 40;

function getRandomFoodPosition()
{
    let newFoodPosition;
    while(newFoodPosition == null || snake.onSnake(newFoodPosition))
    {
        newFoodPosition = { 
                            x:Math.floor(Math.random() * GRID_SIZE) + 1,
                            y:Math.floor(Math.random() * GRID_SIZE) + 1
                        };
    }
    return newFoodPosition;
}

function isSnakeOverLine()
{
    return(snake.snakeBody[0].x <1 || snake.snakeBody[0].x > GRID_SIZE ||
                 snake.snakeBody[0].y < 1 || snake.snakeBody[0].y > GRID_SIZE );
}