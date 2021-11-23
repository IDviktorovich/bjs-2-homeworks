function parseCount(value) {
    let parseValue = Number.parseInt(value);
    if (Number.isNaN(parseValue)) {
      throw new Error ('Невалидное значение');
    }
    return parseValue;
}
  
console.log(parseCount('3'));

const parse = parseCount;

function validateCount(value) {
    try {
      return parse(value);
    } catch(err) {
      return err;
    }
  }

console.log(validateCount('ds'));

class Triangle {

    constructor(a,b,c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if ((a + b) < c || (a + c) < b || (b + c) < a) {
        throw new Error ('Треугольник с такими сторонами не существует');
      }
    }
    getPerimeter() {
      return this.a + this.b + this.c;
    }
    getArea() {
      let p = (this.a + this.b + this.c) / 2;
      let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return +s.toFixed(3);
    }
  
}
  
const triangle1 = new Triangle(6,7,8);
console.log(triangle1);
triangle1.getPerimeter();
console.log(triangle1.getPerimeter());
console.log(triangle1.getArea());
  
function getTriangle (a,b,c) {
    try {
      return new Triangle(a,b,c);
    } catch(err) {
      return {
        getPerimeter: () => 'Ошибка! Треугольник не существует',
        getArea: () => 'Ошибка! Треугольник не существует',
      };
    }
}
  
getTriangle(4,5,6);