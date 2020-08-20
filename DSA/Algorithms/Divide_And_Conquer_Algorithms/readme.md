## Divide and Conquer Algorithm

A divide and conquer algorithm is a strategy of solving a large problem by

1. breaking the problem into smaller sub-problems
2. solving the sub-problems, and
3. combining them to get the desired output.

To use divide and conquer algorithms, recursion is used. 

__How Divide and Conquer Algorithms Work?__
Here are the steps involved:

- __Divide__: Divide the given problem into sub-problems using recursion.
- __Conquer__: Solve the smaller sub-problems recursively. If the subproblem is small enough, then solve it directly.
- __Combine__: Combine the solutions of the sub-problems which is part of the recursive process to get the solution to the actual problem.


### Divide and Conquer vs Dynamic approach

The divide and conquer approach divides a problem into smaller subproblems, these subproblems are further solved recursively. The result of each subproblem is not stored for future reference, whereas, in a dynamic approach, the result of each subproblem is stored for future reference.

Use the divide and conquer approach when the same subproblem is not solved multiple times. Use the dynamic approach when the result of a subproblem is to be used multiple times in the future.

Let us understand this with an example. Suppose we are trying to find the Fibonacci series. Then,

Divide and Conquer approach:
    
    fib(n)
        If n < 2, return 1
        Else , return f(n - 1) + f(n -2)


Dynamic approach:

    mem = [ ]
    fib(n)
        If n in mem: return mem[n] 
        else,     
            If n < 2, f = 1
            else , f = f(n - 1) + f(n -2)
            mem[n] = f
            return f

In a dynamic approach, __mem__ stores the result of each subproblem.