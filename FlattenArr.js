/* 
Theory Question: We need to create a custom Arrry.flat(n).

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.customFlat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.customFlat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.customFlat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.customFlat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]


As a expereiced candidate Interviewer can check Following topics from this question:
1. Understanding of Array Methods
2. Recursion
3. Function Prototypes and Extensions

*/


// Define custom flat function on Array prototype
Object.defineProperty(Array.prototype, 'customFlat', {
    value: function(depth = 1) {
        // Function to recursively flatten the array up to given depth
        function flatten(arr, currentDepth) {
            return arr.reduce((acc, val) => {
                if (Array.isArray(val) && currentDepth > 0) {
                    // Recursively flatten arrays up to the current depth
                    return acc.concat(flatten(val, currentDepth - 1));
                } else {
                    // Append non-array elements directly
                    return acc.concat(val);
                }
            }, []);
        }

        // Use the flatten function with the specified depth
        return flatten(this, depth);
    },
    writable: true,
    configurable: true
});

// Test cases
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.customFlat());        // [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.customFlat());        // [0, 1, 2, [3, [4, 5]]]
console.log(arr2.customFlat(2));       // [0, 1, 2, 3, [4, 5]]
console.log(arr2.customFlat(Infinity)); // [0, 1, 2, 3, 4, 5]

