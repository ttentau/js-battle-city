class Tank {
    constructor(tank, step, gameWidth) {
        this.tank = tank
        this.tankWidth = tank.width()
        this.step = step
        this.gameWidth = gameWidth
        this.direction = 0
        this.timer = null
        this.bulletCount = 0
    }

    go(direction) {
        this.direction = direction
        if (!this.timer) {
            this.timer = setInterval(() => {
                let currentTop = myTank.position().top
                let currentLeft = myTank.position().left
                switch (this.direction) {
                    case 0:
                        //右
                        this.tank.css({'transform': 'rotate(90deg)'})
                        if (currentLeft + this.tankWidth < this.gameWidth) {
                            let next = currentLeft + this.step
                            this.tank.css({'left': next + 'px'})
                        }
                        break
                    case 1:
                        //上？
                        this.tank.css({'transform': 'rotate(0deg)'})
                        if (currentTop > 0) {
                            let next = currentTop - this.step
                            this.tank.css({'top': next + 'px'})
                        }
                        break
                    case 2:
                        //左
                        this.tank.css({'transform': 'rotate(-90deg)'})
                        if (currentLeft > 0) {
                            let next = currentLeft - this.step
                            this.tank.css({'left': next + 'px'})
                        }
                        break
                    case 3:
                        this.tank.css({'transform': 'rotate(180deg)'})
                        if (currentTop + this.tankWidth < this.gameWidth) {
                            let next = currentTop + this.step
                            this.tank.css({'top': next + 'px'})
                        }

                        break
                }
            }, 10)
        }
    }

    shoot(game) {
        let currentId = "my_bullet" + this.bulletCount++
        let tempDirection = this.direction
        let bullet = $(`<div class="my-bullet" id="${currentId}"></div>`)
        game.append(bullet)
        let bullertTop = this.tankWidth / 2 - bullet.height() / 2
        let bullertLeft = this.tankWidth / 2 - bullet.width() / 2
        bullet.css({'top': bullertTop + this.tank.position().top + 'px'})
        bullet.css({'left': bullertTop + this.tank.position().left + 'px'})
        let interval = setInterval(() => {
            let currentTop = bullet.position().top
            let currentLeft = bullet.position().left
            switch (tempDirection) {
                case 0:
                    //右
                    if (currentLeft < this.gameWidth) {
                        let next = currentLeft + 10
                        console.log(next)
                        bullet.css({'left': next + 'px'})
                    }
                    else {
                        bullet.remove()
                        clearInterval(interval)
                    }
                    break
                case 1:
                    //上
                    if (currentTop > 0) {
                        let next = currentTop - 10
                        console.log(next)
                        bullet.css({'top': next + 'px'})
                    } else {
                        bullet.remove()
                        clearInterval(interval)
                    }
                    break
                case 2:
                    //左
                    if (currentLeft > 0) {
                        let next = currentLeft - 10
                        console.log(next)
                        bullet.css({'left': next + 'px'})
                    } else {
                        bullet.remove()
                        clearInterval(interval)
                    }
                    break
                case 3:
                    //下
                    if (currentTop < this.gameWidth) {
                        let next = currentTop + 10
                        console.log(next)
                        bullet.css({'top': next + 'px'})
                    } else {
                        bullet.remove()
                        clearInterval(interval)
                    }
                    break
            }
        }, 100)
    }

    stop() {
        clearInterval(this.timer)
        this.timer = null
    }

    $(v) {
        return jQuery(v)
    }

}
