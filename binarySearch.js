// Write a function that takes in a sorted array of integers 
// as well as a target integer. The function should use the 
// Binary Search algorithm to determine if the target integer is
// in the array and should return its index if it is, otherwise
// return -1.

// Sample input: 
//             array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
//             target = 33
// Sample output: index = 3;

//Naive approach: This is a great example of using two pointers
//to sort through the array. We can use a left and right pointers,
//then we can calculate the middle pointer as well
//(left + right pointers divided by two, rounded down) to then 
//compare the value at index middle pointer to the target value 
//we're trying to find. If the middle pointer is less than the 
//target value, we make the right pointer equal to the value of 
//the middle pointer and erase the middle pointer. If the value
//is greater than the target, we can move our left pointer to equal
//the value of the middle pointer and erase the middle pointer.
//We can repeat this process until both pointers are directly on 
//the target index 3, of our target value 33. 

//Time complexity: O(log(n)) this is because every time we compare
//the middle pointer to our target, we are eliminating half of the
//values we're searching through. 

//Space complexity: O(1) because we're searching in place and not
//using any extra space, besides our pointers which are O(1).

//O(log(n)) time | O(1) space complexity
function binarySearch(array, target) {

return helper(array, target, 0, array.length - 1);
}

function helper(array, target, left, right) {

if(left > right) {
  return -1;
}

let middle = (left + right)/2;
let potentialMatch = array[middle];

if(target == potentialMatch) {
  return middle;
} else if(target < potentialMatch) {
  return helper(array, target, middle + 1, right);
} else{
  return helper(array, target, right, middle - 1);
}
}


