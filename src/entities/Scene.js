import Entity from "./Entity";

export default class Scene extends Entity {

  /**
   * Create new Scene
   * @param {Number} width screen width in px
   * @param {Number} height screen height in px
   * @param {String} color screen background color
   */
  constructor(width, height, color) {
    super([0, 0], [width, height], color, true)
  }
}