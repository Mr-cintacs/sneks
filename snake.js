import { inputDirection } from '/input.js';
export { SNAKE_SPEED, snakeBody, updateSnake, drawSnake, onSnake, expandSnake, snakeIntersection }

const SNAKE_SPEED = 5;
let gameBox = document.getElementById('gameBox');
let snakeBody = [
    { x: 10, y: 11 }
];
let newSegments = 0;

function updateSnake(){
    addSegments();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

function drawSnake() {
   
    let count = 0;
    snakeBody.forEach(segment => {
        let snakeElement = document.createElement('div');
        snakeElement.classList.remove('snakeHead');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        //snakeElement.innerHTML = "<p>" + segment.x + "</p>";
        // console.log('the value of segment.x =' + segment.x);
        // console.log('the value of snakeBody[0] =' + snakeBody[0].x);
        gameBox.append(snakeElement);
        if(count ===0)
        {
            snakeElement.classList.add('snakeHead');
        }
        count++;

    });
}

function onSnake(position, ignoreHead = false) {
    return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return comparePosition(segment, position);
})
 }

function comparePosition(pos1, pos2)
{
    return pos1.x===pos2.x && pos1.y===pos2.y ;
}
function expandSnake(rate)
{
    newSegments += rate;
}
function addSegments()
{
    for(let i=0; i < newSegments; i++)
    {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]});
    }
    newSegments = 0;
}
function snakeIntersection() {
    return onSnake(snakeBody[0], true);
}