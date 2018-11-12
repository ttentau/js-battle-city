class Tank {
    constructor(tank, step, gameWidth) {
        this.tank = tank
        this.tankWidth = tank.width()
        this.step = step
        this.gameWidth = gameWidth
        this.direction = 1
        this.timer = null



        this.bulletCount = 0
    }

    go(direction) {
        this.direction = direction
        if (!this.timer) {
            this.timer = setInterval(() => {
                let currentTop = this.tank.position().top
                let currentLeft = this.tank.position().left
                // console.log('currentTop', currentTop)
                console.log('currentLeft', currentLeft)

                let left0 = currentLeft / this.tankWidth
                let left1 = (currentLeft + this.tankWidth) / this.tankWidth
                // console.log('left0', left0)
                // console.log('left1', left1)
                // if (left1 - left0 < 0.3) {
                //     console.log('---')
                // }
                let leftStartPoint = Math.floor(currentLeft / this.tankWidth)
                let leftEndPoint = Math.floor(left1)
                let topPoint = Math.ceil(currentTop / this.tankWidth)


                // console.log('leftEndPoint', leftEndPoint)
                // console.log('topPoint', topPoint)

                switch (this.direction) {
                    case 0:
                        //右
                        this.tank.css({'transform': 'rotate(90deg)'})
                        // let nextPoint = mapData[topPoint][leftStartPoint + 1]
                        // console.log('nextPoint---->', nextPoint)
                        // if (nextPoint != -1) break
                        if (currentLeft + this.tankWidth < this.gameWidth) {
                            let next = currentLeft + this.step
                            this.tank.css({'left': next + 'px'})
                        } else {
                            // currentLeft = this.gameWidth - this.tankWidth
                            // this.tank.css({'left': this.gameWidth - this.tankWidth + 'px'})
                        }
                        break
                    case 1:
                        //上？
                        this.tank.css({'transform': 'rotate(0deg)'})
                        console.log('leftStartPoint', leftStartPoint)

                        let topThingOneStart = leftStartPoint * this.tankWidth
                        let topThingOneEnd = leftStartPoint * this.tankWidth + this.tankWidth
                        console.log('topThingOneStart', topThingOneStart)
                        console.log('topThingOneEnd', topThingOneEnd)

                        // let topThingStart = leftEndPoint * this.tankWidth
                        // console.log('topThingStart', topThingStart)

                        let nextOnePoint = mapData[topPoint - 2][leftStartPoint]
                        let nextTwoPoint = mapData[topPoint - 2][leftStartPoint + 1]

                        if (nextOnePoint == -1) {
                            if (!currentLeft + 5 > topThingOneEnd) {
                                break
                            }
                        }
                        if (nextTwoPoint == -1) {
                            if (!currentLeft > topThingOneStart + 5) {
                                break
                            }
                        }
                        if (currentTop > 0) {
                            let next = currentTop - this.step
                            this.tank.css({'top': next + 'px'})
                        } else {
                            this.tank.css({'top': 0 + 'px'})
                        }
                        break
                    case 2:
                        //左
                        this.tank.css({'transform': 'rotate(-90deg)'})
                        if (currentLeft > 0) {
                            let next = currentLeft - this.step
                            this.tank.css({'left': next + 'px'})
                        } else {


                            this.tank.css({'left': 0 + 'px'})
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
            }, 30)
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
                        // console.log(next)
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
                        // console.log(next)
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
                        // console.log(next)
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
                        // console.log(next)
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


}
