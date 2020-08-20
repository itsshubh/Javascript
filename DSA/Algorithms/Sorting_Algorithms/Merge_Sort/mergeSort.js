function mergeSort(arr, l, r) {
    if (l < r) {
        // same as (l+r)/2 but avoids overflow for large l and r.
        var m = Math.floor(l + (r - l) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        return merge(arr, l, m, r);
    }
}

// Merges two subarrays of arr[]. First subarray is arr[l..m] and second subarray is arr[m+1..r]. 
function merge(arr, l, m, r) {
    // Calculating lengths of the left and right arrays that need to be merged.
    var lLength = m - l + 1;
    var rLength = r - m;
    var left = new Array(lLength);
    var right = new Array(rLength);
    for (var i = 0; i < lLength; i++) {
        left[i] = arr[i + l]
    }
    for (var i = 0; i < rLength; i++) {
        right[i] = arr[m + 1 + i]
    }

    // Merging back
    var i = 0;          // initital index of first subarray
    var j = 0;          // initital index of second subarray
    var k = l;          // initital index of merged subarray

    while (i < lLength && j < rLength) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++
        }
        k++;
    }
    while (i < lLength) {
        arr[k] = left[i];
        i++;
        k++;
    }
    while (j < rLength) {
        arr[k] = right[j];
        j++;
        k++;
    }
    return arr;
}

function sort(arr) {
    return mergeSort(arr, 0, arr.length - 1);
}

console.log(sort([12, 11, 13, 5, 6, 7]));
console.log(sort([38, 27, 43, 3, 9, 82, 10]));
