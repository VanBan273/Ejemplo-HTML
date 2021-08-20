window.onload = function(){
    const canvas = document.querySelector ("#canvas")
    const ctx = canvas.getContext("2d")
    const car = new Image();
    car.src = "../images/car.png"

car.onload = function(){
    ctx.drawImage (car, canvas.width/2-25, canvas.height-100, 50, 100,)
}


}

