const furniture ={
    sit: 'chair',
    write: 'table',
    arrange: 'shelf',
    cloth: 'wardrobe',
    access: 'door',
    kitchen: 'cabinet',
    decorate: function (){
        return `beutify the home`;
    }
};
console.log(furniture.decorate());
console.log(furniture.cloth);

function shape(angleB,height,base){
    return {
        angleB,
        height,
        base,
        rotate (){
            return `rotate`
        }
    }
};
 const triangle = shape (30,4,3);
 console.log(triangle.rotate());

 function Shape(angleB,height,base){
    this.angleB = angleB;
    this.height = height;
    this.base = base;
    this.rotatex = function (){
        return `rotate the triangle`;
    }
 };
 const triangleK = new Shape(45,8,5);
 console.log(triangleK.rotatex());

 const tools = {
      screwDriver: 5,
      hammer: 3,
      spanner: 12
 };
tools.wrench = 8;
 tools.plier = 7;
 delete tools.spanner;
 console.log(tools);

let x = 20;
x = 35;
let y = x;


console.log(x);
console.log(y);

let j = {shirt: 5};
let k = j;
j.shirt = 15;
k.shirt = 30

console.log(j);
console.log(k);

const allItem = Object.assign(tools,triangleK,{color: 'green'});
console.log(allItem);

const clothings = {...furniture};
console.log(clothings)

let message = `where you going`


const now = new Date()

    