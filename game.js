class FirstFloor extends AdventureScene {
    constructor() {
        super("firstfloor", "First Floor");
    }

    preload() {
        this.load.image('door-closed', 'assets/door-closed.png');
        this.load.image('door-open', 'assets/door-open.png');
        this.load.image('chest', 'assets/chest.png');
    }

    onEnter() {
        let chest = this.add.sprite(725, 800, 'chest')
            .setScale(0.5)

        let door1closed = this.add.sprite(425, 550, 'door-closed')
            .setScale(0.5)

        let door1open = this.add.sprite(400, 560, 'door-open')
            .setScale(0.5)
            .setVisible(false)

        let door2closed = this.add.sprite(1025, 550, 'door-closed')
            .setScale(0.5)

        let door2open = this.add.sprite(1000, 560, 'door-open')
            .setScale(0.5)
            .setVisible(false)

        let door1 = this.add.text(this.w * 0.115, this.w * 0.13, 
            "         \n         \n         \n         \n         \n         \n" + 
            "         \n         \n         \n         \n         \n         \n" +
            "         \n         \n          ")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                door1open.setVisible(true)
                door1closed.setVisible(false)
            })

            .on('pointerout', () => {
                door1closed.setVisible(true)
                door1open.setVisible(false)
            })

            .on('pointerdown', () => {
                this.showMessage("*creak*");
                this.gotoScene('secondfloor');
            })

        let door2 = this.add.text(this.w * 0.48, this.w * 0.13, 
            "         \n         \n         \n         \n         \n         \n" + 
            "         \n         \n         \n         \n         \n         \n" +
            "         \n         \n          ")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                door2open.setVisible(true)
                door2closed.setVisible(false)
            })

            .on('pointerout', () => {
                door2closed.setVisible(true)
                door2open.setVisible(false)
            })

            .on('pointerdown', () => {
                this.showMessage("*creak*");
                this.gotoScene('basement');
            })

        let chestinteractive = this.add.text(670, 750, 
            '           \n           \n           \n           \n           ')
            .setInteractive()
            .on('pointerover', () => this.showMessage('A chest, it could have \
            something useful inside'))
            .on('pointerdown', () => {
                if (!this.hasItem('Silver key')) {
                    this.showMessage('Got a key!')
                    this.gainItem('Silver key')
                    this.tweens.add({
                        targets: chest,
                        x: '+=' + this.s,
                        repeat: 1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        duration: 100
                    });
                }
                else {
                    this.showMessage('Already looted this chest')
                }
            })
    }
}

class Basement extends AdventureScene {
    constructor() {
        super('basement', 'Basement')
    }

    preload() {
        this.load.image('chest', 'assets/chest.png')
        this.load.image('return', 'assets/go-back.png')
    }

    onEnter() {
        let chest = this.add.sprite(725, 800, 'chest')
            .setScale(0.5)

        let chestinteractive = this.add.text(670, 750, 
            '           \n           \n           \n           \n           ')
            .setInteractive()
            .on('pointerover', () => this.showMessage('A chest, it could have \
            something useful inside'))
            .on('pointerdown', () => {
                if (!this.hasItem('Gold key')) {
                    this.showMessage('Got a key!')
                    this.gainItem('Gold key')
                    this.tweens.add({
                        targets: chest,
                        x: '+=' + this.s,
                        repeat: 1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        duration: 100
                    });
                }
                else {
                    this.showMessage('Already looted this chest')
                }
            })

        let goback = this.add.sprite(175, 990, 'return')
            .setScale(0.5)
        
        let gobackinter = this.add.text(40, 975, '         ')
            .setFontSize(50)
            .setInteractive()
            .on('pointerover', () => this.showMessage('Go back to previous room?'))
            .on('pointerdown', () => this.gotoScene('firstfloor'))

        this.tweens.add({
            targets: goback,
            y: goback.y + 20,
            duration: 700,
            yoyo: true,
            repeat: -1
        })
    }
}

class SecondFloor extends AdventureScene {
    constructor() {
        super("secondfloor", "Second Floor");
    }

    preload() {
        this.load.image('door-closed', 'assets/door-closed.png');
        this.load.image('door-open', 'assets/door-open.png');
        this.load.image('return', 'assets/go-back.png')
    }

    onEnter() {
        let door1closed = this.add.sprite(725, 550, 'door-closed')
            .setScale(0.5)

        let door1open = this.add.sprite(700, 560, 'door-open')
            .setScale(0.5)
            .setVisible(false)

        let door1 = this.add.text(this.w * 0.315, this.w * 0.13, 
            "         \n         \n         \n         \n         \n         \n" + 
            "         \n         \n         \n         \n         \n         \n" +
            "         \n         \n          ")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Silver key")) {
                    door1open.setVisible(true)
                    door1closed.setVisible(false)
                } else {
                    this.showMessage("It's locked");
                }
            })

            .on('pointerout', () => {
                door1closed.setVisible(true)
                door1open.setVisible(false)
            })

            .on('pointerdown', () => {
                if (this.hasItem("Silver key")) {
                    this.showMessage("*creak*");
                    this.gotoScene('thirdfloor');
                }
                else {
                    this.showMessage("It looks like you could use use a key on this door")
                }
            })

        let goback = this.add.sprite(175, 990, 'return')
            .setScale(0.5)
        
        let gobackinter = this.add.text(40, 975, '         ')
            .setFontSize(50)
            .setInteractive()
            .on('pointerover', () => this.showMessage('Go back to previous room?'))
            .on('pointerdown', () => this.gotoScene('firstfloor'))

        this.tweens.add({
            targets: goback,
            y: goback.y + 20,
            duration: 700,
            yoyo: true,
            repeat: -1
        })
    }
}

