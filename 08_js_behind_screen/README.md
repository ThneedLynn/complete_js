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
 - JS engine: program that executes js code. e.g. V8 engine (chrome)<img width="776" alt="Screen Shot 2022-02-10 at 10 38 14 PM" src="https://user-images.githubusercontent.com/42024653/153554882-1a2a853d-baa5-4c3b-a8ce-ca1f54668c52.png">

 - Compilation: entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.


 Source code ->(compilation) machine code in portable file -> (execution) Program running


 - Interpreter runs through the source code and executes it line by line.

Source code -> (execution) Program running

- Just-in-time (JIT) [JS NOW]
Entire code is converted into machine code at once, then executed immediately
<img width="1364" alt="Screen Shot 2022-02-10 at 11 22 49 PM" src="https://user-images.githubusercontent.com/42024653/153554866-0962eece-7249-4f5c-94aa-8c7be65f2f3a.png">


 ### JS runtime in the broswer
 - JS engine
 - Web Api: functionalities provided to the engine, accessible on window object
 - JS callback queue: e.g. event handler callback function


<img width="1417" alt="Screen Shot 2022-02-10 at 11 28 38 PM" src="https://user-images.githubusercontent.com/42024653/153554931-e686452c-33e4-42d4-8497-ee3b19eb4eb4.png">

 ### JS runtime in the node.js
  - JS engine
  - C++ bindings & thread pool
  - JS callback queue

<img width="1276" alt="Screen Shot 2022-02-10 at 11 51 26 PM" src="https://user-images.githubusercontent.com/42024653/153555098-ec33e109-0759-4b71-b66b-2397afc8351f.png">


### Execution context
-
<img width="1387" alt="Screen Shot 2022-02-10 at 11 35 35 PM" src="https://user-images.githubusercontent.com/42024653/153555073-83d1da21-6ce1-4af5-88c3-64b6839e18b8.png">

- Details
<img width="1417" alt="Screen Shot 2022-02-10 at 11 42 23 PM" src="https://user-images.githubusercontent.com/42024653/153555085-8c1ecf83-1c49-4416-8912-c88b5f54ced4.png">


## The call stack 

Place where execution contexts get stacked on top of each other, to keep track of where we are in the execution. 

