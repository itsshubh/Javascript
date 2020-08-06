## Stacks

A stack is a linear data structure, elements are stacked on top of each other. Only the last element added can be accessed, i.e the element at the top of the stack. That is, a stack is a Last In First Out (LIFO) structure. This is the opposite of a queue which is First in First out (FIFO).
__Note__ : JavaScript run-time makes use of both of these. see [Javascript and Call Stack](./javascript_and_call_stack.md)

Mainly the following three basic operations are performed in the stack:

1. __Push__: Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
2. __Pop__: Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
3. __Peek or Top__: Returns top element of stack.
4. __isEmpty__: Returns true if stack is empty, else false.

__Note__ - A stack will have a maximum size; when this limit is exceeded it is termed __“Stack overflow”__. This can often be caused when calling a recursive function without properly defining the base or terminating case.

### Understand a stack practically!
A common analogy of a data stack is a pile (or stack!) of plates in a canteen; plates are stacked on top of each other. A customer takes a plate from the top. If for some reason they wanted to access the second plate, they would have to remove the top one first.

### Time Complexities of operations on stack:
push(), pop(), isEmpty() and peek() all take O(1) time. We do not run any loop in any of these operations.

### Applications of stack:

- Balancing of symbols
- Calculators employing reverse Polish notation use a stack structure to hold values. Expressions can be represented in prefix, postfix or infix notations and conversion from one form to another may be accomplished using a stack
- Redo-undo features at many places like editors, photoshop.
- Forward and backward feature in web browsers
- Used in many algorithms like Tower of Hanoi, tree traversals, stock span problem, histogram problem.
- Other applications can be Backtracking, Knight tour problem, rat in a maze, N queen problem and sudoku solver.

(__Backtracking__ -> Consider a simple example of finding the correct path in a maze. There are a series of points, from the starting point to the destination. We start from one point. To reach the final destination, there are several paths. Suppose we choose a random path. After following a certain path, we realise that the path we have chosen is wrong. So we need to find a way by which we can return to the beginning of that path. This can be done with the use of stacks. With the help of stacks, we remember the point where we have reached. This is done by pushing that point into the stack. In case we end up on the wrong path, we can pop the last point from the stack and thus return to the last point and continue our quest to find the right path. This is called backtracking.

The prototypical example of a backtracking algorithm is depth-first search, which finds all vertices of a graph that can be reached from a specified starting vertex. Other applications of backtracking involve searching through spaces that represent potential solutions to an optimization problem. Branch and bound is a technique for performing such backtracking searches without exhaustively searching all of the potential solutions in such a space.)

- In Graph Algorithms like Topological Sorting and Strongly Connected Components.

## Implementation:
There are two ways to implement a stack:

1. Using array

__Pros__: Easy to implement. Memory is saved as pointers are not involved.
__Cons__: It is not dynamic. It doesn’t grow and shrink depending on needs at runtime.

2. Using linked list

__Pros__: The linked list implementation of stack can grow and shrink according to the needs at runtime.
__Cons__: Requires extra memory due to involvement of pointers.
