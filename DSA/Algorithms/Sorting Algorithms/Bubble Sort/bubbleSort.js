var bubbleSort = function (arr) {
    var size = arr.length;
    for (var i = 0; i < size - 1; i++) {
        swapped = false;
        for (var j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]))