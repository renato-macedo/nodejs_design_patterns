# Factory

## A generic interface for creating objects

A factory allow us to separate the object creation from its implementation; essentially, a factory wraps the creation of a new instance giving us more flexibility and control in the way we do it. This pattern can be really useful when the creation process is complex.

A factory can also be used as an encapsulation mechanism, thanks to closures. Encapsulation refers to the technique of controlling the access to some internal details of an object by preventing the external code from manipulating them directly. The interaction with the object happens only through its public interface, isolating the external code from the changes in the implementation details of the object.