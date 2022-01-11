import { Ball } from '../sprites/Ball'
import { Brick } from '../sprites/Brick'
import { Paddle } from '../sprites/Paddle'

export class CanvasView {
  canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D | null
  private scoreDisplay: HTMLObjectElement | null
  private start: HTMLObjectElement | null
  private info: HTMLObjectElement | null

  constructor(canvasId: string) {
    this.canvas = document.querySelector(canvasId) as HTMLCanvasElement
    this.context = this.canvas.getContext('2d')
    this.scoreDisplay = document.querySelector('#score')
    this.start = document.querySelector('#start')
    this.info = document.querySelector('#info')
  }

  clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  initStartButton(startFunction: (view: CanvasView) => void): void {
    this.start?.addEventListener('click', () => startFunction(this))
  }

  drawScore(score: number): void {
    if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString()
  }

  drawInfo(text: string): void {
    if (this.info) this.info.innerHTML = text
  }

  drawSprite(sprite: Brick): void {
    if (!sprite) return
    this.context?.drawImage(sprite.image, sprite.pos.x, sprite.pos.y, sprite.width, sprite.height)
  }

  drawBricks(bricks: Brick[]): void {
    bricks.forEach(brick => this.drawSprite(brick))
  }
}
