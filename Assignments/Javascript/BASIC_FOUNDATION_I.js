// 1. Get 1 to 255:

function get_odd_numbers(){
    for(var i= 1; i <= 255; i+=2){
        console.log(i);
    }

}

get_odd_numbers();





//2. Get even 1000:

function get_even_1000(){
    var sum = 0;
    for(var i=2; i<=1000; i+=2){
        sum = sum + i;
    }
    return sum;
}

var thousand_sum = get_even_1000();
console.log(thousand_sum);




//3. Sum odd 5000:

function sum_odd_5000(){
    var sum = 0;
    for(var i=1; i<5000; i+=2){
        sum = sum + i;
    }
    return sum;
}

var fivegrandsum = sum_odd_5000();
console.log(fivegrandsum);




//4. Iterate an array:

function array(){
    var sum = 0;
    var arr = [-5,2,5,12];
    for (var i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

var arrsum = array();
console.log(arrsum);




//5. Find max

function find_max(){
    var arr = [-7,102,98,-1,37,19];
    var i = 0;
    var max = arr[i];
    for (var i = 0; i < arr.length; i++){
        if(i > 0){
            if(arr[i] > max){
                var max = arr[i];
            }
        }
    }
    return max;
}

var maximum = find_max();
console.log(maximum);




//6. Find average

function find_average(){
    var sum = 0;
    var arr = [-7,3,19,-1,37,99];
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    var average = sum / arr.length;
    return average;
}

avg = find_average();
console.log(avg);




//7. Array odd

function return_arrayodd(){
    var arr = [];
    for(var i=1; i < 50; i+=2){
        arr.push(i);
    }
    console.log(arr);
}

return_arrayodd();




//8. Given value of y

function value_of_y(y){
    var count = 0;
    var arr = [38, 29, -2, 11, 9, -16, 50];
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > y) {
        count = count + 1;
        }
    }
    return count;
}

total = value_of_y(17);
console.log("There are", total, "values that are greater than the 'y' value of 17.");




//9. Squares

function square(arr){
    for(var i = 0; i < arr.length; i++){
        var square = arr[i] * arr[i];
        arr[i] = square;
    }
    return arr;
}

var squared_array = square([-3,7,5,-2,11]);
console.log(squared_array);




//10. Replace negatives with zero

function replace_negs() {
    var arr = [-3, 7, 62, -82, 39];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

var final_array = replace_negs();
console.log(final_array);




//11. Max / Min / Avg.

function max_min_avg () {
    var sum = 0;
    var i = 0;
    var arr = [3, 7, -8, 19, 27, -5, 6];
    var max = arr[i];
    var min = arr[i];
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (i > 0) {
            if (arr[i] > max){
                var max = arr[i];
            }
            
            else if (arr[i] < min){
                var min = arr[i];
            }
        }
    }
    var avg = sum / arr.length;
    newarr.push(max);
    newarr.push(min);
    newarr.push(avg);
    return newarr;

}

final_arr = max_min_avg();
console.log("The max, min, and avg values from the array are",final_arr);




//12. Swap values

function swap(){
    var arr = [3, 7, 8, -23, 67];
    for (i=0; i < arr.length; i++){
        if(i == arr.length-1){
            var newfirst = arr[arr.length-1];
            arr[i] = arr[0];
            arr[0] = newfirst;
        }
    }
    return arr;

}

var newarr = swap();
console.log(newarr);



//13. Number to string

function number_to_string(){
    var arr = [-3,2,7,82,-67,5];
        for(var i = 0; i < arr.length; i++){
            if (arr[i] < 0){
                arr[i] = "Dojo";
            }
        }
    return arr;
}

var final = number_to_string();
console.log(final);