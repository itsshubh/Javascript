## Javascript & Call Stack

A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions.

JavaScript is a single-threaded language, this means that it can only do one thing at a time, and thus it has one call stack. The process is laid out below:
1. A script calls a function
2. The function is added to the call stack and function is carried out
3. If another function is called within, this is added to the top of the call stack and carried out until completed.
4. Once finished the current function is taken off the stack and the original function resumes execution.

The call stack records where in the program you are at any point. If there is an error in the code we are given the stack trace as a part of the error message. The lines below the error message “error in someFunc” show the current state of the call stack when the error occurred. An understanding of this can be incredibly useful in debugging and getting a better understanding as to how your code is being executed.


### Execution Context

An Execution Context is an abstract concept of an environment where the Javascript code is evaluated and executed. Whenever any code is run in JavaScript, it’s run inside an execution context.
The call stack is a collection of execution contexts.


#### Execution Stack

- Execution stack, also known as “calling stack” in other programming languages, is a stack with a LIFO (Last in, First out) structure, which is used to store all the execution context created during the code execution.
- When the JavaScript engine first encounters your script, it creates a global execution context and pushes it to the current execution stack. Whenever the engine finds a function invocation, it creates a new execution context for that function and pushes it to the top of the stack.
- The engine executes the function whose execution context is at the top of the stack. When this function completes, its execution stack is popped off from the stack, and the control reaches to the context below it in the current stack.

When code is run in JavaScript, it can be executed in one of three environments:
- Global context — this is the default environment that code is executed in at the start of a program
- Function context— when the interpreter enters a function body
- Eval context — text to be executed inside the internal eval function (not used very often)

There is always only one global context but there can be any number of function/eval contexts. Each function call creates a new function context (even a call to itself).

There are two stages when creating a new execution context:
1. Creation — an execution context object is created. It contains three keys:

- Variable Object — Create the variables, functions, and arguments. Variables are declared and initialized to undefined (they are not assigned their values at this stage). Function declarations are stored by their name which has a reference pointer to the function in memory. **
- Scope chain — a collection of the current context’s variable object and all it’s parent’s lexical variable object. This is how a function has access to it’s parents variables.
- This — Determine the value of “this” inside the context

2. Execution
- Assign values to variables
- Interpret & execute the code

__Note__ : This is why a function declaration can be ‘hoisted’. It is assigned during the creation phase whereas a function expression has no value assigned to it until the execution phase.

A problem with a single threaded process is that if a particular function takes a long time, no other code can execute until it is complete. This is termed __“blocking”__. When used in the browser this can lead to unresponsive pages.

A solution to this within JavaScript is to use asynchronous callbacks which essentially put aside blocks of code to be run once the asynchronous process has completed, but continue to run the rest of the code in the meantime.
But how does this work with the call stack? see [Event Loop](./event_loop.md)
