(function (exports) {
    function iterativeBinarySearch(arr, val) {
        var left = 0;
        var right = arr.length - 1;
        var mid = Math.floor((left + right) / 2);
        while (left <= right) {
            if (arr[mid] == val) {
                return mid;
            }
            else if (arr[mid] > val) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
            mid = Math.floor((left + right) / 2);
        }
        return -1;
    }

    function _recursiveBinarySearch(arr, val, left, right) {
        if (left > right) {
            return -1;
        }
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] == val) {
            return mid;
        }
        else if (arr[mid] > val) {
            return _recursiveBinarySearch(arr, val, left, mid - 1)
        }
        else {
            return _recursiveBinarySearch(arr, val, mid + 1, right)
        }
    }
    function recursiveBinarySearch(arr, val) {
        var left = 0;
        var right = arr.length - 1;
        return _recursiveBinarySearch(arr, val, left, right);
    }

    exports.iterativeBinarySearch = iterativeBinarySearch
    exports.recursiveBinarySearch = recursiveBinarySearch
})(module.exports);