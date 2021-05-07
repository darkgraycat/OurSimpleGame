/*
  Entry point
*/


window.addEventListener('load', () => {
  console.log('Game init')

  const gameElement = document.querySelector('#game')

  const sceneElement = document.createElement('div')
  sceneElement.style.position = 'relative'
  sceneElement.style.left = '0px'
  sceneElement.style.top = '0px'
  sceneElement.style.width = '2000px'
  sceneElement.style.height = '2000px'
  sceneElement.style.backgroundColor = '#444'

  const playerElement = document.createElement('div')
  playerElement.style.position = 'absolute'
  playerElement.style.left = '400px'
  playerElement.style.top = '200px'
  playerElement.style.width = '50px'
  playerElement.style.height = '50px'
  playerElement.style.backgroundColor = '#f88'

  gameElement.appendChild(sceneElement)
  sceneElement.appendChild(playerElement)

  const move = (x, y) => {
    playerElement.style.left = playerElement.offsetLeft + x + 'px'
    playerElement.style.top = playerElement.offsetTop + y + 'px'
  }

  window.addEventListener('keydown', e => {
    if (e.code == 'KeyW') {
      move(0, -10)
    } else if (e.code == 'KeyS') {
      move(0, 10)
    } else if (e.code == 'KeyA') {
      move(-10, 0)
    } else if (e.code == 'KeyD') {
      move(10, 0)
    }

  })



});