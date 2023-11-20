const ascii = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(){}[]<>,;:.!?$%&|+-=*/=^#"'@_`
const colors = ["199,168,239","0,175,217","203,215,229"]

class Char {
    constructor(x,y,lifetime,char) {
        this.alive = true
        this.life = 0
        this.lifetime = lifetime
        this.x = x
        this.y = y
        this.color = colors.at(Math.random()*colors.length)
        if(!char) this.char = ascii.at(Math.random()*ascii.length)
        else this.char = char
        
    }

    drawChar(ctx){
        ctx.fillStyle = `rgba(${this.color},${1-this.life/this.lifetime})`
        
        ctx.fillText(this.char, this.x, this.y);
        
        this.life++

        if(this.life >= this.lifetime && this.lifetime != -1) this.alive = false
    }

    setChar(char){
        this.char = char
    }

    kill(){
        this.alive = false
    }

    isDead(){
        return !this.alive;
    }
}

export default Char