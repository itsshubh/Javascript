function main(arr) {
    var len = arr.length;

    if (len == 1) return arr[0];
    var maxNegative = -Infinity, minPositive = Infinity, negativeCount = 0, zeroCount = 0, product = 1

    for (let i = 0; i < len; i++) {
        if (arr[i] == 0) {
            zeroCount++;
            continue;
        }
        if (arr[i] < 0) {
            negativeCount++;
            maxNegative = Math.max(maxNegative, arr[i])
        }
        if (arr[i] > 0) {
            minPositive = Math.min(arr[i], minPositive);
        }
        product *= arr[i];
    }

    // Applying Conditions

    // If there are all zeroes or no negative number present
    if (zeroCount == len || negativeCount == 0 && zeroCount > 0) return 0;

    // If there are even negative nos and count.
    if (negativeCount % 2 == 0) return (product / maxNegative);

    // if there are all positives
    if (negativeCount == 0) return minPositive;

    return product;

}

console.log(main([-2, -3, -2, -4, 3]))