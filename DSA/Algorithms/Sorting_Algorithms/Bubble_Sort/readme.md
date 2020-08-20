## Bubble Sort

Bubble sort is an algorithm that compares the adjacent elements and swaps their positions if they are not in the intended order. The order can be ascending or descending.

Example:
    First Pass:
    ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
    ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
    ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
    ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.

    Second Pass:
    ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
    ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
    ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
    ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
    Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

    Third Pass:
    ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
    ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
    ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
    ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )


### Optimized Bubble Sort
In the above code, all possible comparisons are made even if the array is already sorted. It increases the execution time.

The code can be optimized by introducing an extra variable swapped. After each iteration, if there is no swapping taking place then, there is no need for performing further loops.

In such a case, variable swapped is set false. Thus, we can prevent further iterations.


### Complexity
Bubble Sort is one of the simplest sorting algorithms. Two loops are implemented in the algorithm.

Cycle	    Number of Comparisons
1st	            (n-1)
2nd	            (n-2)
3rd	            (n-3)
.......	        ......
last	          1

__Number of comparisons: (n - 1) + (n - 2) + (n - 3) +.....+ 1 = n(n - 1) / 2 nearly equals to n^2__

__Complexity:__ O(n2)

Also, we can analyze the complexity by simply observing the number of loops. There are 2 loops so the complexity is n*n = n2

__Time Complexities:__

__Worst Case Complexity:O(n2)__
If we want to sort in ascending order and the array is in descending order then, the worst case occurs.

__Best Case Complexity:O(n)__
If the array is already sorted, then there is no need for sorting.

__Average Case Complexity:O(n2)__
It occurs when the elements of the array are in jumbled order (neither ascending nor descending).

__Space Complexity:__
- Space complexity is O(1) because an extra variable temp is used for swapping.
- In the optimized algorithm, the variable swapped adds to the space complexity thus, making it O(2).


### Bubble Sort Applications
Bubble sort is used in the following cases where 
- the complexity of the code does not matter.
- a short code is preferred.