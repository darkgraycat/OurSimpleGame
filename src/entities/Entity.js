export default class Entity {

  /**
   * @param {Number[]} position [x, y]
   * @param {Number[]} size [width, height]
   * @param {String} color color
   * @param {Boolean} isContainer relative or absolute
  */
  constructor(position, size, color, isContainer = false) {
    this._element = document.createElement('div')
    this.x = position[0]
    this.y = position[1]
    this.width = size[0]
    this.height = size[1]
    this.color = color
    this.isContainer = isContainer
  }

  get element() {
    return this._element
  }

  get x() {
    return this._element.offsetLeft
  }

  get y() {
    return this._element.offsetTop
  }

  get width() {
    return this._element.offsetWidth
  }

  get height() {
    return this._element.offsetHeight
  }

  get color() {
    return window.getComputedStyle(this._element).backgroundColor;
  }

  get isContainer() {
    return window.getComputedStyle(this._element).position === 'relative'
  }

  set x(value) {
    this._element.style.left = value + 'px'
  }

  set y(value) {
    this._element.style.top = value + 'px'
  }

  set width(value) {
    this._element.style.width = value + 'px'
  }

  set height(value) {
    this._element.style.height = value + 'px'
  }

  set color(value) {
    this._element.style.backgroundColor = value
  }

  set isContainer(value) {
    this._element.style.position = value ? 'relative' : 'absolute'
  }
}