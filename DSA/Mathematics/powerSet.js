const getAllSubsets = (arr) => {
    return arr.reduce((subsets, value) => {
        return subsets.concat(subsets.map(set => {
            return [value, ...set];
        }))

    }, [[]])
}
console.log(getAllSubsets([1, 2, 3]));

// Method 2
function getCombinations(array) {
    function fork(i, t) {
        if (i === array.length) {
            result.push(t);
            return;
        }
        fork(i + 1, t.concat([array[i]]));
        fork(i + 1, t);
    }

    var result = [];
    fork(0, []);
    return result;
}

var data = [1, 2, 3],
    result = getCombinations(data);

console.log(result);

// Method 3
function generatePowerSet(array) {
    var result = [];
    result.push([]);
    var b = 1 << array.length;  // Getting Power
    for (var counter = 1; counter < (1 << array.length); counter++) {
        var subset = [];
        for (var j = 0; j < array.length; j++) {
            var a = 1 << j;
            /* Check if jth bit in the counter is set 
            If set then print jth element from set */
            // 000,001,010,011,100,101,110,111
            // 0,  1,  2,  12, 3,  13, 23, 123
            // Every set bit i.e 1 in counter contributes to a subset elm.
            if (counter & (1 << j))
                subset.push(array[j]);
        }
        result.push(subset);
    }

    return result;
}

console.log(generatePowerSet(data));