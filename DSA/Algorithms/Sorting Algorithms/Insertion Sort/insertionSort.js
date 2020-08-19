function insertionSort(arr) {
    var size = arr.length;
    var key;
    for (var i = 1; i < size; i++) {
        key = arr[i];
        var j = i - 1;
        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position 
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6])); 