Minimum product subset of an array
----------------------------------
Given an array a, we have to find minimum product possible with the subset of elements present in the array. The minimum product can be single element also.

-----------------------------------------------------------------------------------------------------------------------------------

Examples:
---------
Input : a[] = { -1, -1, -2, 4, 3 }
Output : -24
Explanation : Minimum product will be ( -2 * -1 * -1 * 4 * 3 ) = -24

Input : a[] = { -1, 0 }
Output : -1
Explanation : -1(single element) is minimum product possible
 
Input : a[] = { 0, 0, 0 }
Output : 0

Solutions
---------
Sol 1 ->  Generate all subsets, find product of every subset and return maximum product.

Sol 2 -> Looking at the facts
- If there are even number of negative numbers and no zeros, the result is the product of all except the largest valued negative number.
- If there are an odd number of negative numbers and no zeros, the result is simply the product of all.
- If there are zeros and positive, no negative, the result is 0. The exceptional case is when there is no negative number and all other elements positive then our result should be the first minimum positive number.