var arrayStrings = ["zero", "one", "two", "three"];
var arrayNumbers = [0, 1, 2, 3, 4];
var arrayBoolean = [true, false, false, true];

// This method uses the pop command to remove the last value in the arrayStrings variable
arrayStrings.pop();

// This method uses the shift command to remove and return the first element in the array and shows that the first element is changed
console.log(arrayNumbers[0]);
console.log(arrayNumbers.shift());
console.log(arrayNumbers[0]);

// This method uses the push command to add an element to the end of the array
arrayBoolean.push(true);




// This following prints show my understanding of array positions
console.log(`The 2nd string is ${arrayStrings[1]}, and the third string is ${arrayStrings[2]}.`);
console.log(`The last number in the array is ${arrayNumbers[3]}`);
console.log(`The first boolean is ${arrayBoolean[0]}, and the second boolean is ${arrayBoolean[1]}`);
