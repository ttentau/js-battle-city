
class Game {
    constructor() {
        this.myTank = $('#my_tank')
        this.body = $('body')
        this.bg = $('.bg')
        this.container = $('.container')
        this.leftbar = $('.leftbar')
        this.topbar = $('.topbar')
        this.rigthbar = $('.rigthbar')
        this.bottombar = $('.bottombar')
        this.game = $('.game')

        this.height = this.body.height()
        this.width = this.body.width()
        this.tankWidth = this.height / 14
        this.gameWidth = this.height - this.tankWidth
        this.tank = null
    }

    init() {
        this.calculateHeightAndWidth()

        //初始化tank
        this.tank = new Tank(this.myTank, 6, this.gameWidth)

        this.addEventListener()

        //每秒生成一个tank，取20个
        Rx.Observable.interval(1000).take(20).subscribe(x => {
            let div = $('<div class="my-tank"></div>')
            div.css({'width': this.tankWidth + 'px', 'height': this.tankWidth + 'px'})
            let direction = Math.floor(Math.random() * (5 - 1)) + 1
            let heightDistance = Math.floor(Math.random() * (14 - 1))
            let widthDistance = Math.floor(Math.random() * (14 - 1))
            switch (direction) {
                case 1:
                    div.css({'top': heightDistance * this.tankWidth + 'px'})
                    div.css({'left': widthDistance * this.tankWidth + 'px'})
                    break
                case 2:
                    div.css({'top': heightDistance * this.tankWidth + 'px'})
                    div.css({'left': widthDistance * this.tankWidth + 'px'})
                    break
                case 3:
                    div.css({'top': heightDistance * this.tankWidth + 'px'})
                    div.css({'left': widthDistance * this.tankWidth + 'px'})
                    break
                case 4:
                    div.css({'top': heightDistance * this.tankWidth + 'px'})
                    div.css({'left': widthDistance * this.tankWidth + 'px'})
                    break
            }

            this.game.append(div)
        })
    }

    //添加键盘监听事件
    addEventListener() {
        let keydown = Rx.Observable.fromEvent(document.querySelector('body'), 'keydown')
        //如果是方向键就不限制时间
        let dec = keydown.filter(e => e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40)
        //如果是发射键就限制时间
        let space = keydown.filter(e => e.keyCode == 32).throttleTime(500)
        dec.subscribe(e => {
            switch (e.keyCode) {
                //左
                case 37:
                    this.tank.go(2)
                    break
                //上
                case 38:
                    this.tank.go(1)
                    break
                //右
                case 39:
                    this.tank.go(0)
                    break
                //下
                case 40:
                    this.tank.go(3)
                    break
            }
        })
        space.subscribe(e => this.tank.shoot(this.game))


        Rx.Observable.fromEvent(document.querySelector('body'), 'keyup').subscribe(() => this.tank.stop())
    }

    //计算各元素的宽和高
    calculateHeightAndWidth() {
        //计算game框的长和宽
        this.game.css({'width': this.height - this.tankWidth + 'px', 'height': this.height - this.tankWidth + 'px'})
        //计算container内各个边框的长和宽
        this.leftbar.css({'width': this.tankWidth + 'px', 'height': this.height - this.tankWidth + 'px'})
        this.topbar.css({'width': this.height + this.tankWidth * 2 + 'px', 'height': this.tankWidth * 0.6 + 'px'})
        this.rigthbar.css({
            'width': this.tankWidth + this.tankWidth + 'px',
            'height': this.height - this.tankWidth + 'px'
        })
        this.bottombar.css({'width': this.height + this.tankWidth * 2 + 'px', 'height': this.tankWidth * 0.4 + 'px'})

        this.container.css({'width': this.height + this.tankWidth * 2 + 'px', 'height': this.height + 'px'})
        //设置坦克长宽
        this.myTank.css({'width': this.tankWidth + 'px', 'height': this.tankWidth + 'px'})
        this.myTank.css({'left': this.tankWidth * 5 + 'px'})
        this.myTank.css({'top': this.tankWidth * 12 + 'px'})
    }
}

new Game().init()
