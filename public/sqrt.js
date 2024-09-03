const Module = require('./int_sqrt.js'); // Load the generated WebAssembly module

Module.onRuntimeInitialized = () => {
    // Use cwrap to create a JavaScript wrapper for the 'int_sqrt' function
    const int_sqrt = Module.cwrap('int_sqrt', 'number', ['number']);
    
    // Call the 'int_sqrt' function with different arguments
    console.log(int_sqrt(16)); // Outputs the integer square root of 12
    console.log(int_sqrt(100)); // Outputs the integer square root of 28
};