//IMPORTANT: Make sure to use Kaboom version 0.5.0 for this game by adding the correct script tag in the HTML file.

kaboom({
  global: true,
  width: 1920, // width of canvas
  height: 9000, // height of canvas
  // fullscreen: true,
  // scale: 1,
  debug: true,
  clearColor: [0, 0, 1, 1],
})

// Speeds
const MOVE_SPEED = 1200
const SLICER_SPEED = 100
const SKELETOR_SPEED = 60

// Window limits
const WINDOW_HEIGHT = window.innerHeight;
const WINDOW_WIDTH = window.innerWidth;

// console.log('%c window height','color:yellow',WINDOW_HEIGHT)
// console.log('%c window width','color:yellow',WINDOW_WIDTH)

// Game Logic
// loadRoot('https://i.imgur.com/')
// loadSprite('left-wall', 'HBxw7Uw.png')
// loadSprite('top-wall', 'xw8MjU0.png')
// loadSprite('bottom-wall', 'GlFwnCQ.png')
// loadSprite('right-wall', 'AwMtCdt.png')
// loadSprite('bottom-left-wall', 'Or7Orfd.png')
// loadSprite('bottom-right-wall', 'bOwTZIa.png')
// loadSprite('top-left-wall', 'ACVEa5r.png')
// loadSprite('top-right-wall', '3HcxM0U.jpg')
// loadSprite('top-door', 'oAGk5w7.png')
// loadSprite('fire-pot', 'HmH9JfK.png')
// loadSprite('left-door', 'WkgOdeO.png')
// loadSprite('lanterns', 'dxV3Qxo.png')
// loadSprite('slicer', 'myr3VE3.png')
// loadSprite('skeletor', 'LdHzUtC.png')
// loadSprite('kaboom', 'BhA4Dof.png')
// loadSprite('stairs', 'lrq7j3g.png')
// loadSprite('bg', 'ovRrL4m.png')
// loadSprite('bg-l-4', 'h7xbSWa.jpg') // [img]https://i.imgur.com/h7xbSWa.jpg[/img]
// loadSprite('dive-going-right', 'Oi4jmra.png') // [img]https://i.imgur.com/Oi4jmra.png[/img]
// loadSprite('dive-going-left', '9ws0EQK.png') // [img]https://i.imgur.com/9ws0EQK.png[/img]
// loadSprite('dive-going-down', 'XSGm2k0.png') // [img]https://i.imgur.com/XSGm2k0.png[/img]
// loadSprite('dive-going-up', 'VZMfPn6.png') // [img]https://i.imgur.com/VZMfPn6.png[/img]
// loadSprite('shark', 'A8YZA2r.png') // [img]https://i.imgur.com/A8YZA2r.png[/img]
// loadSprite('bot-turn-off', 'xxGt2Ce.png') // [img]https://i.imgur.com/xxGt2Ce.png[/img]
// loadSprite('bot-turn-on', 'Tjk1i96.png') // [img]https://i.imgur.com/Tjk1i96.png[/img]
// loadSprite('kraken-open-eye', 'OkPW89Z.png') // [img]https://i.imgur.com/OkPW89Z.png[/img]
// loadSprite('kraken-closed-eye', 'MPKanq6.png') // [img]https://i.imgur.com/MPKanq6.png[/img]
// loadSprite('bag', 'v5elL0k.png') // [img]https://i.imgur.com/v5elL0k.png[/img]

