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

