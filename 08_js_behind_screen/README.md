# Pig game (掷骰子)


### What is JS

- High-level
- Garbage-collected
- Interpreted or just-in-time compiles
- Multi-paradigm
- Prototype-based object-oriented
- Firt-class functions
- Dynamically-typed
- Single-threaded
- Non-blocking event loop: 
 JS runs in one single thread, so it can only do one thing at a time. By using an event loop, takes long running tasks, execute them in the background, and put them back in the main thread once they are finished.

 ### JS engine
 - JS engine: program that executes js code. e.g. V8 engine (chrome)
 - Compilation: entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.


 Source code ->(compilation) machine code in portable file -> (execution) Program running


 - Interpreter runs through the source code and executes it line by line.

Source code -> (execution) Program running

- Just-in-time (JIT) [JS NOW]
Entire code is converted into machine code at once, then executed immediately


 ### JS runtime in the broswer
 - JS engine
 - Web Api: functionalities provided to the engine, accessible on window object
 - JS callback queue: e.g. event handler callback function

 ### JS runtime in the node.js
  - JS engine
  - C++ bindings & thread pool
  - JS callback queue

### Execution context
-
- Details


## The call stack 

Place where execution contexts get stacked on top of each other, to keep track of where we are in the execution. 

