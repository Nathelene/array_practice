var friends = ["amy", "rachel","ross","marcel"];
// .push() Will add an element to the end of the array as well as return the length of the new array.
// * Requires an argument
friends.push("monica");
console.log(friends);


var friendsAge = [20, 19, 43, 7];
// .shift() will remove the first element from the array and return the removed element.
// * Does not require an argument
friendsAge.shift();
console.log(friendsAge);


var likesCoffee = [true, true, false, true];
// .pop() will remove the last element from an array and return that elements value.
// * Does not require an argument
likesCoffee.pop();
console.log(likesCoffee);

//Index positions start from 0 and go up by one down the line.
 //For ex: In the last array the index positions left to right are 0, 1, 2, 3