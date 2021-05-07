/*
  Entry point
*/


window.addEventListener('load', () => {
  console.log('Game init')

  const gameElement = document.querySelector('#game')
  const statusElement = document.querySelector('#status')


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
    print(`x:${playerElement.offsetLeft} y:${playerElement.offsetTop}`)

    lastTime = t

    if (running) requestAnimationFrame(loop)
  }

  // export to global scope for debug
  window.start = start
  window.stop = stop


  start()
})
