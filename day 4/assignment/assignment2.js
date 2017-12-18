function alphaOrder(string){

    // first string will be converted into array n 
    //then that will be sorted in alphabetical order 
    //and then join as string
    let array = string.split('').sort().join(''); 

    return array;
}
console.log(alphaOrder("hello"));