class ThirdFloor extends AdventureScene {
    constructor() {
        super("thirdfloor", "Third Floor")
    }

    preload() {
        this.load.image('door-closed', 'assets/door-closed.png')
        this.load.image('door-open', 'assets/door-open.png')
        this.load.image('return', 'assets/go-back.png')
    }

    onEnter() {
        let door1closed = this.add.sprite(425, 550, 'door-closed')
            .setScale(0.5)

        let door1open = this.add.sprite(400, 560, 'door-open')
            .setScale(0.5)
            .setVisible(false)

        let door2closed = this.add.sprite(1025, 550, 'door-closed')
            .setScale(0.5)

        let door2open = this.add.sprite(1000, 560, 'door-open')
            .setScale(0.5)
            .setVisible(false)

        let door1 = this.add.text(this.w * 0.115, this.w * 0.13, 
            "         \n         \n         \n         \n         \n         \n" + 
            "         \n         \n         \n         \n         \n         \n" +
            "         \n         \n          ")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Gold key")) {
                    door1open.setVisible(true)
                    door1closed.setVisible(false)
                } else {
                    this.showMessage("It's locked");
                }
            })

            .on('pointerout', () => {
                door1closed.setVisible(true)
                door1open.setVisible(false)
            })

            .on('pointerdown', () => {
                if (this.hasItem("Gold key")) {
                    this.loseItem("Gold key");
                    this.loseItem('Silver key');
                    if (this.hasItem("Flashlight")) {
                        this.loseItem('Flashlight')
                        this.showMessage("*creak*");
                        this.gotoScene('GoodEnding');
                    }
                    else {
                        this.loseItem("Gold key");
                        this.loseItem('Silver key');
                        this.showMessage("*creak*");
                        this.gotoScene('BadEnding');
                    }
                }
                else {
                    this.showMessage("It looks like you could use use a key on this door")
                }
            })

        let door2 = this.add.text(this.w * 0.48, this.w * 0.13, 
            "         \n         \n         \n         \n         \n         \n" + 
            "         \n         \n         \n         \n         \n         \n" +
            "         \n         \n          ")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                door2open.setVisible(true)
                door2closed.setVisible(false)
            })

            .on('pointerout', () => {
                door2closed.setVisible(true)
                door2open.setVisible(false)
            })

            .on('pointerdown', () => {
                this.showMessage("*creak*")
                this.gotoScene('balcony')
            })

        let goback = this.add.sprite(175, 990, 'return')
            .setScale(0.5)
        
        let gobackinter = this.add.text(40, 975, '         ')
            .setFontSize(50)
            .setInteractive()
            .on('pointerover', () => this.showMessage('Go back to previous room?'))
            .on('pointerdown', () => this.gotoScene('secondfloor'))

        this.tweens.add({
            targets: goback,
            y: goback.y + 20,
            duration: 700,
            yoyo: true,
            repeat: -1
        })
    }
}

class Balcony extends AdventureScene {
    constructor() {
        super('balcony', 'Balcony')
    }

    preload() {
        this.load.image('background', 'assets/balcony-backdrop.png')
        this.load.image('chest', 'assets/chest.png')
        this.load.image('return', 'assets/go-back.png')
    }

    onEnter() {
        this.add.image(640, 490, 'background')

        let chest = this.add.sprite(725, 800, 'chest')
            .setScale(0.5)

        let chestinteractive = this.add.text(670, 750, 
            '           \n           \n           \n           \n           ')
            .setInteractive()
            .on('pointerover', () => this.showMessage('A chest, it could have \
            something useful inside'))
            .on('pointerdown', () => {
                if (!this.hasItem('Flashlight')) {
                    this.showMessage('Got a flaslight!')
                    this.gainItem('Flashlight')
                    this.tweens.add({
                        targets: chest,
                        x: '+=' + this.s,
                        repeat: 1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        duration: 100
                    });
                }
                else {
                    this.showMessage('Already looted this chest')
                }
            })

        let goback = this.add.sprite(175, 990, 'return')
            .setScale(0.5)
        
        let gobackinter = this.add.text(40, 975, '         ')
            .setFontSize(50)
            .setInteractive()
            .on('pointerover', () => this.showMessage('Go back to previous room?'))
            .on('pointerdown', () => this.gotoScene('thirdfloor'))

        this.tweens.add({
            targets: goback,
            y: goback.y + 20,
            duration: 700,
            yoyo: true,
            repeat: -1
        })

    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('firstfloor'));
        });
    }
}

class BadEnding extends Phaser.Scene {
    constructor() {
        super('BadEnding');
    }

    create() {
        this.add.text(50, 50, "You couldn't see the ladder and fell to your death \
        \nYou Got The Bad Ending\nBetter Luck Next Time! \
        \n\nThank You For Playing!\nRefresh to restart").setFontSize(50);
    }
}

class GoodEnding extends Phaser.Scene {
    constructor() {
        super('GoodEnding');
    }

    create() {
        this.add.text(50, 50, 'You Got The Good Ending\n\nThank You For Playing! \
        \nRefresh to restart').setFontSize(50);
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, FirstFloor, Basement, SecondFloor, ThirdFloor, Balcony, BadEnding, GoodEnding],
    title: "Adventure Game",
});

