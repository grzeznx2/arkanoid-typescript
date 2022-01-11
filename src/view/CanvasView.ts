import { Ball } from '../sprites/Ball'
import { Brick } from '../sprites/Brick'
import { Paddle } from '../sprites/Paddle'

export class CanvasView {
  private canvas: HTMLCanvasElement
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
}
