//1. Sigma

function addup (num){
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
        
}

final = addup(10);
console.log(final);



//2. Factorial

function multiply (num){
    var sum = 1;
    for (var i = 1; i <= num; i++) {
        sum = sum * i;
    }
    return sum;
        
}

final = multiply(5);
console.log(final);



// 3. Fibonacci

function fibonacci (num) {
    var sum1 = 0;
    var arr = [0, 1];
    for(var i = 1; i <= num; i++){
        sum1 = arr[i] + arr[i-1];
        arr.push(sum1);
    }
    return arr;

}

fib = fibonacci(7);
console.log(fib);


// 4. Array: Second-to-last

function second_to_last (){
    var arr = ['k7', 'h1']
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i - 1];
    }
        if (arr.length - 1 < 1) {
            console.log("null");
        }
        else {
            console.log(value);
        }
}


second_to_last();

// 5. Array:nth-to-last

function nth_to_last (nth) {
    var arr = [1,7,4,3,2,8,9];
    var i = 0;
        if (nth > arr.length) {
            console.log("null")
        }
        else {
            i = arr.length - nth;
            console.log(arr[i]);
        }

}

nth_to_last(2);


// 6. Array: second largest


function second_largest () {
    var arr = [3,1,82,19,47,4.7,-2, 32, -9];
    var temp = 0;
    for (var i = 0; i<arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    var k = arr.length;
    console.log(arr);
    console.log(arr[k - 2]);

}

second_largest();

// 7. Double trouble

function double_trouble () {
    var arr = [3, "hello", "jim", 62, 5];
    var new_array = [];
    for (var i = 0; i < arr.length; i++) {
        new_array.push((arr[i]), arr[i]);
    }
    console.log(new_array);
}

double_trouble ();