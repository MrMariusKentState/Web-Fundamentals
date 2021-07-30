var testArr = [6,3,5,1,2,4];
var newArr = [];
sum = 0;

for (i=0; i < testArr.length; i+=1) {
    num = testArr[i];
    sum = sum + num;
    newArr.push(testArr[i]*i);
    console.log("Num " + num + ", Sum " + sum);
}

console.log(newArr);