
// min number in Array 
/* 1 3 4 6 0 */
// result : 0
function min(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

const minEl = min([1,3,4,6,0]);



// min 2nd number in Array
/* 1 3 4 6 0 */
// result : 1
function min2(arr) {
    let min = arr[0];
    let min2 = arr[1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min2 = min;
            min = arr[i];
        } else if (arr[i] < min2) {
            min2 = arr[i];
        }
    }
    return min2;
}

const min2El = min2([1,3,4,6,0]);
console.log(min2El);