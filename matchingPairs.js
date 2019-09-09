// get matching pair from array with sum of pair = k 
/* 14 13 2 20 31 0 1 */
// assumse whose of input list is positive number;
function matchingPair(arr, k) {
    const hashTable = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (hashTable.get(k - arr[i])) {
            return [arr[i], k - arr[i]];
        } else {
            hashTable.set(arr[i], 1);
        }
    }
}

console.log(matchingPair([14, 13, 2, 20, 0, 1], 3));