function somar( num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return -1;
    }
}

console.log(somar(4, 5, 6));//15
console.log(somar());//6
console.log(somar(2));//7
console.log(somar(2, 2));//6
console.log(somar(2, 2, 2));//6
console.log(somar(2, 2, 2, 2));//6
console.log(somar(0, 0, 0));//0

console.log(somar('a', 'b', 'c'));//'abc'
console.log(somar(true, false));//'1c'
console.log(somar(2, true, false));//'3'