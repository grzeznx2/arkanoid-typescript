import { Brick } from './sprites/Brick'
import {
  BRICK_IMAGES,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_ENERGY,
  BRICK_PADDING,
  LEVEL,
  STAGE_COLS,
  STAGE_PADDING,
} from './setup'

export function createBricks(): Brick[] {
  return LEVEL.reduce((acc, cur, i) => {
    const row = Math.floor((i + 1) / STAGE_COLS)
    const col = i % STAGE_COLS

    const x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING)
    const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING)

    if (cur === 0) return [...acc]

    return [
      ...acc,
      new Brick(BRICK_WIDTH, BRICK_HEIGHT, { x, y }, BRICK_ENERGY[cur], BRICK_IMAGES[cur]),
    ]
  }, [] as Brick[])
}
