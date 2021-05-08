import DynamicEntity from "./DynamicEntity";

export default class Player extends DynamicEntity {
  constructor(x, y) {
    super(x, y, 50, 50, '#f44')
  }
}