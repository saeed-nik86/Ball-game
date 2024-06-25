
function random (min, max){
    return Math.floor(Math.random() * (max -min) + min)
}
class Ball{
    constructor(clientx, clienty){
         this.canvas = document.querySelector("canvas");
         this.canvas.width = window.innerWidth;
         this.canvas.height = window.innerHeight;
         this.c = this.canvas.getContext("2d");
         this.r = 20;
         this.x = clientx ||random(0 + this.r, innerWidth - this.r);
         this.y = clienty ||random(0 + this.r, innerHeight - this.r);
         this.vx = 5;
         this.vy = 5;
         this.colors = ["red", "green"]
        this.c.fillStyle = this.colors[random(0, 2)]
   
    }
    draw(){
        this.c.beginPath()
        this.c.arc(this.x, this.y, this.r, 0, 2* Math.PI)
        this.c.fill()

    }
    update(){
        if (this.x+ this.r >= innerWidth || this.x- this.r <= 0){
            this.vx = -this.vx
        }
        if (this.y+ this.r >= innerHeight || this.y-this.r <= 0){
            this.vy = -this.vy
        }
        this.x += this.vx;
        this.y += this.vy;
    }
}
let balls = new Array()
for (let i = 0; i < 10 ; i++){
    balls.push(new Ball())
}
let ball = new Ball()
function saeed(){
    document.querySelector("canvas").getContext("2d").clearRect(0, 0, innerWidth, innerHeight);
    for (const ball of balls) {
        ball.draw()
        ball.update()
    }
    requestAnimationFrame(saeed)
}
saeed()

document.addEventListener("click", (e) =>{
    balls.push(new Ball(e.clientX, e.clientY))
})
document.addEventListener("mousemove", (e) =>{
    for (const ball of balls) {
        let move = Math.sqrt(Math.pow(e.clientX - ball.x, 2)) + Math.sqrt(Math.pow(e.clientY - ball.y, 2));
        if (move < 100 && ball.r < 40){
            ball.r += 2
            // console.log(ball.r)
            console.log(move)
        }
        else if (ball.r > 10){
            ball.r -= 2
            console.log("ssss")
        }
    }
})
window.addEventListener("resize", () =>{
    ball.canvas.width = innerWidth;
    ball.height = innerHeight;
})