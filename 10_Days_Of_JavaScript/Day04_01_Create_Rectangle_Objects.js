// Define a Rectangle constructor function
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
  }
function main(){
    let a = parseInt(readLine());
    let b = parseInt(readLine());

    let rect = new Rectangle(a,b);
    console.log(rect.length);
    console.log(rect.width);
    console.log(rect.perimeter);
    console.log(rect.area);
}