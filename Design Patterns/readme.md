In layman terms , a Pattern is a repitition of a certain thing i.e an idea or a design, etc. For ex. 7 days in a week, 24 hrs in a day, repetitive design in a dress, square glass pane in a building...

Similarily in CS we have design pattern at the most basic initial level of a very large complex application basically a building block that helps us to create that complex applications without much hassle.

One of the most important aspects of writing maintainable code is being able to notice the recurring themes in that code and optimize them. This is an area where knowledge of design patterns can prove invaluable.

What is a Pattern?
A pattern is a reusable solution that can be applied to commonly occurring problems in software design - in our case - in writing JavaScript web applications. Another way of looking at patterns are as templates for how we solve problems - ones which can be used in quite a few different situations.

Design patterns are quite a powerful approach to getting all of the developers in an organization or team on the same page when creating or maintaining solutions. If considering working on a pattern of your own, remember that although they may have a heavy initial cost in the planning and write-up phases, the value returned from that investment can be quite worth it. Always research thoroughly before working on new patterns however, as you may find it more beneficial to use or build on top of existing proven patterns than starting afresh.

Design patterns have three main benefits:

1) Patterns are proven solutions: They provide solid approaches to solving issues in software development using proven techniques that reflect the experience and insights the developers that helped define them bring to the pattern.
2) Patterns can be easily reused: A pattern usually reflects an out of the box solution that can be adapted to suit our own needs. This feature makes them quite robust.
3) Patterns can be expressive: When we look at a pattern there’s generally a set structure and vocabulary to the solution presented that can help express rather large solutions quite elegantly.

Patterns are not an exact solution. It’s important that we remember the role of a pattern is merely to provide us with a solution scheme. Lets take a look at some of the other advantages patterns have to offer.

- Reusing patterns assists in preventing minor issues that can cause major problems in the application development process. What this means is when code is built on proven patterns, we can afford to spend less time worrying about the structure of our code and more time focusing on the quality of our overall solution. This is because patterns can encourage us to code in a more structured and organized fashion avoiding the need to refactor it for cleanliness purposes in the future.
- Patterns can provide generalized solutions which are documented in a fashion that doesn't require them to be tied to a specific problem. This generalized approach means that regardless of the application (and in many cases the programming language) we are working with, design patterns can be applied to improve the structure of our code.
- Certain patterns can actually decrease the overall file-size footprint of our code by avoiding repetition. By encouraging developers to look more closely at their solutions for areas where instant reductions in repetition can be made, e.g. reducing the number of functions performing similar processes in favor of a single generalized function, the overall size of our codebase can be decreased. This is also known as making code more DRY.
- Patterns add to a developer's vocabulary, which makes communication faster.
- Patterns that are frequently used can be improved over time by harnessing the collective experiences other developers using those patterns contribute back to the design pattern community. In some cases this leads to the creation of entirely new design patterns whilst in others it can lead to the provision of improved guidelines on how specific patterns can be best used. This can ensure that pattern-based solutions continue to become more robust than ad-hoc solutions may be.
 

Requirements for a pattern to be valid is that they display some recurring phenomenon. This is often something that can be qualified in at least three key areas, referred to as the rule of three. To show recurrence using this rule, one must demonstrate:

- Fitness of purpose - how is the pattern considered successful?
- Usefulness - why is the pattern considered successful?
- Applicability - is the design worthy of being a pattern because it has wider applicability? If so, this needs to be explained. When reviewing or defining a pattern, it is important to keep the above in mind.

Anti-Patterns
If we consider that a pattern represents a best practice, an anti-pattern represents a lesson that has been learned. 

To summarize, an anti-pattern is a bad design that is worthy of documenting. Examples of anti-patterns in JavaScript are the following:

- Polluting the global namespace by defining a large number of variables in the global context
- Passing strings rather than functions to either setTimeout or setInterval as this triggers the use of eval() internally.
- Modifying the Object class prototype (this is a particularly bad anti-pattern)
- Using JavaScript in an inline form as this is inflexible
- The use of document.write where native DOM alternatives such as document.createElement are more appropriate. document.write has been grossly misused over the years and has quite a few disadvantages including that if it's executed after the page has been loaded it can actually overwrite the page we're on, whilst document.createElement does not. We can see here for a live example of this in action. It also doesn't work with XHTML which is another reason opting for more DOM-friendly methods such as document.createElement is favorable.

Knowledge of anti-patterns is critical for success. Once we are able to recognize such anti-patterns, we're able to refactor our code to negate them so that the overall quality of our solutions improves instantly.

Design patterns can be broken down into a number of different categories. These are three of these categories- 

1) Creational Design Patterns
Creational design patterns focus on handling object creation mechanisms where objects are created in a manner suitable for the situation we're working in. The basic approach to object creation might otherwise lead to added complexity in a project whilst these patterns aim to solve this problem by controlling the creation process.

Some of the patterns that fall under this category are: Constructor, Factory, Abstract, Prototype, Singleton and Builder.

2) Structural Design Patterns
Structural patterns are concerned with object composition and typically identify simple ways to realize relationships between different objects. They help ensure that when one part of a system changes, the entire structure of the system doesn't need to do the same. They also assist in recasting parts of the system which don't fit a particular purpose into those that do.

Patterns that fall under this category include: Decorator, Facade, Flyweight, Adapter and Proxy.

3) Behavioral Design Patterns
Behavioral patterns focus on improving or streamlining the communication between different or unlike objects in a system.

Some behavioral patterns include: Iterator, Mediator, Observer and Visitor.
