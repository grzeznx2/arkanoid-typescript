import { CanvasView } from './view/CanvasView'
import { Ball } from './sprites/Ball'
import { Brick } from './sprites/Brick'
import { Paddle } from './sprites/Paddle'
import BALL_IMAGE from './images/ball.png'
import BRICK_IMAGE from './images/brick.png'
import PADDLE_IMAGE from './images/paddle.png'
import {
  BALL_SIZE,
  BALL_SPEED,
  BALL_STARTX,
  BALL_STARTY,
  PADDLE_SPEED,
  PADDLE_HEIGHT,
  PADDLE_WIDTH,
  PADDLE_STARTX,
} from './setup'
import { createBricks } from './helpers'

let gameOver = false
let score = 0

function setGameOver(view: CanvasView): void {
  view.drawInfo('Game Over!')
  gameOver = false
}

function setGameWon(view: CanvasView): void {
  view.drawInfo('You Won!')
  gameOver = false
}

function gameLoop(view: CanvasView, bricks: Brick[]): void {
  view.clear()
  view.drawBricks(bricks)

  requestAnimationFrame(() => gameLoop(view, bricks))
}

function startGame(view: CanvasView): void {
  score = 0
  view.drawInfo('')
  view.drawScore(score)

  const bricks = createBricks()

  gameLoop(view, bricks)
}

const view = new CanvasView('#playField')
view.initStartButton(startGame)
