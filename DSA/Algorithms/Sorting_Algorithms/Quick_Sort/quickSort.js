function partition(arr, l, r) {
    var pivot = arr[r];
    var i = (l - 1);  // index of smaller element 
    for (var j = l; j <= r; j++) {
        if (arr[j] < pivot) {
            i++;
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    var temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;
    return i + 1;
}
function quickSort(arr, l, r) {
    if (l < r) {
        var pi = partition(arr, l, r);
        quickSort(arr, l, pi - 1);
        quickSort(arr, pi + 1, r)
    }
}

function sort(arr) {
    quickSort(arr, 0, arr.length - 1);
    return arr;
}

console.log(sort([12, 11, 13, 5, 6, 7]));
console.log(sort([38, 27, 43, 3, 9, 82, 10]));
