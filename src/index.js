/*
  Entry point
*/

import Entiny from './entities/Entity'

window.addEventListener('load', () => {
  console.log('Game init')

  const gameElement = document.querySelector('#game')
  const statusElement = document.querySelector('#status')


  const scene = new Entiny([0, 0], [2000, 2000], '#444', true)
  const player = new Entiny([400, 200], [50, 50], 'red')

  gameElement.appendChild(scene.element)
  scene.element.appendChild(player.element)

  const move = (x, y) => {
    player.x += x
    player.y += y
  }

  const print = (message) => {
    statusElement.innerHTML = message
  }

  const playerProps = {
    speed: {
      x: 0,
      y: 0
    }
  }

  const airResist = 0.95
  const speed = 0.5

  const playerUpdate = delta => {
    move(
      delta * playerProps.speed.x,
      delta * playerProps.speed.y
    )
    playerProps.speed.x *= airResist
    playerProps.speed.y *= airResist

    if (Math.abs(playerProps.speed.x) < 0.1) playerProps.speed.x = 0
    if (Math.abs(playerProps.speed.y) < 0.1) playerProps.speed.y = 0
  }

  window.addEventListener('keydown', e => {
    if (e.code == 'KeyW') {
      playerProps.speed.y = -speed
    } else if (e.code == 'KeyS') {
      playerProps.speed.y = speed
    } else if (e.code == 'KeyA') {
      playerProps.speed.x = -speed
    } else if (e.code == 'KeyD') {
      playerProps.speed.x = speed
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

    playerUpdate(dt)
    print(`x:${player.x} y:${player.y}`)

    lastTime = t

    if (running) requestAnimationFrame(loop)
  }

  // export to global scope for debug
  window.start = start
  window.stop = stop


  start()
})
