let myTank = $('#my_tank')
let body = $('body')
let bg = $('.bg')
let container = $('.container')

let height = body.height()
let width = body.width()
let step = 0
calculateHeightAndWidth()
console.log('step', step)
console.log('width', width)
myTank.css({'width': step + 'px', 'height': step + 'px'})


// container.append('<div class="my-tank"></div>')

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        let div = $('<div class="my-tank"></div>')
        let direction = Math.floor(Math.random() * (5 - 1)) + 1
        let heightDistance = Math.floor(Math.random() * (10 - 1)) + 1
        let widthDistance = Math.floor(Math.random() * (width / step - 1)) + 1
        switch (direction) {
            case 1:
                div.css({'top': heightDistance * step + 'px'})
                div.css({'left': widthDistance * step + 'px'})
                break
            case 2:
                div.css({'top': heightDistance * step + 'px'})
                div.css({'left': widthDistance * step + 'px'})
                break
            case 3:
                div.css({'top': heightDistance * step + 'px'})
                div.css({'left': widthDistance * step + 'px'})
                break
            case 4:
                div.css({'top': heightDistance * step + 'px'})
                div.css({'left': widthDistance * step + 'px'})
                break
        }

        container.append(div)
    }, 1000)

}

$('body').on('keydown', function (e) {
    let keyCode = e.originalEvent.keyCode
    // console.log(keyCode)
    let currentTop = myTank.position().top
    let currentLeft = myTank.position().left

    switch (keyCode) {
        //上
        case 38:
            if (currentTop > 0) {
                let next = currentTop - step
                myTank.css({'top': next + 'px'})
            }
            break
        //下
        case 40:
            if (currentTop + step + step < height) {
                let next = currentTop + step
                myTank.css({'top': next + 'px'})
            }
            break
        //左
        case 37:
            if (currentLeft > 0) {
                let next = currentLeft - step
                myTank.css({'left': next + 'px'})
            }
            break
        //右
        case 39:

            console.log(step)
            console.log(currentLeft)
            console.log(currentLeft + step)
            console.log(width)

            if (currentLeft + step + step < width) {
                let next = currentLeft + step
                myTank.css({'left': next + 'px'})
            }
            break
    }
})

function calculateHeightAndWidth() {
    step = height / 10
    let temp = width % step
    width = width - temp
    bg.css({'width': width + 'px', 'height': height + 'px'})
    container.css({'width': width + 'px', 'height': height + 'px'})
}


