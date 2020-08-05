The Singleton Pattern

The Singleton pattern is thus known because it restricts instantiation of a class to a single object. Classically, the Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn't exist. In the event of an instance already existing, it simply returns a reference to that object.

Singletons differ from static classes (or objects) as we can delay their initialization, generally because they require some information that may not be available during initialization time. They don't provide a way for code that is unaware of a previous reference to them to easily retrieve them. This is because it is neither the object or "class" that's returned by a Singleton, it's a structure. Think of how closured variables aren't actually closures - the function scope that provides the closure is the closure.

In JavaScript, Singletons serve as a shared resource namespace which isolate implementation code from the global namespace so as to provide a single point of access for functions.

In the GoF book, the applicability of the Singleton pattern is described as follows:
- There must be exactly one instance of a class, and it must be accessible to clients from a well-known access point.
- When the sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code. (See Example 2)

It is important to note the difference between a static instance of a class (object) and a Singleton: whilst a Singleton can be implemented as a static instance, it can also be constructed lazily, without the need for resources nor memory until this is actually needed.

If we have a static object that can be initialized directly, we need to ensure the code is always executed in the same order (e.g in case objCar needs objWheel during its initialization) and this doesn't scale when you have a large number of source files.

Whilst the Singleton has valid uses, often when we find ourselves needing it in JavaScript it's a sign that we may need to re-evaluate our design.

They're often an indication that modules in a system are either tightly coupled or that logic is overly spread across multiple parts of a codebase. Singletons can be more difficult to test due to issues ranging from hidden dependencies, the difficulty in creating multiple instances, difficulty in stubbing dependencies and so on.

For further reading on the Module pattern ->
- https://www.ibm.com/developerworks/webservices/library/co-single/index.html
- http://misko.hevery.com/2008/10/21/dependency-injection-myth-reference-passing/