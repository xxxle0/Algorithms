
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

// const minEl = min([1,3,4,6,0]);



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

// const min2El = min2([1,3,4,6,0]);

// min xth number in Array 
/* 1 3 4 6 0 and 3 */
// result: 3
// try to use bubble sort for smallest ? 
function minTh(arr, m) {
    let isSorted = false;
    let num = 0;
    while (!isSorted && num !== m) {
        isSorted = true;
        for (let i = arr.length - 1; i > 0; i--) {
            if (arr[i] < arr[i - 1]) {
                arr[i] = arr[i] + arr[i-1];
                arr[i-1] = arr[i] - arr[i - 1];
                arr[i] = arr[i] - arr[i-1];
                isSorted = false;
            }
        }
        if (num == m - 1) {
            return arr[num - 1]
        }
        num++;
    }
}

minTh([6,3,4,1,0], 2);