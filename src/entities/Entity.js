export default class Entity {

  /**
   * @param {Number[]} position [x, y]
   * @param {Number[]} size [width, height]
   * @param {String} color color
   * @param {Boolean} isContainer relative or absolute
  */
  constructor(position, size, color, isContainer) {
    this.element = document.createElement('div')
    this.element.style.position = isContainer ? 'relative' : 'absolute'
    this.element.style.left = position[0] + 'px'
    this.element.style.top = position[1] + 'px'
    this.element.style.width = size[0] + 'px'
    this.element.style.height = size[1] + 'px'
    this.element.style.backgroundColor = color
  }

  get x() {
    return this.element.offsetLeft
  }

  get y() {
    return this.element.offsetTop
  }

  get width() {
    return this.element.offsetWidth
  }

  get height() {
    return this.element.offsetHeight
  }

  get color() {
    return window.getComputedStyle(this.element).backgroundColor;
  }

  get isContainer() {
    return window.getComputedStyle(this.element).position === 'relative'
  }

  set x(value) {
    this.element.style.left = value + 'px'
  }

  set y(value) {
    this.element.style.top = value + 'px'
  }

  set width(value) {
    this.element.style.width = value + 'px'
  }

  set height(value) {
    this.element.style.height = value + 'px'
  }

  set color(value) {
    this.element.style.backgroundColor = value
  }

  set isContainer(value) {
    this.element.style.position = value ? 'relative' : 'absolute'
  }
}