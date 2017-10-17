function upperHalf(color){
    context.fillStyle = color
    context.beginPath()
    context.rect(0, 0, 360, 120);
    context.closePath()
    context.fill()
}

function lowerHalf(color){
    context.fillStyle = color
    context.beginPath()
    context.rect(0, 120, 360, 120);
    context.closePath()
    context.fill()
}

function upperThird(color){
    context.fillStyle = color
    context.beginPath()
    context.rect(0, 0, 360, 80);
    context.closePath()
    context.fill()
}

function middleThird(color){
    context.fillStyle = color
    context.beginPath()
    context.rect(0, 80, 360, 80);
    context.closePath()
    context.fill()
}

function lowerThird(color){
    context.fillStyle = color
    context.beginPath()
    context.rect(0, 160, 360, 80);
    context.closePath()
    context.fill()
}

function right(color){
    context.fillStyle = color
    context.beginPath()
    context.rect(0, 0, 120, 240);
    context.closePath()
    context.fill()
}

function center(color){
    context.fillStyle = color
    context.beginPath()
    context.rect(120, 0, 120, 240);
    context.closePath()
    context.fill()
}

function left(color){
    context.fillStyle = color
    context.beginPath()
    context.rect(240, 0, 120, 240);
    context.closePath()
    context.fill()
}