## Binary Seach

Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

Algorithm - We basically ignore half of the elements just after one comparison.
1. Compare x with the middle element.
2. If x matches with middle element, we return the mid index.
3. Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element. So we recur for right half.
4. Else (x is smaller) recur for the left half.

### Binary Search Complexity
__Time Complexities__

Best case complexity: O(1)
Average case complexity: O(log n)
Worst case complexity: O(log n)

__Space Complexity__

The space complexity of the binary search is O(n).

