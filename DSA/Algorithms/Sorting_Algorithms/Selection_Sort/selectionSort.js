function selectionSort(arr) {
    var size = arr.length;
    for (var i = 0; i < size - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < size; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // swap
        var temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]))