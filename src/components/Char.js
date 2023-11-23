const ascii = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(){}[]<>,;:.!?$%&|+-=*/=^#"'@_`;
// const colors = ["199,168,239","0,175,217","203,215,229"]
const colors = ["231,47,47"];

class Char {
    constructor(x, y, lifetime = 200, char, type = 'drawing') {
        this.alive = true;
        this.life = 0;
        this.lifetime = lifetime;
        this.x = x;
        this.y = y;

        this.type = type;
        this.color = colors.at(Math.random() * colors.length);
        if (!char) this.char = ascii.at(Math.random() * ascii.length);
        else this.char = char;
    }

    drawChar(ctx, width,height) {
        
        if (this.type == "drawing") {
            ctx.fillStyle = `rgba(${this.color},${1 - this.life / this.lifetime})`;
            ctx.fillText(
                ascii.at(Math.random() * ascii.length),
                this.x,
                this.y
            );
            
            ctx.fillText(
                ascii.at(Math.random() * ascii.length),
                this.x,
                this.y
            );
        } else if (this.type == "image") {
            ctx.fillStyle = `rgba(${this.color},${1 - this.life / this.lifetime})`;
            ctx.fillText(this.char, this.x, this.y);
        }

        this.life++;

        if (this.life >= this.lifetime && this.lifetime != -1)
            this.alive = false;
    }

    setChar(char) {
        this.char = char;
    }

    kill() {
        this.alive = false;
    }

    isDead() {
        return !this.alive;
    }

    getType() {
        return this.type;
    }
}

export default Char;
