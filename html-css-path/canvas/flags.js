include(pieceFlags.js)

function japan(id) {
    canvasInit(id)
    context.fillStyle = '#FF355E'
    context.beginPath()
    context.moveTo(180, 120)
    context.arc(180, 120, 70, 0, Math.PI * 2, false)
    context.closePath()
    context.fill()
}

function poland(id){
    canvasInit(id)
    upperHalf('white')
    lowerHalf('#ff355e')
}

function germany(id){
    canvasInit(id)
    upperThird('#000000')
    middleThird('#ff0000')
    lowerThird('#ffcc00')
}

function rusland(id){
    canvasInit(id)
    upperThird('white')
    middleThird('blue')
    lowerThird('red')
}

function ukraine(id){
    canvasInit(id)
    upperHalf('blue')
    lowerHalf('#ffcc00')
}

function italy(id){
    canvasInit(id)
    right('green')
    center('white')
    left('red')
}

function canvasInit(id){
    canvas = O(id)
    context = canvas.getContext('2d')
    S(canvas).border = '1px solid black'
}
function toImg(id) {
S(id).border = '1px solid black'
O(id).src = canvas.toDataURL()
}