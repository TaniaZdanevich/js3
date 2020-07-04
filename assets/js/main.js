var counter = (function () {
    var count=0;
    return function(i){
    if (i !== undefined) count =i;
    return count++;
    };
    }
    ())
    console.log(counter());
    console.log(counter()); 
    console.log(counter(100)); 
    console.log(counter()); 
    console.log(counter(500)); 
    console.log(counter()); 
    console.log(counter(0)); 
    console.log(counter()); 


let counting = (function(){
    let count = 0;
    return{
        value (i){
            if (i !==undefined) count = i;
            return count;
        },
        increment (){
            count++;
        },
        decrement (){
            count--;
        }
    };
}())
console.log(counting.value()); 
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
counting.decrement();
console.log(counting.value()); 
console.log(counting.value(100));
counting.decrement();
console.log(counting.value()); 
console.log(counting.value(200)); 
counting.increment();
console.log(counting.value()); 

myPrint = function (a,b,res){
    return `${a}^${b}=${res}`;
}
myPow = function (a,b,callback){
        return callback(a,b,pow(a,b))};
pow = function (x,n) {
    if (n !==1)
        {return x*=pow (x, n - 1);}
        else {return x; }
} 
console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8



function details() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}
let yearNow = new Date().getFullYear();
let car1 = {
    engine: 2000,
    model: 'Lacetti',
    name: 'Chevrolet',
    year: 2010,
    info: details,
    get used() {
        return this.year !==yearNow ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
      }
};
let car2 = {
    engine: 5000,
    model: 'FX50 AWD',
    name: 'Infinity',
    year: 2019,
    info: details,
    get used() {
        return this.year !==yearNow ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
      }
}
console.log (car2.info());
console.log(car1.info()); 
car1.used = 'new';
console.log(car1.info());
car1.used = 'used';
console.log(car1.info());
console.log(car2.info()); 
car1.used = 'used';
console.log(car2.info());


let list = [12, 23, 100, 34, 56, 9, 233];
console.log(Math.max.apply(null,list));


function myMul(a,b){
    return a*b;
};
let myDouble = myMul.bind (null,2);
let myTriple = myMul.bind (null,3); 
console.log (myMul(8,8));
console.log(myDouble(3));
console.log(myTriple(5));

let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
let notUniqStrings = [
  'Bob',
  'Kate',
  'Jhon',
  'Tom',
  'Jhon',
  'Kate',
  'Tom',
  'Bob',
  'Jhon',
  'Tom'
];

let myUniq = (arr) => {
  let set = new Set();

  arr.forEach((val) => {
    set.add(val);
  });

  return set;
};

console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));



