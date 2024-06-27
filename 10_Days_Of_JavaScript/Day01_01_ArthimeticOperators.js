function getArea(length,width){
    return (length*width)
}
function getPerimeter(length,width){
    return (2*(length+width))
}
function main(){
    const length = +(readLine())
    const width = +(readLine())

    console.log(getArea(length,width))
    console.log(getPerimeter(length,width))
}