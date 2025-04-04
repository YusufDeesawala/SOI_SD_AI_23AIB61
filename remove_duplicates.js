function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const inputArray = [1, 2, 3, 3, 5, 5, 6, 7, 8, 8];
const uniqueArray = removeDuplicates(inputArray);
console.log(uniqueArray); 
