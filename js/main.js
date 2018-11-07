// import Rx from 'rxjs/Rx';

let myTank = $('#my_tank')
let body = $('body')
let bg = $('.bg')
let container = $('.container')
let leftbar = $('.leftbar')
let topbar = $('.topbar')
let rigthbar = $('.rigthbar')
let bottombar = $('.bottombar')
let game = $('.game')

let height = body.height()
let width = body.width()
let tankWidth = height / 14
let gameWidth = height - tankWidth

calculateHeightAndWidth()


// const evenNumbers = Rx.Observable.create(function (observer) {
//     let value = 0
//     const interval = setInterval(() => {
//         if (value < 21) {
//             observer.next(value)
//         }
//         value++
//     }, 300)
//
//     return () => clearInterval(interval)
// })
// 输出: 0...2...4...6...8

// evenNumbers.subscribe(val => {
//     let div = $('<div class="my-tank"></div>')
//     let direction = Math.floor(Math.random() * (5 - 1)) + 1
//     let heightDistance = Math.floor(Math.random() * (10 - 1)) + 1
//     let widthDistance = Math.floor(Math.random() * (width / tankWidth - 1)) + 1
//     switch (direction) {
//         case 1:
//             div.css({'top': heightDistance * tankWidth + 'px'})
//             div.css({'left': widthDistance * tankWidth + 'px'})
//             break
//         case 2:
//             div.css({'top': heightDistance * tankWidth + 'px'})
//             div.css({'left': widthDistance * tankWidth + 'px'})
//             break
//         case 3:
//             div.css({'top': heightDistance * tankWidth + 'px'})
//             div.css({'left': widthDistance * tankWidth + 'px'})
//             break
//         case 4:
//             div.css({'top': heightDistance * tankWidth + 'px'})
//             div.css({'left': widthDistance * tankWidth + 'px'})
//             break
//     }
//
//     container.append(div)
// });

let tank = new Tank(myTank, 6, gameWidth)
$('body').on('keyup', function (e) {
    tank.stop()
})
$('body').on('keydown', function (e) {
    let keyCode = e.originalEvent.keyCode
    console.log(keyCode)
    switch (keyCode) {
        //左
        case 37:
            tank.go(2)
            break
        //上
        case 38:
            tank.go(1)
            break
        //右
        case 39:
            tank.go(0)
            break
        //下
        case 40:
            tank.go(3)
            break
        case 32:
            tank.shoot(game)
            break
    }
})

function calculateHeightAndWidth() {
    //计算game框的长和宽
    game.css({'width': height - tankWidth + 'px', 'height': height - tankWidth + 'px'})
    //计算container内各个边框的长和宽
    leftbar.css({'width': tankWidth + 'px', 'height': height - tankWidth + 'px'})
    topbar.css({'width': height + tankWidth * 2 + 'px', 'height': tankWidth * 0.6 + 'px'})
    rigthbar.css({'width': tankWidth + tankWidth + 'px', 'height': height - tankWidth + 'px'})
    bottombar.css({'width': height + tankWidth * 2 + 'px', 'height': tankWidth * 0.4 + 'px'})

    container.css({'width': height + tankWidth * 2 + 'px', 'height': height + 'px'})
    //设置坦克长宽
    myTank.css({'width': tankWidth + 'px', 'height': tankWidth + 'px'})
    myTank.css({'left': tankWidth * 5 + 'px'})
    myTank.css({'top': tankWidth * 12 + 'px'})
}




