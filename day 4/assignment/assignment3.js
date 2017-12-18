function capitalize(string)   //declaring function
{
  var arr = string.split(' ');  //will split the string into array
  console.log(string.split(' ')); 
  var arr2 = [];
    
  for(var i = 0; i < arr.length; i++){  //for loop to capitalize first character of each string

      arr2.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));    //to capitalize first character
  }
  return arr2.join(' ');           //will combile array into a string
}
console.log(capitalize("the quick brown fox")); //result