loadSprite('invisible-wall', './images/sprites/wall-transparent.png')
loadSprite('left-wall', './images/sprites/25 - rfDoaa1.png')
loadSprite('top-wall', './images/sprites/24 - QA257Bj.png')
loadSprite('bottom-wall', './images/sprites/24 - QA257Bj.png')
loadSprite('right-wall', './images/sprites/24 - QA257Bj.png')
loadSprite('right-wall', './images/sprites/26 - SmHhgUn.png')
loadSprite('bottom-left-wall', './images/sprites/26 - SmHhgUn.png')
loadSprite('bottom-right-wall', './images/sprites/26 - SmHhgUn.png')
loadSprite('top-left-wall', './images/sprites/26 - SmHhgUn.png')
loadSprite('top-right-wall', './images/sprites/26 - SmHhgUn.png')
loadSprite('top-door', './images/sprites/21 - U9nre4n.png')
loadSprite('fire-pot', './images/sprites/10 - wiSiY09.png')
loadSprite('left-door', './images/sprites/21 - U9nre4n.png')
loadSprite('lanterns', './images/sprites/10 - wiSiY09.png')
loadSprite('slicer', './images/sprites/18 - c6JFi5Z.png')
loadSprite('skeletor', './images/sprites/17 - Ei1VnX8.png')
// loadSprite('kaboom', './images/sprites/9 - o9WizfI.png')
loadSprite('stairs', './images/sprites/19 - VghkL08.png')
loadSprite('bg-l-4', './images/sprites/bg-level-4.png') // [img]https://i.imgur.com/h7xbSWa.jpg[/img]
loadSprite('dive-going-right', './images/sprites/dive-going-right.png') // [img]https://i.imgur.com/Oi4jmra.png[/img]
loadSprite('dive-going-left', './images/sprites/dive-going-left.png') // [img]https://i.imgur.com/9ws0EQK.png[/img]
loadSprite('dive-going-down', './images/sprites/dive-going-down.png') // [img]https://i.imgur.com/XSGm2k0.png[/img]
loadSprite('dive-going-up', './images/sprites/dive-going-up.png') // [img]https://i.imgur.com/VZMfPn6.png[/img]
loadSprite('shark', './images/sprites/shark.png') // [img]https://i.imgur.com/A8YZA2r.png[/img]
loadSprite('bot-turn-off', './images/sprites/bot-turn-off.png') // [img]https://i.imgur.com/xxGt2Ce.png[/img]
loadSprite('bot-turn-on', './images/sprites/bot-turn-on.png') // [img]https://i.imgur.com/Tjk1i96.png[/img]
loadSprite('kraken-open-eye', './images/sprites/kraken-open-eye.png') // 
loadSprite('kraken-closed-eye', './images/sprites/kraken-closed-eye.png') //
loadSprite('kaboom', './images/sprites/bag.png') //



