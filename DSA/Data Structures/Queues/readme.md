## Queues

Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).  A good example of queue is any queue of consumers for a resource where the consumer that came first is served first.


### Operations on Queue:

Mainly the following four basic operations are performed on queue:

1. __Enqueue__: Adds an item to the queue. If the queue is full, then it is said to be an Overflow condition.
2. __Dequeue__: Removes an item from the queue. The items are popped in the same order in which they are pushed. If the queue is empty, then it is said to be an Underflow condition.
3. __Front__: Get the front item from queue.
4. __Rear__: Get the last item from queue.


### Applications of Queue:

Queue is used when things don’t have to be processed immediatly, but have to be processed in First InFirst Out order like Breadth First Search. This property of Queue makes it also useful in following kind of scenarios.

1. When a resource is shared among multiple consumers. Examples include CPU scheduling, Disk Scheduling. / 
Queues are widely used as waiting lists for a single shared resource like printer, disk, CPU.
2. Queues are used in asynchronous transfer of data (where data is not being transferred at the same rate between two processes) for eg. pipes, file IO, sockets.
3. Queues are used as buffers in most of the applications like MP3 media player, CD player, etc.
4. Queue are used to maintain the play list in media players in order to add and remove the songs from the play-list.
5. Queues are used in operating systems for handling interrupts.


## Array implementation Of Queue

For implementing queue, we need to keep track of two indices, front and rear. We enqueue an item at the rear and dequeue an item from the front. If we simply increment front and rear indices, then there may be problems, the front may reach the end of the array. The solution to this problem is to increase front and rear in circular manner.


## Complexity Analysis:

__Time Complexity:__
Operations              Complexity
Enque(insertion)           O(1)
Deque(deletion)            O(1)
Front(Get front)           O(1)
Rear(Get Rear)             O(1)              
__Auxiliary Space:__ O(N)
(N is the size of array for storing elements.)

__Pros of Array Implementation:__
- Easy to implement.

__Cons of Array Implementation:__
- Static Data Structure, fixed size.
- If the queue has a large number of enqueue and dequeue operations, at some point we may not we able to insert elements in the queue even if the queue is empty (this problem is avoided by using circular queue).


### Types of Queue

__1. Simple Queue__ [Simple Queue]("./mds/simple queue.md")
In a simple queue, insertion takes place at the rear and removal occurs at the front. It strictly follows FIFO rule.

__2. Circular Queue__
In a circular queue, the last element points to the first element making a circular link.

The main advantage of a circular queue over a simple queue is better memory utilization. If the last position is full and the first position is empty then, an element can be inserted in the first position. This action is not possible in a simple queue.

__3. Priority Queue__
A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue.

Insertion occurs based on the arrival of the values and removal occurs based on priority.

__4. Deque (Double Ended Queue)__
Double Ended Queue is a type of queue in which insertion and removal of elements can be performed from either from the front or rear. Thus, it does not follow FIFO rule (First In First Out).
