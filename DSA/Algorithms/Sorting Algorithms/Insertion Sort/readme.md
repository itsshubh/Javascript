## Insertion Sort

Insertion sort works similarly as we sort cards in our hand in a card game.

We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put at their right place.

A similar approach is used by insertion sort.
Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.

__How Insertion Sort Works?__

1. The first element in the array is assumed to be sorted. Take the second element and store it separately in key.
Compare key with the first element. If the first element is greater than key, then key is placed in front of the first element.

2. Now, the first two elements are sorted.
Take the third element and compare it with the elements on the left of it. Placed it just behind the element smaller than it. If there is no element smaller than it, then place it at the beginning of the array.
Move the greater elements one position up to make space for the swapped element.

3. Similarly, place every unsorted element at its correct position.


### Complexity
__Time Complexities__

__Worst Case Complexity: O(n2)__
Suppose, an array is in ascending order, and you want to sort it in descending order. In this case, worst case complexity occurs.

Each element has to be compared with each of the other elements so, for every nth element, (n-1) number of comparisons are made.

__Best Case Complexity: O(n)__
When the array is already sorted, the outer loop runs for n number of times whereas the inner loop does not run at all. So, there are only n number of comparisons. Thus, complexity is linear.

__Average Case Complexity: O(n2)__
It occurs when the elements of an array are in jumbled order (neither ascending nor descending).

__Space Complexity__

__Space complexity is O(1) because an extra variable key is used.__


### Insertion Sort Applications
The insertion sort is used when:
- the array is has a small number of elements
- there are only a few elements left to be sorted