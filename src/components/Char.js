const ascii = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(){}[]<>,;:.!?$%&|+-=*/=^#"'@_`
const colors = ["199,168,239","0,175,217","203,215,229"]
const lifetime = 200

class Char {
    constructor(x,y) {
        this.alive = true
        this.life = 0
        this.x = x
        this.y = y
        this.color = colors.at(Math.random()*colors.length)
        this.char = ascii.at(Math.random()*ascii.length)
    }

    drawChar(ctx){
        ctx.fillStyle = `rgba(${this.color},${1-this.life/lifetime})`
        
        ctx.fillText(this.char, this.x, this.y);

        this.life++

        if(this.life >= lifetime) this.alive = false
    }

    isDead(){
        return !this.alive;
    }
}

export default Char