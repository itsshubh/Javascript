## Event Loop

JavaScript has a concurrency model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

![Event Loop](https://miro.medium.com/max/788/1*QbEk21UatVQzxOUbYti5VQ.gif)


### Runtime concepts
![JS_Runtime_Env](../../Images/JS_Runtime_Env.svg)

- __Stack__ : Function calls form a stack of frames.
- __Heap__ : Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.
- __Queue__ : A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function which gets called in order to handle the message.

At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.

The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).
(__The Message Queue__ - When setTimeout() is called, the Browser or Node.js start the timer. Once the timer expires, in this case immediately as we put 0 as the timeout, the callback function is put in the Message Queue.
The Message Queue is also where user-initiated events like click or keyboard events, or fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like onLoad.
The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there’s nothing in there, it goes to pick up things in the message queue.)


__ES6 Job Queue__
ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015). It’s a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.
Promises that resolve before the current function ends will be executed right after the current function.
(The analogy of a rollercoaster ride at an amusement park: the message queue puts you at the back of the queue, behind all the other people, where you will have to wait for your turn, while the job queue is the fastpass ticket that lets you take another ride right after you finished the previous one.)


### Run-to-completion
Each message is processed completely before any other message is processed.

Whenever a function runs, it cannot be pre-empted and will run entirely before any other code runs (and can modify data the function manipulates).
A downside of this model is that if a message takes too long to complete, the web application is unable to process user interactions like click or scroll. The browser mitigates this with the __"a script is taking too long to run"__ dialog. A good practice to follow is to make message processing short and if possible cut down one message into several messages.


### Adding messages

In web browsers, messages are added anytime an event occurs and there is an event listener attached to it. If there is no listener, the event is lost. So a click on an element with a click event handler will add a message—likewise with any other event.

The function setTimeout is called with 2 arguments: a message to add to the queue, and a time value (optional; defaults to 0). The time value represents the (minimum) delay after which the message will actually be pushed into the queue. If there is no other message in the queue, and the stack is empty, the message is processed right after the delay. However, if there are messages, the setTimeout message will have to wait for other messages to be processed. For this reason, the second argument indicates a minimum time—not a guaranteed time.


__Zero delays__

Zero delay doesn't actually mean the call back will fire-off after zero milliseconds. Calling setTimeout with a delay of 0 (zero) milliseconds doesn't execute the callback function after the given interval.

The execution depends on the number of waiting tasks in the queue. In the example below, the message ''this is just a message'' will be written to the console before the message in the callback gets processed, because the delay is the minimum time required for the runtime to process the request (not a guaranteed time).

Basically, the setTimeout needs to wait for all the code for queued messages to complete even though you specified a particular time limit for your setTimeout.

    (function() {

        console.log('this is the start');

        setTimeout(function cb() {
            console.log('Callback 1: this is a msg from call back');
        }); // has a default time value of 0

        console.log('this is just a message');

        setTimeout(function cb1() {
            console.log('Callback 2: this is a msg from call back');
        }, 0);

        console.log('this is the end');

    })();

    // "this is the start"
    // "this is just a message"
    // "this is the end"
    // "Callback 1: this is a msg from call back"
    // "Callback 2: this is a msg from call back"


__Several runtimes communicating together__
A web worker or a cross-origin iframe has its own stack, heap, and message queue. Two distinct runtimes can only communicate through sending messages via the postMessage method. This method adds a message to the other runtime if the latter listens to message events.


### Never blocking
A very interesting property of the event loop model is that JavaScript, unlike a lot of other languages, never blocks. Handling I/O is typically performed via events and callbacks, so when the application is waiting for an IndexedDB query to return or an XHR request to return, it can still process other things like user input.
