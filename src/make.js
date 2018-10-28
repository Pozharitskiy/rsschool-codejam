function sum(a, b) { 
return a + b; 
} 

const make = (...firstCallArgs) => { 
const storage = []; 
if (typeof firstCallArgs[0] === 'function') return null; 
storage.push(...firstCallArgs); 

const f = (...args) => { 
if (typeof args[0] === 'function') { 
return storage.reduce(args[0]); 
} 
storage.push(...args); 
return f; 
}; 

return f; 
};