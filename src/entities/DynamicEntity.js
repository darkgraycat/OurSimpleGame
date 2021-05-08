import { AIR_RESISTANCE } from "../constants";
import Entity from "./Entity";

export default class DynamicEntity extends Entity {
  /**
   * 
   * @param {Number} x
   * @param {Number} y 
   * @param {Number} width 
   * @param {Number} height 
   * @param {String} color 
   */
  constructor(x, y, width, height, color) {
    super([x, y], [width, height], color)
    this.speed = { x: 0, y: 0 }
  }

  update(delta) {
    this.x += this.speed.x * delta
    this.y += this.speed.y * delta
    this.speed.x *= AIR_RESISTANCE
    this.speed.y *= AIR_RESISTANCE
    if (Math.abs(this.speed.x) < 0.01) {
      this.speed.x = 0
    }
    if (Math.abs(this.speed.y) < 0.01) {
      this.speed.y = 0
    }
  }

  move(x, y) {
    x ? this.speed.x = x : null
    y ? this.speed.y = y : null
  }
}