scene('game', ({ level, score }) => {
  // layers(['bg', 'obj', 'ui'], 'obj')
  layers(['bg-l-4', 'obj', 'ui'], 'obj')

  // TODO: VERIFY spaces some bigs happen
  const maps = [
    [
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i  aaa                   i             i',
      'i     a                  i             i',
      'i aaa                    i             i',
      'ia   aa                  i             i',
      'ia    aa                 i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i       |     i',
      'i                        i             i',
      'i                        i    |    |   i',
      'i    /                   i             i',
      'i                        i        |    i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i      *                 i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i      *                 i             i',
      'i    (                   i             i',
      'i%                       i             i',
      'i    (                   i             i',
      'i   *                    i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                     #  i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'i                        i             i',
      'ixdd)^^^^^d)ddz          i §           i',
    ],
    [
      'yccc^ccccw',
      'a        b',
      ')        )',
      'a        b',
      'a        b',
      'a    $   b',
      ')   }    )',
      'a        b',
      'xddddddddz',
    ],
  ]

  const levelCfg = {
    width: 48,
    height: 48,
    i: [sprite('invisible-wall'), solid(), 'wall'],
    a: [sprite('left-wall'), solid(), 'wall'],
    b: [sprite('right-wall'), solid(), 'wall'],
    c: [sprite('top-wall'), solid(), 'wall'],
    d: [sprite('bottom-wall'), solid(), 'wall'],
    w: [sprite('top-right-wall'), solid(), 'wall'],
    x: [sprite('bottom-left-wall'), solid(), 'wall'],
    y: [sprite('top-left-wall'), solid(), 'wall'],
    z: [sprite('bottom-right-wall'), solid(), 'wall'],
    '%': [sprite('left-door'), solid(), 'door'],
    '^': [sprite('top-door'), 'next-level'],
    $: [sprite('stairs'), 'next-level'],
    '*': [sprite('slicer'), 'slicer', { dir: -1 }, 'dangerous'],
    '}': [sprite('skeletor'), 'dangerous', 'skeletor', { dir: -1, timer: 0 }],
    ')': [sprite('lanterns'), solid()],
    '(': [sprite('fire-pot'), solid()],
    '#': [sprite('shark'), 'dangerous', 'shark', { dir: -1, timer: 0 }],
    '|': [sprite('bot-turn-on'), solid(), 'bot-on', { dir: -0.2, timer: 0 }],
    '/': [sprite('bot-turn-off'), solid(), 'bot-off', { dir: -1, timer: 0 }],
    '§': [sprite('kraken-open-eye'), solid(), 'kraken'],
  }
  addLevel(maps[level], levelCfg)

  // add([sprite('bg'), layer('bg')])
  add([sprite('bg-l-4'), layer('bg-l-4')])

  const scoreLabel = add([
    text('0'),
    pos(800, 450),
    layer('ui'),
    {
      value: score,
    },
    scale(2),
  ])

  add([text('level ' + parseInt(level + 1)), pos(800, 365), scale(2)])

  const player = add([
    sprite('dive-going-right'),
    pos(100, 300),
    {
      // right by default
      dir: vec2(1, 0),
    },
  ])

  player.action(() => {
    // TODO: handle this
    // camPos(player.pos);
    player.resolve()
  })

  player.overlaps('next-level', () => {
    go('game', {
      level: (level + 1) % maps.length,
      score: scoreLabel.value,
    })
  })

  keyDown('left', () => {
    player.changeSprite('dive-going-left')
    player.move(-MOVE_SPEED, 0)
    player.dir = vec2(-1, 0)
  })

  keyDown('right', () => {
    player.changeSprite('dive-going-right')
    player.move(MOVE_SPEED, 0)
    player.dir = vec2(1, 0)
  })

  keyDown('up', () => {
    console.log('%c player','color:yellow',player.pos)
    player.changeSprite('dive-going-up')
    player.move(0, -MOVE_SPEED)
    player.dir = vec2(0, -1)
    // TODO: modify
    // if (player.pos.y >= WINDOW_HEIGHT) {
    //   console.log('%c here up','color:green')
    //   window.scrollTo(window.scrollX, window.scrollY + 20);
    // }
  })

  keyDown('down', () => {
    // console.log('%c player','color:pink',player.pos.y)
    player.changeSprite('dive-going-down')
    player.move(0, MOVE_SPEED)
    player.dir = vec2(0, 1)
    // TODO: modify
    if (player.pos.y >= WINDOW_HEIGHT) {
      console.log('%c here down','color:green')
      // window.scrollTo(window.scrollX, window.scrollY + 20);
    }
  })

  function spawnKaboom(p) {
    // TODO: see correct position
    const bagPos = vec2(p.x + 100*(Math.abs(player.dir.x)),p.y + 100*(Math.abs(player.dir.y)))
    const obj = add([sprite('kaboom'), pos(bagPos), 'kaboom'])
    wait(1, () => {
      destroy(obj)
    })
  }

  keyPress('space', () => {
    spawnKaboom(player.pos.add(player.dir.scale(48)))
  })

  player.collides('door', (d) => {
    destroy(d)
  })

  player.collides('bot-off', (d) => {
    // TODO: See cam gesture for something more subtle
    camShake(2)
    add([
      sprite('bot-turn-on'),
      pos(d.pos),
      solid(),
      "bot-on",
      { dir: -0.2, timer: 0 }
    ]);
    destroy(d)
    scoreLabel.value++
    scoreLabel.text = scoreLabel.value
  })

  collides('kaboom', 'skeletor', (k,s) => {
    camShake(4)
    wait(1, () => {
      destroy(k)
    })
    destroy(s)
    scoreLabel.value++
    scoreLabel.text = scoreLabel.value
  })

  action('slicer', (s) => {
    s.move(s.dir * SLICER_SPEED, 0)
  })

  collides('slicer', 'wall', (s) => {
    s.dir = -s.dir
  })

  action('shark', (s) => {
    s.move(0, s.dir * SKELETOR_SPEED)
    s.timer -= dt()
    if (s.timer <= 0) {
      s.dir = -s.dir
      s.timer = rand(5)
    }
  })

  action('bot-on', (s) => {
    s.move(0, s.dir * SKELETOR_SPEED)
    s.timer -= dt()
    if (s.timer <= 0) {
      s.dir = -s.dir
      s.timer = rand(5)
    }
  })

  action('skeletor', (s) => {
    s.move(0, s.dir * SKELETOR_SPEED)
    s.timer -= dt()
    if (s.timer <= 0) {
      s.dir = -s.dir
      s.timer = rand(5)
    }
  })

  collides('skeletor', 'wall', (s) => {
    s.dir = -s.dir
  })

  player.overlaps('dangerous', () => {
    go('lose', { score: scoreLabel.value })
  })
})

scene('lose', ({ score }) => {
  add([text(score, 32), origin('center'), pos(width() / 2, height() / 2)])
})

start('game', { level: 0, score: 0 })