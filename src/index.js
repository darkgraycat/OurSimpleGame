/*
  Entry point
*/

import Scene from './entities/Scene'
import Player from './entities/Player'


window.addEventListener('load', () => {
  console.log('Game init')

  const gameElement = document.querySelector('#game')
  const statusElement = document.querySelector('#status')

  const scene = new Scene(2000, 2000, '#444')
  const player = new Player(400, 200)

  gameElement.appendChild(scene.element)
  scene.element.appendChild(player.element)

  const print = (message) => {
    statusElement.innerHTML = message
  }

  window.addEventListener('keydown', e => {
    if (e.code == 'KeyW') {
      player.move(null, -1)
    } else if (e.code == 'KeyS') {
      player.move(null, 1)
    } else if (e.code == 'KeyA') {
      player.move(-1, null)
    } else if (e.code == 'KeyD') {
      player.move(1, null)
    }
  })

  let running = false
  let lastTime = performance.now()
  const start = () => {
    console.warn('game started')
    running = true
    loop()
  }
  const stop = () => {
    console.warn('game stopped')
    running = false
  }

  const loop = t => {
    const dt = t - lastTime

    player.update(dt)
    print(`x:${player.x} y:${player.y}`)

    lastTime = t

    if (running) requestAnimationFrame(loop)
  }

  // export to global scope for debug
  window.start = start
  window.stop = stop


  start()
})
