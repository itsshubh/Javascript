## Selection Sort

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

1. The subarray which is already sorted.
2. Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

    arr[] = 64 25 12 22 11

    // Find the minimum element in arr[0...4] and place it at beginning
    11 25 12 22 64

    // Find the minimum element in arr[1...4] and place it at beginning of arr[1...4]
    11 12 25 22 64

    // Find the minimum element in arr[2...4] and place it at beginning of arr[2...4]
    11 12 22 25 64

    // Find the minimum element in arr[3...4] and place it at beginning of arr[3...4]
    11 12 22 25 64 


### Complexity
__Time Complexities:__

__Worst Case Complexity: O(n2)__
If we want to sort in ascending order and the array is in descending order then, the worst case occurs.

__Best Case Complexity: O(n2)__
It occurs when the array is already sorted.

__Average Case Complexity: O(n2)__
It occurs when the elements of the array are in jumbled order (neither ascending nor descending).
The time complexity of the selection sort is the same in all cases. At every step, you have to find the minimum element and put it in the right place. The minimum element is not known until the end of the array is not reached.

__Space Complexity:__

Space complexity is O(1) because an extra variable temp is used.


### Selection Sort Applications
The selection sort is used when:
- a small list is to be sorted
- cost of swapping does not matter
- checking of all the elements is compulsory
- cost of writing to a memory matters like in flash memory (number of writes/swaps is O(n) as compared to O(n2) of bubble sort)